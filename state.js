var NeoBattleMon = NeoBattleMon || {};

NeoBattleMon.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

NeoBattleMon.game.state.add('mainMenu', NeoBattleMon.mainMenu);
NeoBattleMon.game.state.add('main', NeoBattleMon.main);

NeoBattleMon.game.state.start('mainMenu');