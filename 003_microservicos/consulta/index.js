const express = require("express");
const app = express();
app.use(express.json());

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes =
        baseConsulta[observacao.lembreteId]["observacoes"] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes
    }
}

app.get("/lembretes", (req, res) => {
    res.status(200).send(baseConsulta)
})

app.post("/eventos", (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    }catch(e){}
    res.end()
})

const port = 6000
app.listen(port, () => {
	console.log(`Consulta. Porta ${port}.`)
})