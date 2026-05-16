const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json()) //middleware

//definir um endpoint de POST /eventos
app.post('/eventos', async function(req, res){
    //extrair o evento da requisição
    const evento = req.body
    //enviar o evento para ambos os mss de lembretes e observações
    //usando axios
    try{
        //enviando para lembretes
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch(e){}
    try{
        //enviando para observacoes
        await axios.post('http://localhost:5001/eventos', evento)
    }
    catch(e){}
    res.status(200).send( { msg: "ok" } )
    try{
        //enviando para consulta
        await axios.post('http://localhost:6000/eventos', evento)
    } catch(e) { }
    res.end()
})

//colocar o barramento de eventos em funcionamento na porta 10000
app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000')
})

