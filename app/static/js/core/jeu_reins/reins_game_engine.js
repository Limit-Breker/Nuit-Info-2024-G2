import GameEngine from '../common_jeu/game_engine.js';
import FallingItem from './falling_item.js';

let sprites = [
  new Image(),
  new Image(),
  new Image()
]
sprites[0].src = "/static/images/jeu_reins/reins-poison.svg"
sprites[1].src = "/static/images/jeu_reins/tortue.svg"
sprites[2].src = "/static/images/jeu_reins/reins-bouteille.svg"

let vie = new Image()
vie.src = "/static/images/jeu_rein/vie.svg"

export default class ReinsGameEngine extends GameEngine {

    delta;
    constructor(canvas, width, height) {

        super(canvas, width, height)
        this.delta = 1
        this.background = new Image()
        this.background.src = "/static/images/jeu_reins/game-reins.webp"
        this.vies = 3
        this.score = 0
        this.vie = new Image()
        this.vie.src = "/static/images/jeu_reins/vie.svg"
    }

    update(deltaTime) {
        
        this.staticGameObjects.forEach(
            obj => {
                this.dynamicGameObjects.forEach(
                    objDynamic => {
                        if(obj.collideWithADynamicItem(objDynamic)) {
                          console.log(obj.objectif, objDynamic.objectif)
                            if(obj.objectif!=objDynamic.objectif) {
                                // const audio = new Audio('/static/images/jeu_reins/wrong.wav')
                                // console.log(audio)
                                // audio.currentTime = 0;
                                // audio.play()
                                this.vies -= 1
                                if (this.vies == 0)
                                  this.running = false;
                            }
                            else {
                              this.score += 1
                              if (this.score > 1) {
                                console.log("WIN")
                                  const response = fetch('/api/profile/organs/', {
                                    method: 'PATCH',
                                    body: JSON.stringify({"rein": true}),
                                    headers: {
                                        'X-CSRFToken': csrftoken,
                                        'Content-Type': 'application/json'
                                    }
                                });
                              }
                            }
                            this.removeDynamicObject(objDynamic)
                        }
                    }
                )
                
            }
        );
        
        this.dynamicGameObjects.forEach(
            obj => {
                if(obj.isInBounds(this.canvas.height,this.canvas.width)) {
                    obj.update(deltaTime)
                }
            }
        )
    }

    loop() {
        
        if (!this.running) {
          this.context.fillStyle = `rgba(0, 0, 0, 0.25)`
          this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
          this.context.fillStyle = "white"
          this.context.font = "76px sans-serif";
          this.context.fillText("Perdu", this.canvas.width / 2 -100, this.canvas.height / 2 -38);
          this.context.fillText("Votre score : "+this.score, 100, this.canvas.height / 2 +38);
          this.context.fillStyle = "blue"
          this.context.fillRect(this.canvas.width /4, this.canvas.height/2 + 100, this.canvas.width / 2, 100)
          this.context.fillStyle = "black"
          this.context.font = "45px sans-serif";
          this.context.fillText("Rejouer", this.canvas.width /4 +90, this.canvas.height/2 + 100 +60);
          return;
        }

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastFrameTime) / 1000; // en secondes
        this.lastFrameTime = currentTime;

        if(this.dynamicGameObjects.length==0) {
            this.genererObjet()
            this.delta+=0.6
          }

        this.update(deltaTime);
        this.render();
        requestAnimationFrame(() => this.loop());

    }

    

    genererObjet() {
        let destinations = [-1,0,1]
        let i = Math.floor(Math.random() * destinations.length)
        let o = new FallingItem({x:(this.canvasDimensions.x - 150) /2,y:250},{x:0,y:100},{x:150, y: 150},destinations[i],this.delta)
        o.sprite = sprites[i]
        o.canStrafe = true
        this.addDynamicObject(o)
    }

    renderBackground() {
        this.context.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.vies; i++) {
          this.context.drawImage(this.vie, 1 + i* 60, 0, 60, 60)
        }
        this.context.fillStyle = "black"
        this.context.font = "48px sans-serif";
        this.context.fillText(this.score, 10, 100);
    }
}
