var partidaModel = require("../models/partidaModel");

function cadastrarPartida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPersonagem = req.body.fkPersonagemServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Usuário está undefined!");
    }
    else if (fkPersonagem == undefined) {
        res.status(400).send("Personagem está undefined!");
    } 
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        partidaModel.cadastrarPartida(fkUsuario, fkPersonagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimaPartida(req, res) {
  var ID_USUARIO = req.params.ID_USUARIO;

  partidaModel.buscarUltimaPartida(ID_USUARIO).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function atualizarPartida(req, res) {
    var idPartida = req.body.idPartida;
    var tempo = req.body.tempo;
    var colisao = req.body.colisao;
    var resultadoPartida  = req.body.resultadoPartida

    partidaModel.atualizarPartida(idPartida, tempo, colisao, resultadoPartida)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    cadastrarPartida,
    buscarUltimaPartida,
    atualizarPartida
}