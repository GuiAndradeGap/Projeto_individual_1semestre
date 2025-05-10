const canvas = document.getElementById('canvas') 
const ctx = canvas.getContext("2d") 


//Criando a imagem do carro (:
const carro = new Image()
carro.src = '../img/carros_f1/carro.png';

//Adicionando virada do carro
window.addEventListener('keydown', (evento) => {
    console.log(evento.key)
    if(evento.key == 'ArrowRight'){
        xCarro += 10;
        carro.src = '../img/carros_f1/direita.png';
    } 
    else if (evento.key == 'ArrowLeft'){
        xCarro -= 10;
        carro.src = '../img/carros_f1/esquerda.png';
    }

    //Caso a tecla seja solta, volta o carro normal
    window.addEventListener('keyup', () => {
        carro.src = '../img/carros_f1/carro.png';
    })
})


// Desenhando o carro
function desenharCarro(){
    ctx.drawImage(carro, xCarro, yCarro, wCarro, hCarro)
}

//Desenhando a pista
function desenharPista(){
    ctx.fillStyle = '#3C3C3C'
    ctx.beginPath();
    ctx.moveTo(xTopo, yTopo);
    ctx.lineTo(xTopo + larguraTopo, yTopo)
    ctx.lineTo(xBase + larguraBase, yBase)
    ctx.lineTo(xBase, yBase)
    ctx.closePath();
    ctx.fill()
}


//Função principal do jogo
function jogo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    desenharPista()
    desenharCarro()
    requestAnimationFrame(jogo);
}

carro.onload = () => {
    jogo()
}


