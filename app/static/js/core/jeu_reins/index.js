
import FallingItem from './falling_item.js';
import StaticItem from './static_item.js';
import ReinsGameEngine from './reins_game_engine.js';

let canvasDimensions = {x:700,y:document.documentElement.clientHeight - 4}
let canvasId = 'gameCanvas';
let canvas = document.getElementById(canvasId);
let game = new ReinsGameEngine(canvas, canvasDimensions.x, canvasDimensions.y);
let poubelleGauche = new StaticItem({x:0,y:canvasDimensions.y - 200},{x:0,y:0},{x:200,y:200})
let center = new StaticItem({x:200,y:canvasDimensions.y - 1},{x:0,y:0},{x:300,y:1})
let poubelleDroite = new StaticItem({x:canvasDimensions.x - 200, y:canvasDimensions.y - 200},{x:0,y:0},{x:200,y:200})


if (!canvas) {
    throw new Error(`Canvas with ID "${canvasId}" not found.`);
}

let canvasLeft = canvas.offsetLeft + canvas.clientLeft;
let canvasTop = canvas.offsetTop + canvas.clientTop;


poubelleGauche.render = function(context) {
    context.fillStyle = 'grey';
    context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
}


poubelleDroite.render = function(context) {
    context.fillStyle = 'grey';
    context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
}


game.addStaticObject(poubelleGauche)
game.addStaticObject(poubelleDroite)
game.addStaticObject(center)
game.start();

game.canvas.addEventListener('click', function(event) { 
    var x = event.offsetX,
        y = event.offsetY;
    
    console.log(event);
    
    if (poubelleGauche.intersects({x:x,y:y})) {
        console.log("poubelleGauche")
        if (game.dynamicGameObjects[0].canStrafe) {
            game.dynamicGameObjects[0].strafeLeft(canvasDimensions)
        }
        console.log(game.dynamicGameObjects[0].speed.x)
    }
    if (poubelleDroite.intersects({x:x,y:y})) {
        console.log("poubelleDroite")
        if (game.dynamicGameObjects[0].canStrafe) {
            game.dynamicGameObjects[0].strafeRight(canvasDimensions)
        }
        console.log(game.dynamicGameObjects[0].speed.x)
    }
}, 
false
);