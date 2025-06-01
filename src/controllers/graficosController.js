var graficosModel = require("../models/graficosModel");

//KPI
function buscarKPI(req, res) {
  var ID_USUARIO = req.params.ID_USUARIO;

  graficosModel.buscarKPI(ID_USUARIO).then((resultado) => {
    res.status(200).json(resultado);
  });
}

//Gráfico 01
function buscarPersonagem(req, res) {
  var ID_USUARIO = req.params.ID_USUARIO;

  graficosModel.buscarPersonagem(ID_USUARIO).then((resultado) => {
    res.status(200).json(resultado);
  });
}

//Gráfico 02
function BuscarVitoriasDerrotas(req, res) {
  var ID_USUARIO = req.params.ID_USUARIO;

  graficosModel.BuscarVitoriasDerrotas(ID_USUARIO).then((resultado) => {
    res.status(200).json(resultado);
  });
}

//Gráfico 03
function BuscarTempoUsuario(req, res) {
  var ID_USUARIO = req.params.ID_USUARIO;

  graficosModel.BuscarTempoUsuario(ID_USUARIO).then((resultado) => {
    res.status(200).json(resultado);
  });
}

//Ranking
function rankeandoTempo(req, res) {
  graficosModel.rankeandoTempo().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    buscarKPI,
    buscarPersonagem,
    BuscarVitoriasDerrotas,
    BuscarTempoUsuario,
    rankeandoTempo
}