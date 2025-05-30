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
function buscarPersonagem() {
        fetch(`/graficos/buscarPersonagem`, { cache: 'no-store' }).then(function (response) {
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
new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: [resposta[0].nomePersonagem, resposta[1].nomePersonagem, resposta[2].nomePersonagem, resposta[3].nomePersonagem, resposta[4].nomePersonagem],
        datasets: [{
            label: 'Quantidade de Escolhas',
            backgroundColor: '#FFCE1E',
            borderColor: '#FFCE1E',
            borderRadius: 3,
            data: [resposta[0].qtdPersonagem, resposta[1].qtdPersonagem, resposta[2].qtdPersonagem, resposta[3].qtdPersonagem, resposta[4].qtdPersonagem],
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

buscarPersonagem();

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
          anchor: 'end',
          align: 'end',
          color: '#000'
        }
      }
    },
    plugins: [ChartDataLabels]
  });
}
BuscarVitoriasDerrotas(ID_USUARIO);



//Gráfico 03
//Buscando informações
function rankeandoTempo(){
        fetch(`/graficos/rankeandoTempo`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta03) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta03)}`);
                    plotarGrafico03(resposta03)
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

function plotarGrafico03(resposta03) {
const grafico3 = document.getElementById('myChart03');

new Chart(grafico3, {
    type: 'bar',
    data: {
        labels: [`1º - ${resposta03[0].nomeUsuario}`, `2º - ${resposta03[1].nomeUsuario}`, `3º - ${resposta03[2].nomeUsuario}`, resposta03[3].nomeUsuario, 
        resposta03[4].nomeUsuario, resposta03[5].nomeUsuario,resposta03[6].nomeUsuario,resposta03[7].nomeUsuario, resposta03[8].nomeUsuario,resposta03[9].nomeUsuario],
        datasets: [
        {
            label: 'Tempo em segundos',
            backgroundColor: ' #002F49',
            borderRadius: 3,
            data: [resposta03[0].tempoPartida, resposta03[1].tempoPartida, resposta03[2].tempoPartida, resposta03[3].tempoPartida, 
            resposta03[4].tempoPartida, resposta03[5].tempoPartida,resposta03[6].tempoPartida,resposta03[7].tempoPartida, resposta03[8].tempoPartida,resposta03[9].tempoPartida],
            pointStyle: false
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
