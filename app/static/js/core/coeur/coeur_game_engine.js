import GameEngine from '../common_jeu/game_engine.js';
import FallingItem from './falling_item.js';

export default class CoeurGameEngine extends GameEngine {

    delta;
    constructor(canvas, width, height) {

        super(canvas, width, height)
        this.delta = 1

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
        let objectif = destinations[Math.floor(Math.random() * destinations.length)]
        
        let o = new FallingItem({x:choice==1?this.canvas.width-100:100,y:0},{x:0,y:100},{x:50,y:50},objectif)
        o.canStrafe = true
        this.addDynamicObject(o)
    }
}