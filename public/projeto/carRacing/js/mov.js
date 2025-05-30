//Adicionando virada do carro

window.addEventListener('keydown', (evento) => {
    evento.preventDefault()

    if(evento.key == 'ArrowRight'){
        if(xCarro+wCarro/2 < 800){
            xCarro += 20;
        }
        carro.src = '../img/carros_f1/direita.png';
    } 
    else if (evento.key == 'ArrowLeft'){
        if(xCarro+wCarro/1.5 > 0){
            xCarro -= 20;
        }
        carro.src = '../img/carros_f1/esquerda.png';
    }
    else if (evento.key == 'ArrowUp'){
        jogadorZ += 20;
    }

    //Caso a tecla seja solta, volta o carro normal
    window.addEventListener('keyup', () => {
        carro.src = '../img/carros_f1/carro.png';
    })
})