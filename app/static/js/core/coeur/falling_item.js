import GameEntity from '../common_jeu/game_entity.js';

export default class FallingItem extends GameEntity {

    
    delta;
    objectif

    constructor(position, dimensions, speed,objectif) {
        super(position, dimensions, speed);
        this.delta = Math.random() * 5
        this.canStrafe = true,
        this.objectif=objectif
    }

    update(deltaTime) {
    
        this.speed.y+=this.delta;
        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;
    }



}