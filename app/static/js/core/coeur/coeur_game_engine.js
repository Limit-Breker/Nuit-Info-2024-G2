import GameEngine from '../common_jeu/game_engine.js';
import FallingItem from './falling_item.js';

let sprites = [
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
  new Image(),
]

sprites[0].src = "/static/images/jeu_coeur/coeur-cailloux.svg"
sprites[1].src = "/static/images/jeu_coeur/coeur-corail.svg"
sprites[2].src = "/static/images/jeu_coeur/coeur-filet.svg"
sprites[3].src = "/static/images/jeu_coeur/coeur-sac.svg"
sprites[4].src = "/static/images/jeu_coeur/coeur-coque.svg"
sprites[5].src = "/static/images/jeu_coeur/coeur-oxygene.svg"
sprites[6].src = "/static/images/jeu_coeur/coeur-sel.svg"

export default class CoeurGameEngine extends GameEngine {

    delta;
    constructor(canvas, width, height) {

        super(canvas, width, height)
        this.delta = 1
        this.vies = 5
        this.score = 0
        this.vie = new Image()
        this.vie.src = "/static/images/jeu_coeur/vie.svg"
        this.background = new Image()
        this.background.src = "/static/images/jeu_coeur/coeur-jeu.webp"

    }

    update(deltaTime) {
        
        this.staticGameObjects.forEach(
            obj => {
                this.dynamicGameObjects.forEach(
                    objDynamic => {
                        if(obj.collideWithADynamicItem(objDynamic) && obj.collisionnable) {
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
        
        if (!this.running) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastFrameTime) / 1000; // en secondes
        this.lastFrameTime = currentTime;

        if(this.dynamicGameObjects.length<2 ) {
            this.genererObjet()
            this.delta+=0
        }

            this.update(deltaTime);
            this.render();
            
            requestAnimationFrame(() => this.loop());

    }

    

    genererObjet() {
        let destinations = [true,false]
        let choice = destinations[Math.floor(Math.random() * destinations.length)]

        let choix = Math.floor(Math.random() * sprites.length)
        
        let o = new FallingItem({x:choice==1?this.canvas.width-100:100,y:0},{x:0,y:100},{x:50,y:50},choix > 3)
        o.sprite = sprites[choix]
        console.log(o)
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