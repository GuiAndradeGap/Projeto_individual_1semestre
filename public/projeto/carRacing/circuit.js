class Estrada
{
    constructor(scene){
        //referencia a cena do jogo
        this.scene = scene;


        //Gráfico para desenhar os poligonos da estrada
        this.graphics = scene.add.graphics(0,0);

        //Array para a estrada
        this.segments = [];

        //Tamanho do segmento
        this.segmentLength = 100;

        //Largura da estrada (Atualmente metade da estrada)
        this.roadWidth = 1000;
    }

    create(){
        //Limpar o array
        this.segments = [];

        //Criando a estrada
        this.createRoad();
    }

    createRoad(){
        this.createSection(10);
    }

    createSection(nSegments){
        for (var i=0; i<nSegments; i++){
            this.createSegment();
            console.log("Segmento criado:", this.segments[i]);
        }
    }

    //Adicionando um novo segmento  
    createSegment(){

        var n = this.segments.length;       

        this.segments.push({
            index: n,
            point: {
                world: {x: 0, y:0, z: n*this.segmentLength},
                screen: {x: 0, y:0, w:0},
                scale: -1
            },
            color: {road: '0x888888'}
        });
    }

    //Projetando um ponto das coordenadas do mundo para as coordenadas da tela
    project2D(point){
        point.screen.x = TELA_CX;
        point.screen.y = TELA_H - point.world.z;
        point.screen.w = this.roadWidth;
    };

    //Renderizando a estrade 2d
    render2D(){
        this.graphics.clear();
        //Pega o atual e anterior segmento
        var currSegment = this.segments[1];
        var prevSegment = this.segments[0];

        this.project2D(currSegment.point);
        this.project2D(prevSegment.point);

        var p1 = prevSegment.point.screen;
        var p2 = currSegment.point.screen;

        this.drawSegment(
            p1.x, p1.y, p1.w,
            p2.x, p2.y, p2.w,
            currSegment.color
        );
        //console.log("segmento anterior do ponto da tela", p1);
        //console.log("segmento atual do ponto da tela", p2);
    };

    //Desenhando o segmento
    drawSegment(x1, y1, w1, x2, y2, w2, color){
        this.drawPolygon(x1-w1, y1, x1+w1, y1, x2+w2, y2, x2-w2, y2, color.road);
    }

    drawPolygon(x1, y1, x2, y2, x3, y3, x4, y4, color){
        this.graphics.fillStyle(color, 1);
        this.graphics.beginPath();

        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.lineTo(x3, y3);
        this.graphics.lineTo(x4, y4);

        this.graphics.closePath();
        this.graphics.fill();
    }
}