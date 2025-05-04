class Configuracoes
{
    constructor(scene){
        //Referencia a cena do jogo
        this.scene = scene;

        var font = {font: '32px Arial', fill: '#fff'};
        this.txtPause = scene.add.text(1720, 5, '', font);

        this.show();
    }

    show(){
        this.txtPause.text = "[P] Pausar"
    }
}