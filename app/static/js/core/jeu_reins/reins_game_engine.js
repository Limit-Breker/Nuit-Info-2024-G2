import GameEngine from '../common_jeu/game_engine.js';
import FallingItem from './falling_item.js';

export default class ReinsGameEngine extends GameEngine {

    

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
                if(obj.isInBounds(this.height,this.width)) {
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

        this.update(deltaTime);
        this.render();
        console.log("ta soeur")

        if(this.dynamicGameObjects.length==0) {
            console.log("genere object")
            this.genererObjet()
        }

        requestAnimationFrame(() => this.loop());

        
    }

    handleBadChoice() {
        this.renderBackground
    }

    genererObjet() {
        console.log("coucou")
        let o = new FallingItem({x:(this.canvasDimensions.x - 50) /2,y:0},{x:0,y:100},{x:50,y:50})
        o.canStrafe = true
        this.addDynamicObject(o)
    }
}