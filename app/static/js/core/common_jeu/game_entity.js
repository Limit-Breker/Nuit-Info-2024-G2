export default class GameEntity {

    position;
    speed;
    dimensions;
    sprite;

    constructor(position, speed, dimensions, sprite = null) {

        this.position = position
        this.speed = speed
        this.dimensions = dimensions

    }

    render(context) {
        if (this.sprite != null) {

        } else {
            context.fillStyle = 'red';
            context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
        }
    }

    update(deltaTime) {
        // console.log(this.position, this.speed)
        this.position.x += this.speed.x * deltaTime;
        this.position.y += this.speed.y * deltaTime;
    }

    isInBounds(height,width) {
        return this.position.x < width - this.dimensions.x && this.position.x >= 0 && this.position.y < height - this.dimensions.y && this.position.y >= 0
    }

    intersects(position) {
        return (
            this.position.x < position.x && 
            this.position.x + this.dimensions.x > position.x && 
            this.position.y < position.y && 
            this.position.y + this.dimensions.y > position.y
        )
    }
}