import {Router} from "express"

import homecontroller from "../controllers/homecontroller.js"





//instanciamos a router do express para a variavel rotas
const rotas = new Router()

rotas.get(`/`, homecontroller.index)

//exportando a variavel rotas
export default rotas
