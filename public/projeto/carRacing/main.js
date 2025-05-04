//Constantes globais para tamanho da tela
const TELA_W = 1920;
const TELA_H = 1080;

//Definindo as coordenadas do jogo
const TELA_CX = TELA_W/2;
const TELA_CY = TELA_H/2;

//Definindo os estadps do jogo
const STATE_INIT = 1;
const STATE_RESTART = 2;
const STATE_PLAY = 3;
const STATE_GAMEOVER = 4;

//Estado atual
var state = STATE_INIT;

//Criando uma classe de cena principal
class CenaPrincipal extends Phaser.Scene {
    constructor() {
        super({ key: 'PrincipalCena' });
    }

    //Carregar todos os assets
    preload(){
        this.load.image('imgFundo', '../img/background.jpg')
    }

    //Criar todos os objetos
    create(){
        this.sprBack = this.add.image(TELA_CX, TELA_CY, 'imgFundo');

        this.circuit = new Estrada(this);
        this.settings = new Configuracoes(this);

        //Aperte P, pausa o jogo
        this.input.keyboard.on('keydown-P', function(){
            this.settings.txtPause.text = "[P] Retomar";
            this.scene.pause();
            this.scene.launch('PausaCena');
        }, this);

        //Aperte P, despausa o jogo
        this.events.on('resume', function(){
            this.settings.show();
        }, this);
    }

    //Loop do jogo principal/ Atualizar a cena
    update(time, delta){
        switch(state){
            case STATE_INIT: 
                console.log("Preparando o jogo");
                state = STATE_RESTART;
                break;

            case STATE_RESTART: 
                console.log("Restartando o jogo");

                this.circuit.create();

                state = STATE_PLAY;
                break;
        
            case STATE_PLAY: 
                console.log("Jogo iniciado");

                this.circuit.render2D();

                state = STATE_GAMEOVER;
                break;
       
            case STATE_GAMEOVER: 
                console.log("Jogo finalizado");
                break;
           
        }
    }
}

//Criando uma classe de cena de pausa
class CenaPausa extends Phaser.Scene {
    constructor() {
        super({ key: 'PausaCena' });
    }

    create(){
          //Aperte P, pausa o jogo
          this.input.keyboard.on('keydown-P', function(){
            this.scene.resume('PrincipalCena');
            this.scene.stop();
        }, this);
    }
}

//Criando as configurações do jogo
var config = {
    type: Phaser.AUTO,
    width: TELA_W,
    height: TELA_H,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [CenaPrincipal, CenaPausa]
};

//Iniciando um novo jogo
var game = new Phaser.Game(config);
