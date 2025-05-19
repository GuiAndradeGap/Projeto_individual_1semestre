var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarPartida(fkUsuario, fkPersonagem) {
    console.log("ACESSEI A PARTIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, fkPersonagem);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (fkUsuario, fkPersonagem) VALUES ('${fkUsuario}', '${fkPersonagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Buscando o Id da ultima partida
function buscarUltimaPartida(ID_USUARIO) {
  var instrucaoSql = `SELECT idPartida FROM partida WHERE fkUsuario = '${ID_USUARIO}' ORDER BY dtPartida DESC LIMIT 1`;

  return database.executar(instrucaoSql);
}

//Atualizando a partida
function atualizarPartida(id, tempo, colisao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ");
    var instrucaoSql = `
        UPDATE partida SET tempo = '${tempo}' AND colisao = '${colisao}' WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPartida,
    buscarUltimaPartida,
    atualizarPartida
};