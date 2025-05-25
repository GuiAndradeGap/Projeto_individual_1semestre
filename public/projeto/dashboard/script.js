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
                    tempoPartida.innerHTML = resposta04[0].tempo
                    colisoesPartida.innerHTML = resposta04[0].colisoes
                    console.log(resposta04[0].resultadoPartida)
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
            
        }
    }
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




const grafico3 = document.getElementById('myChart03');

new Chart(grafico3, {
    type: 'bar',
    data: {
        labels: ['Guilherme', 'Otávio', 'Gustavo', 'Paulo', 'Caio', 'Dias','Alex','Gabriel','Rodrigo','Rafael'],
        datasets: [
        {
            label: 'Quantidade de Vitórias',
            backgroundColor: '#155FDE',
            borderColor: ' #155FDE',
            borderRadius: 3,
            data: [46,45,40,35,32,30,28,26,24,22,20,18],
            borderWidth: 2,
            pointStyle: false
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 50,
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                  }
            },
            
        }
    }
});
