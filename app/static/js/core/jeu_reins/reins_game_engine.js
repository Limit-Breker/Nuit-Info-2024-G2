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

export default class ReinsGameEngine extends GameEngine {

    delta;
    constructor(canvas, width, height) {

        super(canvas, width, height)
        this.delta = 1
        this.background = new Image()
        this.background.src = "/static/images/jeu_reins/game-reins.png"
    }

    update(deltaTime) {
        
        this.staticGameObjects.forEach(
            obj => {
                this.dynamicGameObjects.forEach(
                    objDynamic => {
                        if(obj.collideWithADynamicItem(objDynamic)) {
                            /*
                            if(obj.objectif!=objDynamic.objectif) {
                                const audio = new Audio('/static/images/jeu_reins/wrong.wav')
                                console.log(audio)
                                audio.currentTime = 0;
                                audio.play()
                            }
                            */   
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

        if(this.dynamicGameObjects.length==0) {
            this.genererObjet()
            this.delta+=0.2
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
    }
}
