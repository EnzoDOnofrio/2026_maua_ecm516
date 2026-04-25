const express = require('express')
const {v4: uuidv4} = require('uuid') 
const app = express()
app.use(express.json()) //middleWare

const observacoePorLembreteId = {}
// :id é um placeholder
// exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    const { id } = req.params
    res.send(observacoePorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const { id } = req.params

    // Tenta buscar uma observacao já existente, se não, cria um JSON Array vazio
    const observacoeDoLembrete = observacoePorLembreteId[id] || []
    // Adicionando no JSON array o texto que vem na observacao
    observacoeDoLembrete.push({id: idObs, texto})
    // Resgata a observacao do ID requerido
    observacoePorLembreteId[id] = observacoeDoLembrete
    res.status(201).send(observacoeDoLembrete) 
})

const port = 5001
app.listen(port, () => {
    console.log('Observacoes. Executando na Porta 5001')
})

