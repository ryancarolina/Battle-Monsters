



var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('arachnix', 'assets/Arachnix.png');
    game.load.image('shellshock', 'assets/ShellShock.png');
    game.load.image('gigantis', 'assets/Gigantis.png');
    game.load.image('porkchop', 'assets/PorkChop.png');
    game.load.image('backoo', 'assets/Backoo.png');
    game.load.image('gyascutys', 'assets/Gyascutys.png');
    game.load.image('abaia', 'assets/Abaia.png');
    game.load.image('blondeTrainerGuy', 'assets/BlondeGuy.png');
    game.load.image('purpleTrainerGirl', 'assets/PurpleGirl.png');

    game.load.spritesheet('attack', 'assets/Attack.png', 150, 150);
    game.load.spritesheet('block', 'assets/block.png', 225, 225);

    game.load.audio('HitSFX', ['assets/audio/Hit_Hurt14.wav']);
    game.load.audio('HitSFX2', ['assets/audio/Attack2.wav']);
    game.load.audio('HitSFX3', ['assets/audio/Attack3.wav'])
    game.load.audio('DefSFX', ['assets/audio/Defend19.wav']);
    game.load.audio('BgM', ['assets/audio/PokemonGymBattle.mp3']);
    game.load.audio('Crit', ['assets/audio/crit.wav']);


}//END OF PRELOAD



//Public Var

var monsterName1;
var monsterName1Text;
var monsterMAXHP1;
var monsterHP1;
var monsterHP1Text;
var monsterDEF1;
var monsterDEF1Text;
var monsterATK1;
var monsterATK1Text;
var monsterDMG1;
var monsterDMG1Text;
var monsterSPD1
var monsterSPD1Text;
var mKO1;


var monsterName2;
var monsterMAXHP2;
var monsterHP2;
var monsterHP2Text;
var monsterDEF2;
var monsterDEF2Text;
var monsterATK2;
var monsterATK2Text;
var monsterDMG2;
var monsterDMG2Text;
var monsterSPD2
var monsterSPD2Text;
var mKO2;

var d201;
var roundRoll1;
var d202;
var roundRoll2;
var monRoll;
var monNameRoll;
var randRoll;

var hitSfx;
var hitSfx2;
var hitSfx3;
var defSfx;
var critSfx;
var bgm;

var attackSprite;
var defSprite;



function create() {


    //Background Music
    bgm = game.add.audio('BgM');
    bgm.play();

    //Load background image
    game.add.sprite(0,0, 'sky');

    game.add.sprite(0, 400, 'blondeTrainerGuy');

    game.add.sprite(700, 40, 'purpleTrainerGirl');

    createMonster()

    createMonster2()

    game.time.events.repeat(Phaser.Timer.SECOND * 4, 100, autoBattle, this);
    
}//END OF CREATE



function createMonster(){

//Randomly create monster

    monRoll = Math.random() * 10;
    monRollRound = Math.round(monRoll);

    monRoll2 = Math.random() * 10;
    monRollRound2 = Math.round(monRoll2);

    monRoll3 = Math.random() * 10;
    monRollRound3 = Math.round(monRoll3);

    monRoll4 = Math.random() * 10;
    monRollRound4 = Math.round(monRoll4);

    monRoll5 = Math.random() * 5;
    monRollRound5 = Math.round(monRoll5);

    monRoll6 = Math.random() * 3;
    monRollRound6 = Math.round(monRoll6);

    monNameRoll = Math.random() * 7;

    if(monNameRoll <= 1){

        monsterName1 = "Arachnix";

    } else if(monNameRoll <= 2){

        monsterName1 = "Shellshock";

    } else if(monNameRoll <= 3){

        monsterName1 = "Backoo";

    } else if(monNameRoll <= 4){

        monsterName1 = "Porkchop";

    } else if(monNameRoll <= 5){

        monsterName1 = "Gigantis";

    } else if(monNameRoll <= 6){

        monsterName1 = "Gyascutys";

    } else if(monNameRoll > 6){

        monsterName1 = "Abaia";
    }

    //Populate monster data and render
    monsterName1;
    monsterHP1 = 20 + +monRollRound2;
    monsterDEF1 = 5 + +monRollRound3;
    monsterATK1 = 1 + +monRollRound4;
    monsterDMG1 = 1 + +monRollRound5;
    monsterSPD1 = monRollRound6;

    monsterName1Text = game.add.text(200, 370, monsterName1);
    monsterName1Text.font = 'Arial';
    monsterName1Text.fontSize = 20;
    monsterName1Text.fontWeight = 'bold';
    monsterName1Text.stroke = '#ffffff';
    monsterName1Text.strokeThickness = 3;

    monsterHP1Text = game.add.text(200, 410, 'HP: ' + monsterHP1);
    monsterHP1Text.font = 'Arial';
    monsterHP1Text.fontSize = 14;
    monsterHP1Text.fontWeight = 'bold';

    monsterDEF1Text = game.add.text(200, 450, 'DEF: ' + monsterDEF1);
    monsterDEF1Text.font = 'Arial';
    monsterDEF1Text.fontSize = 14;
    monsterDEF1Text.fontWeight = 'bold';

    monsterATK1Text = game.add.text(200, 490, 'ATK: ' + monsterATK1);
    monsterATK1Text.font = 'Arial';
    monsterATK1Text.fontSize = 14;
    monsterATK1Text.fontWeight = 'bold';

    monsterDMG1Text = game.add.text(200, 530, 'DMG: ' + monsterDMG1);
    monsterDMG1Text.font = 'Arial';
    monsterDMG1Text.fontSize = 14;
    monsterDMG1Text.fontWeight = 'bold';

    monsterSPD1Text = game.add.text(200, 570, 'SPD: ' + monsterSPD1);
    monsterSPD1Text.font = 'Arial';
    monsterSPD1Text.fontSize = 14;
    monsterSPD1Text.fontWeight = 'bold';

    loadMonSprite1()

    mKO1 = false;

}

function createMonster2(){

monRoll7 = Math.random() * 10;
    monRollRound7 = Math.round(monRoll7);

    monRoll8 = Math.random() * 10;
    monRollRound8 = Math.round(monRoll8);

    monRoll9 = Math.random() * 10;
    monRollRound9 = Math.round(monRoll9);

    monRoll10 = Math.random() * 10;
    monRollRound10 = Math.round(monRoll10);

    monRoll11 = Math.random() * 5;
    monRollRound11 = Math.round(monRoll11);

    monRoll12 = Math.random() * 3;
    monRollRound12 = Math.round(monRoll12);

    monNameRoll = Math.random() * 7;

    if(monNameRoll <= 1){

        monsterName2 = "Arachnix";

    } else if(monNameRoll <= 2){

        monsterName2 = "Shellshock";

    } else if(monNameRoll <= 3){

        monsterName2 = "Backoo";

    } else if(monNameRoll <= 4){

        monsterName2 = "Porkchop";

    } else if(monNameRoll <= 5){

        monsterName2 = "Gigantis";

    } else if(monNameRoll <= 6){

        monsterName2 = "Gyascutys";

    } else if(monNameRoll > 6){

        monsterName2 = "Abaia";
    }

    
    //Monster 2 Render Data
    monsterName2;
    monsterHP2 = 20 + +monRollRound8;
    monsterDEF2 = 5 + +monRollRound9;
    monsterATK2 = 1 + +monRollRound10;
    monsterDMG2 = 1 + +monRollRound11;
    monsterSPD2 = monRollRound12;

    monsterName2Text = game.add.text(500, 40, monsterName2);
    monsterName2Text.font = 'Arial';
    monsterName2Text.fontSize = 20;
    monsterName2Text.fontWeight = 'bold';
    monsterName2Text.stroke = '#ffffff';
    monsterName2Text.strokeThickness = 3;

    monsterHP2Text = game.add.text(500, 80, 'HP: ' + monsterHP2);
    monsterHP2Text.font = 'Arial';
    monsterHP2Text.fontSize = 14;
    monsterHP2Text.fontWeight = 'bold';

    monsterDEF2Text = game.add.text(500, 120, 'DEF: ' + monsterDEF2);
    monsterDEF2Text.font = 'Arial';
    monsterDEF2Text.fontSize = 14;
    monsterDEF2Text.fontWeight = 'bold';

    monsterATK2Text = game.add.text(500, 160, 'ATK: ' + monsterATK2);
    monsterATK2Text.font = 'Arial';
    monsterATK2Text.fontSize = 14;
    monsterATK2Text.fontWeight = 'bold';

    monsterDMG2Text = game.add.text(500, 200, 'DMG: ' + monsterDMG2);
    monsterDMG2Text.font = 'Arial';
    monsterDMG2Text.fontSize = 14;
    monsterDMG2Text.fontWeight = 'bold';

    monsterSPD2Text = game.add.text(500, 240, 'SPD: ' + monsterSPD2);
    monsterSPD2Text.font = 'Arial';
    monsterSPD2Text.fontSize = 14;
    monsterSPD2Text.fontWeight = 'bold';

    loadMonSprite2()

    mKO2 = false;

}

//BATTLE SYSTEM **********************************************
function battle() {

    spdRoll()

    if(TempMonsterSPD1 > TempMonsterSPD2){

        //Monster 1 Makes ATK roll
        d201 = Math.random() * 20;
        roundRoll1 = Math.round(d201);
        console.log(monsterName1 + " D20 ATK Roll: " + roundRoll1);

        TempATK1 = +monsterATK1 + +roundRoll1;
        console.log(monsterName1 + " ##############ATK ROll: " + TempATK1);

        //Check to see if ATK hit!
        if(TempATK1 > monsterDEF2){

           dmgRoll1()
           atkAnimation1()
        }

        if(TempATK1 <= monsterDEF2){

            console.log(monsterName2 + " Blocked " + monsterName1 + "'s Attack!");
            defAnimation1()
            defSound()
        }

    } else {

        //Monster 2 Makes ATK roll
        d202 = Math.random() * 20;
        roundRoll2 = Math.round(d202);
        console.log(monsterName2 + " D20 ATK Roll: " + roundRoll2);

        TempATK2 = +monsterATK2 + +roundRoll2;
        console.log(monsterName2 + " ###############ATK ROll: " + TempATK2);

        //Check to see if ATK hit!
        if(TempATK2 > monsterDEF1){

            dmgRoll2()
            atkAnimation2()
        }

        if(TempATK2 <= monsterDEF1){

            console.log(monsterName1 + " Blocked " + monsterName2 + "'s Attack!");
            defAnimation2()
            defSound()
        }
    }
}   

//END OF BATTLE SYSTEM **********************************************
//Auto Battle needs work... 
function autoBattle(){

    if(monsterHP1 <= 0 || monsterHP2 <= 0){

        game.paused = true;
    } else {

        battle()
    }
}

function combatLog(){

    monsterHP1Text.text = 'HP: ' + monsterHP1;

    monsterHP2Text.text = 'HP: ' + monsterHP2;
}

function loadMonSprite1(){

    if(monsterName1 === "Arachnix"){

        game.add.sprite(500, 430, 'arachnix');

    } else if(monsterName1 === "Shellshock"){

        game.add.sprite(500, 430, 'shellshock');

    } else if(monsterName1 === "Backoo"){

        game.add.sprite(500, 430, 'backoo');

    } else if(monsterName1 === "Porkchop"){

        game.add.sprite(500, 430, 'porkchop');

    } else if(monsterName1 === "Gigantis"){

        game.add.sprite(500, 430, 'gigantis');

    } else if(monsterName1 === "Gyascutys"){

        game.add.sprite(500, 430, 'gyascutys');

    } else if(monsterName1 === "Abaia"){

        game.add.sprite(500, 430, 'abaia');
    }
}

function loadMonSprite2(){

    if(monsterName2 === "Arachnix"){

        game.add.sprite(150, 100, 'arachnix');

    } else if(monsterName2 === "Shellshock"){

        game.add.sprite(150, 100, 'shellshock');

    } else if(monsterName2 === "Backoo"){

        game.add.sprite(150, 100, 'backoo');

    } else if(monsterName2 === "Porkchop"){

        game.add.sprite(150, 100, 'porkchop');

    } else if(monsterName2 === "Gigantis"){

        game.add.sprite(150, 100, 'gigantis');

    } else if(monsterName2 === "Gyascutys"){

        game.add.sprite(150, 100, 'gyascutys');

    } else if(monsterName2 === "Abaia"){

        game.add.sprite(150, 100, 'abaia');
    }
}

function reloadPage(){

    location.reload();
}

function knockOut(){

    if(monsterHP1 <= 0){

        game.add.text(500, 280, 'KNOCKED OUT!', { fontSize: '32px', fill: '#000'});

        //game.time.events.add(Phaser.Timer.SECOND * 2, 100, reloadPage, this);

        reloadPage()

        mKO1 = true;
    }

    if(monsterHP2 <= 0){

        game.add.text(150, 280, 'KNOCKED OUT!', { fontSize: '32px', fill: '#000'});

        //game.time.events.add(Phaser.Timer.SECOND * 2, 100, reloadPage, this);

        reloadPage()

        mKO2 = true;
    }
}

function spdRoll(){

    //Roll to see who attacks first!
    d201 = Math.random() * 20;

    roundRoll1 = Math.round(d201);
    console.log( monsterName1 + " ************D20 SPD Roll: " + roundRoll1);

    d202 = Math.random() * 20;

    roundRoll2 = Math.round(d202);
    console.log(monsterName2 + " *************D20 SPD Roll: " + roundRoll2);

    TempMonsterSPD1 = (+roundRoll1 + +monsterSPD1);
    console.log(monsterName1 + " SPD Roll: " + TempMonsterSPD1);

    TempMonsterSPD2 = (+roundRoll2 + +monsterSPD2);
    console.log(monsterName2 + " SPD Roll: " + TempMonsterSPD2);
}

function dmgRoll1(){
//Critical Check
    if(+roundRoll1 > 19 - +monsterSPD1){

        monsterHP2 -= monsterDMG1 * 2;
        critDMG1 = monsterDMG1 * 2;

        critSound()
        console.log(monsterName1 + " Scored a CRITICAL HIT! " + critDMG1);
    } else {

        monsterHP2 -= monsterDMG1;
        console.log(monsterName1 + " Hit " + monsterName2 + " For " + monsterDMG1);
        atkSound()
    }
}

function dmgRoll2(){
//Critical Check
    if(+roundRoll2 > 19 - +monsterSPD2){

        monsterHP1 -= monsterDMG2 * 2;
        critDMG2 = monsterDMG2 * 2;

        critSound()
        console.log(monsterName2 + " Scored a CRITICAL HIT! " + critDMG2);
    } else {

        monsterHP1 -= monsterDMG2;
        console.log(monsterName2 + " Hit " + monsterName1 + " For " + monsterDMG2);
        atkSound()
    }
}

function atkSound(){

    randRoll = Math.random() * 3;

    if(randRoll <= 1){

        hitSfx = game.add.audio('HitSFX');
        hitSfx.play();

    } else if(randRoll <= 2){

        hitSfx2 = game.add.audio('HitSFX2');
        hitSfx2.play();

    } else if(randRoll >2){

        hitSfx3 = game.add.audio('HitSFX3');
        hitSfx3.play();
    }

    
}

function critSound(){

    critSfx = game.add.audio('Crit');
    critSfx.play();
}

function defSound(){

    defSfx = game.add.audio('DefSFX');
    defSfx.play();
}

function atkAnimation1(){

    attackSprite = game.add.sprite(150, 100, 'attack');
    attackSprite.animations.add('attack');
    anim = attackSprite.animations.play('attack', 15, false);
    anim.onComplete.add(destroyAnim, this);
    
}

function atkAnimation2(){

    attackSprite = game.add.sprite(500, 430, 'attack');
    attackSprite.animations.add('attack');
    anim = attackSprite.animations.play('attack', 15, false);
    anim.onComplete.add(destroyAnim, this);
}

function defAnimation1(){

    defSprite = game.add.sprite(120, 80, 'block');
    defSprite.animations.add('block');
    anim = defSprite.animations.play('block', 15, false);
    anim.onComplete.add(destroyAnim2, this);
    
}

function defAnimation2(){

    defSprite = game.add.sprite(470, 400, 'block');
    defSprite.animations.add('block');
    anim = defSprite.animations.play('block', 15, false);
    anim.onComplete.add(destroyAnim2, this);
}

function destroyAnim(){

    attackSprite.kill();
}

function destroyAnim2(){

    defSprite.kill();
}



function update() {

    knockOut()
    combatLog()

}//END OF UPDATE