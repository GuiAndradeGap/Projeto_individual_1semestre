let nome = sessionStorage.getItem('NOME_USUARIO');
let ID_USUARIO = sessionStorage.getItem('ID_USUARIO');
var h1 = document.getElementById('nome_usuario')
h1.innerHTML = nome

//KPIs
function buscarKPI(ID_USUARIO) {
        fetch(`/graficos/buscarKPI/${ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta04) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta04)}`);
                    //Plotando os dados
                    if(resposta04[0].tempo != null){
                        tempoPartida.innerHTML = resposta04[0].tempo
                    }
                    if(resposta04[0].colisoes != null){
                        colisoesPartida.innerHTML = resposta04[0].colisoes
                    }
                    
                    if(resposta04[0].resultadoPartida == 1){
                        situacaoPartida.innerHTML = '<p style="color: #155FDE">Vitória</p>'
                    } else if(resposta04[0].resultadoPartida == 0){
                        situacaoPartida.innerHTML = '<p style="color: #FF0000">Derrota</p>'
                    }
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

buscarKPI(ID_USUARIO)

//Gráfico 01
//Buscando informações
function buscarPersonagem(ID_USUARIO) {
        fetch(`/graficos/buscarPersonagem/${ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    plotarGrafico01(resposta)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Gráfico
function plotarGrafico01(resposta){
const grafico1 = document.getElementById('myChart01');

//Declarando as variáveis de labels e data
labelsLista = []
dataLista = []
for(i = 0; i < 5; i++){
    if(resposta[i] != null){
        labelsLista.push(resposta[i].nomePersonagem) 
        dataLista.push(resposta[i].qtdPersonagem)
    }
    else{
        labelsLista.push('Não escolhido') 
        dataLista.push(0)
    }
}

new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: labelsLista,
        datasets: [{
            label: 'Quantidade de Escolhas',
            backgroundColor: '#FFCE1E',
            borderColor: '#FFCE1E',
            borderRadius: 3,
            data: dataLista,
            borderWidth: 1,
            pointStyle: false
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 10,
                beginAtZero: true,
                ticks: {
                    stepSize: 2
                  }
            }, 
        },
        plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#000'
        }
      }
    },
    plugins: [ChartDataLabels] 
});
}

buscarPersonagem(ID_USUARIO);

//Gráfico 02
//Buscando informações
function BuscarVitoriasDerrotas(ID_USUARIO) {
        fetch(`/graficos/BuscarVitoriasDerrotas/${ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta02) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta02)}`);
                    plotarGrafico02(resposta02)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGrafico02(resposta02) {
  const grafico2 = document.getElementById('myChart02');

  new Chart(grafico2, {
    type: 'doughnut',
    data: {
      labels: ['Vitórias', 'Derrotas'], 
      datasets: [{
        label: 'Resultados', 
        backgroundColor: ['#155FDE', '#FF0000'],
        data: [resposta02[0].vitoria, resposta02[0].Derrota],
        borderWidth: 1,
      }]
    },
    options: {
      plugins: {
        datalabels: {
          color: '#fff'
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}
BuscarVitoriasDerrotas(ID_USUARIO);



//Ranking
//Buscando informações
function rankeandoTempo(){
        fetch(`/graficos/rankeandoTempo`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta03) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta03)}`);
                    criarCampoRanking(resposta03)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

rankeandoTempo()

//Ranking  
function criarCampoRanking(resposta03){
    var medalhaNome = ``
    
    for(i = 0; i < resposta03.length; i++){
        medalhaNome = `<div class="nome_posicao"><div class="posicao" style="background-color: #FF0000">${i + 1}</div><p>${resposta03[i].nomeUsuario}</p></div>`

        tabela_ranking.innerHTML += `
        <div class="campo_ranking">
            ${medalhaNome}
            <p>${resposta03[i].tempoPartida}s</p>
        </div>`
    }
}


//Gráfico 03
function BuscarTempoUsuario(ID_USUARIO){
        fetch(`/graficos/BuscarTempoUsuario/${ID_USUARIO}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta05) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta05)}`);
                    plotarGrafico03(resposta05)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

BuscarTempoUsuario(ID_USUARIO)

function plotarGrafico03(resposta05) {
const grafico3 = document.getElementById('myChart03');

//Declarando as variáveis de labels e data
labelsLista = []
dataLista = []
for(i = 0; i < 10; i++){
    if(resposta05[i] != null){
        labelsLista.push(resposta05[i].data) 
        dataLista.push(resposta05[i].tempo)
    }
    else{
        labelsLista.push('Não realizada') 
        dataLista.push(0)
    }
}

new Chart(grafico3, {
    type: 'line',
    data: {
        labels: labelsLista,
        datasets: [
        {
            label: 'Tempo em segundos',
            backgroundColor: 'rgb(255, 115, 0)',
            data: dataLista,
            pointStyle: true
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 100,
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                  }
            },
            
        },
        plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#000'
        }
      }
    },
    plugins: [ChartDataLabels] 
});
}

