//Segmentos
tamanhoSegmento = 100
segmentos = []

//Desenhando a pista
for(i = 1;i <= 800;i++){
    segmentos.push({
        z: i * tamanhoSegmento,
        color:  '#666',
        colorZebra: i % 2 === 0 ? '#C30D0F' : '#FEF8C6'
    })
}

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
    ctx.fillStyle = segmentos[i].color
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


    if(z1 < 0){
        segmentos.shift()
    }
}
}


