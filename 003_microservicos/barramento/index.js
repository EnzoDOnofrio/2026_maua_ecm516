const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

// definir um endpoint POST /eventos
// extrair o evento da requisição
// enviar o evento para ambos os mss de lembretes e Observações
//Usando o axios

// colocar o barramento de eventos em funcionamento na porta 10.000

const eventos = {}
let id = 0

app.post('/eventos', async (req, res) => {
    const evento = req.body
    console.log(evento)

    try {
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch (e){}

    try {        
       await axios.post('http://localhost:5000/eventos', evento)
    }
    catch(e){}

    try{
        await axios.post('http://localhost:6000/eventos', evento)
    }catch(e){}

    res.end()
})

const port = 10000
app.listen(port, () => {
	console.log(`Barramento. Porta ${port}.`)
})