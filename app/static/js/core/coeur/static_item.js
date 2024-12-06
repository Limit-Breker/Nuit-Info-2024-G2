import GameEntity from '../common_jeu/game_entity.js';

export default class StaticItem extends GameEntity {

    collisionnable;

    constructor(position, speed, dimensions, sprite = null,collosionnable) {

        super(position,speed,dimensions,sprite)
        this.collisionnable=collosionnable

    }

    collideWithADynamicItem(object) {
        let sortie = (
            object.position.x < this.position.x + this.dimensions.x &&
            object.position.x + object.dimensions.x  > this.position.x  &&
            object.position.y < this.position.y + this.dimensions.y &&
            object.position.y + object.dimensions.y  > this.position.y  
        )
        return sortie
    }

}