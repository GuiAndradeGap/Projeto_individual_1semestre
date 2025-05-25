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
  graficosModel.buscarPersonagem().then((resultado) => {
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

module.exports = {
    buscarKPI,
    buscarPersonagem,
    BuscarVitoriasDerrotas
}