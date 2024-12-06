import GameEntity from '../common_jeu/game_entity.js';

export default class FallingItem extends GameEntity {

    objectif;
    delta;

    constructor(position, dimensions, speed, objectif,delta) {
        super(position, dimensions, speed);
        this.delta = delta;
        this.objectif = objectif;
        this.canStrafe = true
    }

    update(deltaTime) {
        this.speed.y+=2+(this.delta<30?this.delta:30);

        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;
    }
    
    strafe(x, canvasDimensions) {
        let initialSpeed = this.speed.y
        let direction = this.position.x < x ? 1 : -1
        this.speed.x = 900 * direction
        this.speed.y = 10
        this.canStrafe = false
        let testEndStrafe = () => { 
            if (this.position.x *direction >= (x - this.dimensions.x /2) *direction ) {
                this.speed.x = 0
                this.position.x = x - this.dimensions.x /2
                this.speed.y = initialSpeed
                this.canStrafe = true
            }
            else {
                setTimeout(testEndStrafe, 10)
            }
        }
        testEndStrafe()
    }

    

}