//Adicionando virada do carro

window.addEventListener('keydown', (evento) => {
    evento.preventDefault()
    console.log(evento.key)

    if(evento.key == 'ArrowRight'){
        xCarro += 20;
        carro.src = '../img/carros_f1/direita.png';
    } 
    else if (evento.key == 'ArrowLeft'){
        xCarro -= 20;
        carro.src = '../img/carros_f1/esquerda.png';
    }

    //Caso a tecla seja solta, volta o carro normal
    window.addEventListener('keyup', () => {
        carro.src = '../img/carros_f1/carro.png';
    })
})