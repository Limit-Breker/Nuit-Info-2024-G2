
import GameEngine from '../common_jeu/game_engine.js';
import GameEntity from '../common_jeu/game_entity.js';

let canvasDimensions = {x:700,y:1000}

let poubelleGauche = new GameEntity({x:0,y:canvasDimensions.y - 200},{x:0,y:0},{x:200,y:200})
poubelleGauche.render = function(context) {
    context.fillStyle = 'grey';
    context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
}

let poubelleDroite = new GameEntity({x:canvasDimensions.x - 200, y:canvasDimensions.y - 200},{x:0,y:0},{x:200,y:200})
poubelleDroite.render = function(context) {
    context.fillStyle = 'grey';
    context.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
}
function genererObjet(game) {
    game.addDynamicObject(new GameEntity({x:(canvasDimensions.x - 50) /2,y:0},{x:0,y:100},{x:50,y:50}))
}

let game = new GameEngine("gameCanvas", canvasDimensions.x, canvasDimensions.y);
game.addStaticObject(poubelleGauche)
game.addStaticObject(poubelleDroite)
game.start();
genererObjet(game);


game.canvas.addEventListener('click', function(event) { 
    var x = event.x,
        y = event.y
    
        if (poubelleGauche.intersects({x:x,y:y})) {
            game.dynamicGameObjects[0].speed.x = -100
        }
        if (poubelleDroite.intersects({x:x,y:y})) {
            game.dynamicGameObjects[0].speed.x = 100
        }
}, false);


/*
document.addEventListener('DOMContentLoaded', () => {
    const game = new GameEngine('gameCanvas', 800, 600);

    // Ajouter des objets au moteur
    const player = new GameObject(100, 100);
    game.addObject(player);

    // Démarrer le jeu
    game.start();
});
*/