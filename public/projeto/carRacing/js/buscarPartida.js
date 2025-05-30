 let id = sessionStorage.getItem('ID_USUARIO')
 var idPartida
 
 function buscarPartida() {
        fetch(`/partida/buscarUltimaPartida/${id}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    idPartida = resposta[0].idPartida
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
}

function atualizarPartida(idPartida, totalColisao, tempo, resultadoPartida) {
        fetch(`/partida/atualizarPartida/${idPartida}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idPartida: idPartida,
                colisao: totalColisao,
                tempo: tempo,
                resultadoPartida: resultadoPartida
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                window.alert("Partida atualizada com sucesso: " + idPartida + "!");
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

