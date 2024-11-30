//importando aquele valor app que tem o express para escutar no servidor
import App from "./app.js"
const app = new App().app



const porta = 3000
app.listen(porta,()=>{
  console.log(`escutando na porta ${porta}`)
})
