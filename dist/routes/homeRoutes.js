"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _homecontrollerjs = require('../controllers/homecontroller.js'); var _homecontrollerjs2 = _interopRequireDefault(_homecontrollerjs);





//instanciamos a router do express para a variavel rotas
const rotas = new (0, _express.Router)()

rotas.get(`/`, _homecontrollerjs2.default.index)

//exportando a variavel rotas
exports. default = rotas
