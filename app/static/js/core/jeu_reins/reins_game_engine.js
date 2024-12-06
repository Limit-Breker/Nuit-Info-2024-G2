import GameEngine from '../common_jeu/game_engine.js';
import FallingItem from './falling_item.js';

export default class ReinsGameEngine extends GameEngine {

    delta;
    constructor(canvas, width, height) {

        super(canvas, width, height)
        this.delta = 0.1

    }

    update(deltaTime) {
        
        this.staticGameObjects.forEach(
            obj => {
                this.dynamicGameObjects.forEach(
                    objDynamic => {
                        if(obj.collideWithADynamicItem(objDynamic)) {
                            console.log('CA COLLIDE TA MERE')
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
            this.delta+=35
        }

        this.update(deltaTime);
        this.render();
        console.log("ta soeur")

        

        requestAnimationFrame(() => this.loop());

        
    }

    

    genererObjet() {
        console.log("bite",this.delta)
        let destinations = [-1,0,1]
        let o = new FallingItem({x:(this.canvasDimensions.x - 50) /2,y:0},{x:0,y:100},{x:50,y:50},destinations[Math.floor(Math.random() * destinations.length)],this.delta)
        o.canStrafe = true
        this.addDynamicObject(o)
    }
}