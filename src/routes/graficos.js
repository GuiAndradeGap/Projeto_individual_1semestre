var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

//KPI
router.get("/buscarKPI/:ID_USUARIO", function (req, res) {
  graficosController.buscarKPI(req, res);
});

//Gráfico 1
router.get("/buscarPersonagem", function (req, res) {
  graficosController.buscarPersonagem(req, res);
});

//Gráfico 2
router.get("/BuscarVitoriasDerrotas/:ID_USUARIO", function (req, res) {
  graficosController.BuscarVitoriasDerrotas(req, res);
});

//Gráfico 3
router.get("/rankeandoTempo", function (req, res) {
  graficosController.rankeandoTempo(req, res);
});


module.exports = router;