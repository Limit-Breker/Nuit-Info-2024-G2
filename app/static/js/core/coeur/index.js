
import FallingItem from './falling_item.js';
import StaticItem from './static_item.js';
import CoeurGameEngine from './coeur_game_engine.js';

let canvasDimensions = {x:700,y:document.documentElement.clientHeight - 4}
let canvasId = 'gameCanvas';
let canvas = document.getElementById(canvasId);
let game = new CoeurGameEngine(canvas, canvasDimensions.x, canvasDimensions.y);
let poubelleGauche = new StaticItem({x:0,y:canvasDimensions.y - 200},{x:0,y:0},{x:200,y:200},null,false)
let center = new StaticItem({x:0,y:canvasDimensions.y - 1},{x:0,y:0},{x:canvasDimensions.x,y:1},null,true)
let poubelleDroite = new StaticItem({x:canvasDimensions.x - 200, y:canvasDimensions.y+1 - 200},{x:0,y:0},{x:200,y:200},null,false)


if (!canvas) {
    throw new Error(`Canvas with ID "${canvasId}" not found.`);
}

let canvasLeft = canvas.offsetLeft + canvas.clientLeft;
let canvasTop = canvas.offsetTop + canvas.clientTop;

let rein = new Image()
rein.src = "/static/images/jeu_coeur/etoile-jeu.svg"

poubelleGauche.render = function(context) {
  context.drawImage(rein, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
}

let mangrove = new Image()
mangrove.src = "/static/images/jeu_coeur/coeur-jeu.svg"

poubelleDroite.render = function(context) {
  context.drawImage(mangrove, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
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
        game.dynamicGameObjects.forEach(
            objDynamic => {
                if(poubelleGauche.collideWithADynamicItem(objDynamic)) {
                    
                    game.removeDynamicObject(objDynamic)
                    if (poubelleGauche.objective == objDynamic.objective) {
                      game.score++
                    }
                    else {
                      game.score--
                    }
                }
            }
        )
    
        console.log(game.dynamicGameObjects[0].speed.x)
    }
    if (poubelleDroite.intersects({x:x,y:y})) {
        console.log("poubelleDroite")
        game.dynamicGameObjects.forEach(
            objDynamic => {
                if(poubelleDroite.collideWithADynamicItem(objDynamic)) {
                    
                    game.removeDynamicObject(objDynamic)
                    if (poubelleDroite.objective == objDynamic.objective) {
                      game.score++
                    }
                    else {
                      game.score--
                    }
                }
            }
        )
        console.log(game.dynamicGameObjects[0].speed.x)
    }
    
}, 
false
);