const canvas = document.getElementById('canvas') 
const ctx = canvas.getContext("2d") 
const video = document.querySelector('video')
var JogoRodando = true
var loopDoJogo

//Posição do jogador
let jogadorZ = 0 

//Criando a imagem do carro (:
const carro = new Image()
carro.src = '../img/carros_f1/carro.png';
const paisagem = new Image()
paisagem.src = '../img/paisagem.jpg';

function cronometrar(){
tempoParida = setInterval(() =>{
    if(JogoRodando == false){
        clearInterval(tempoParida); // para o loop se o jogo parar
    }
    else{
        tempo++
        minuto = (tempo/60).toFixed()
        segundo = tempo%60

        if(tempo < 60){
            if(tempo < 10){
                cronometro.innerHTML = `00:0${tempo}`
            }
            else{
                cronometro.innerHTML = `00:${tempo}`
            }
        }
        else{
            if(segundo < 10){
                cronometro.innerHTML = `0${minuto}:0${segundo}`
            }
            else{
                cronometro.innerHTML = `0${minuto}:${segundo}`
            }
        }
    }
}, 1000)
}

cronometrar()

// Desenhando o carro
function desenharCarro(){
    ctx.drawImage(carro, xCarro, yCarro, wCarro, hCarro)
}

// Desenhando o carro
function desenharBackground(){
    ctx.drawImage(paisagem, -90, 0, canvas.width*1.3, canvas.height/1.95)
}

// Desenhando o 
function desenharGrama(){
    ctx.fillStyle = '#0E833F'
    ctx.fillRect(0, canvas.height/2 , canvas.width, canvas.height/2)
}

function velocidadeCarro(){
    jogadorZ += 25  
}

function jogo(){
loopDoJogo = setInterval(() =>{
    if(JogoRodando == false){
        clearInterval(loopDoJogo); // ← para o loop se o jogo parar
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    velocidadeCarro()
    desenharGrama()
    desenharEstrada()
    desenharCarro()
    desenharBackground()
}, 1000/60)
}

//Finalizando jogo
function finalizarJogo(){

JogoRodando = false

if(JogoRodando == false){
//obstáculo
for (let i = 0; i < obstaculos.length; i++) {
  totalColisao += colisao[i]
}
}
console.log(obstaculos)
}

jogo()





