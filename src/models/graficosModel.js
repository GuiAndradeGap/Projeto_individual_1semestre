var database = require("../database/config")

//KPIs
function buscarKPI(ID_USUARIO) {
  var instrucaoSql = `SELECT resultadoPartida, colisoes, TIME_FORMAT(SEC_TO_TIME(tempo), '%i:%s') AS tempo 
                        FROM partida WHERE fkUsuario = ${ID_USUARIO} ORDER BY dtPartida DESC LIMIT 1`;

  return database.executar(instrucaoSql);
}

//Gráfico 01
function buscarPersonagem() {
  var instrucaoSql = `SELECT p.nome AS nomePersonagem, COUNT(pa.idPartida) AS 'qtdPersonagem'
                        FROM partida AS pa
	                        JOIN personagens AS p
		                        ON pa.fkPersonagem = p.id
	                    GROUP BY pa.fkPersonagem
                        ORDER BY COUNT(pa.idPartida) DESC
                        LIMIT 5;`;

  return database.executar(instrucaoSql);
}

//Gráfico 02
function BuscarVitoriasDerrotas(ID_USUARIO) {
  var instrucaoSql = `SELECT COUNT(resultadoPartida) AS QuantidadeDePartidas, SUM(resultadoPartida) AS vitoria, (COUNT(resultadoPartida) -  SUM(resultadoPartida)) AS Derrota
                      FROM partida
	                  WHERE fkUsuario = ${ID_USUARIO};`;

  return database.executar(instrucaoSql);
}

//Gráfico 03
function rankeandoTempo() {
  var instrucaoSql = `SELECT u.nome AS nomeUsuario, MIN(p.tempo) AS tempoPartida FROM partida AS p
	                    JOIN usuarios AS u
		                    ON p.fkUsuario = u.id
                        GROUP BY u.id
	                    ORDER BY MIN(p.tempo);`;
  return database.executar(instrucaoSql);
}

module.exports = {
    buscarKPI,
    buscarPersonagem,
    BuscarVitoriasDerrotas,
    rankeandoTempo
};