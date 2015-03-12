

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    
    game.load.image('sky', 'assets/sky.png');

}//END OF PRELOAD



//Public Var




function create() {

game.add.sprite(0,0, 'sky');
game.add.text(400, 300, 'TEST TEST TEST TEST TEST');
   

    
}//END OF CREATE






function update() {

  

    



}//END OF UPDATE