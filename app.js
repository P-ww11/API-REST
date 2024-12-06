//importando
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import homeRoutes from "./src/routes/homeRoutes.js"


//criamos uma classe com o construtor que o atributo da classe vai ser o app com valor do express no this
//sempre que instanciar a classe o construtor vai ser executado por isso o this
class App {
    constructor(){
      this.app = express()
      this.middlewares()
      this.rotas()
    }

    //metodo dentro da class
    middlewares(){
      //express.urlencoded é usado para analisar dados codificados em URL (geralmente em formulários HTML
      this.app.use(express.urlencoded({extended: true}))
      //utilizado para facilitar o processamento das informações contidas em requisições JSON no servidor.
      //express.json é usado para analisar dados no formato JSON. Ambos são usados para interpretar os corpos das requisições
      this.app.use(express.json())
    }
    rotas(){
      //fazendo o express usar a rota "de casa" por isso importamos aquele valor de homeRoutes
      this.app.use("/", homeRoutes)
    }
}
//vamos exporta ela (export default e para exporta um unico valor como padrão) ja instanciada e nois vamos exporta o app apenas que no caso e o express
export default App
