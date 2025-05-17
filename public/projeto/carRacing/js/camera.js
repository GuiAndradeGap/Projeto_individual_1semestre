//Câmera - posição da câmera na projeção z (3d) e o campo de visão da câmera (:
let cameraZ = 0
let campoVisaoCamera = 200
//largura da estrada 
let widthEstrada = 1.8

function projecao(z){
    let escala = campoVisaoCamera / (z -cameraZ) // Se o objeto está longe = pequeno - Senão grande
    let telaY = (canvas.height/2) + escala * 150 //Determina a posição no eixo y com base na escala - Profundidade
    let width = escala * widthEstrada * canvas.width //Determina a largura da estrada com base na escala

    return {
        telaY,
        width
    }
}