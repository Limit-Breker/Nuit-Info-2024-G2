import GameEntity from '../common_jeu/game_entity.js';

export default class FallingItem extends GameEntity {

    objectif;
    delta;

    constructor(position, dimensions, speed, objectif,delta) {
        super(position, dimensions, speed);
        console.log("constructeur falling item",delta)
        this.delta = delta;
        this.objectif = objectif;
        this.canStrafe = true
    }

    update(deltaTime) {
        
    
        this.speed.y+=2+(this.delta<30?this.delta:30);

        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;
    }

    strafeLeft(canvasDimensions) {
        if (!this.canStrafe) {
            return
        }
        let initialSpeed = this.speed.y
        this.speed.x = -900
        this.speed.y = 10
        this.canStrafe = false
        let testEndStrafe = () => {
            console.log(this.position.x)
            if (this.position.x <= 100 - this.dimensions.x /2 ) {
                this.position.x = 100 - this.dimensions.x /2
                this.speed.y = initialSpeed
                this.speed.x = 0
                this.canStrafe = true
            }
            else {
                setTimeout(testEndStrafe, 10)
            }
        }
        testEndStrafe()
    }
    
    strafeRight(canvasDimensions) {
        let initialSpeed = this.speed.y
        this.speed.x = 900
        this.speed.y = 10
        this.canStrafe = false
        let testEndStrafe = () => {
            if (this.position.x >= canvasDimensions.x - 100 - this.dimensions.x /2 ) {
                this.speed.x = 0
                this.position.x = canvasDimensions.x - 100 - this.dimensions.x /2
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