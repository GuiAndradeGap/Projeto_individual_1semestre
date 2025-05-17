//Segmentos
tamanhoSegmento = 100
segmentos = []
obstaculos = []
var colisao = 0

//Obstáculo
const obstaculoImg = new Image()
obstaculoImg.src = '../img/cone.png'

//Desenhando a pista
for(i = 1;i <= 1000;i++){
    segmentos.push({
        z: i * tamanhoSegmento,
        color:  '#666',
        colorZebra: i % 2 === 0 ? '#C30D0F' : '#FEF8C6'
    })
}

for (i = 0; i < 100; i++) {
  let o = Math.random()
  let z = Math.random() * (1000 * (tamanhoSegmento+100)) + 5000
  obstaculos.push({ z, o })
}

console.log(obstaculos)

function desenharEstrada(){
for(i = 0; i < segmentos.length; i++){
    z1 = segmentos[i].z - jogadorZ
    z2 = z1 + tamanhoSegmento

    p1 = projecao(z1);
    p2 = projecao(z2);

    ctx.beginPath()
    ctx.moveTo((canvas.width/2) - (p2.width/2), p2.telaY)
    ctx.lineTo((canvas.width/2) + (p2.width/2), p2.telaY)
    ctx.lineTo((canvas.width/2) + (p1.width/2), p1.telaY)
    ctx.lineTo((canvas.width/2) - (p1.width/2), p1.telaY)
    ctx.closePath()
     if(i == 950){
    ctx.fillStyle = '#fff'
    } else{
    ctx.fillStyle = segmentos[i].color
    }
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo((canvas.width/2) - (p2.width/2), p2.telaY)
    ctx.lineTo((canvas.width/2) - (p2.width/2) + (p2.width/8), p2.telaY)
    ctx.lineTo((canvas.width/2) - (p1.width/2) + (p1.width/8), p1.telaY)
    ctx.lineTo((canvas.width/2) - (p1.width/2), p1.telaY)
    ctx.closePath()
    ctx.fillStyle = segmentos[i].colorZebra
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo((canvas.width/2) + (p2.width/2), p2.telaY)
    ctx.lineTo((canvas.width/2) + (p2.width/2) - (p2.width/8), p2.telaY)
    ctx.lineTo((canvas.width/2) + (p1.width/2) - (p1.width/8), p1.telaY)
    ctx.lineTo((canvas.width/2) + (p1.width/2), p1.telaY)
    ctx.closePath()
    ctx.fillStyle = segmentos[i].colorZebra
    ctx.fill()
    
}

//obstáculo
for (let i = 0; i < obstaculos.length; i++) {
  let zRelativo = obstaculos[i].z - jogadorZ;

  let ob = projecao(zRelativo);
  let screenX = (canvas.width / 2) - (ob.width / 2) + ob.width * obstaculos[i].o;

  ctx.drawImage(obstaculoImg, screenX, ob.telaY, ob.width / 6, ob.width / 6)

  if((((xCarro+ wCarro/2) >= screenX && xCarro <= screenX + 3) || ((xCarro+ wCarro/2) <= screenX && xCarro >= screenX - 3))  && ((yCarro+hCarro) >= ob.telaY && yCarro <= ob.telaY)){
     jogadorZ -= 50
    colisao++
  }

  console.log(colisao)

}

}


