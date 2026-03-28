const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
//const cnt = 1
const units = 'metric'
const lang = 'pt_br'
const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}`

const getClimateAsyncAwait = async () => {
    try{
        const res = await axios.get(url)
        console.log(res.data)
        return res.data
    }
    catch (erro) {
        console.log(`Erro: ${erro}`)
    }
    try{
        const res = await axios.get(url)
        console.log(res.list)
        return res.list
    }
    catch (erro){
        console.log(`Erro: ${erro}`)
    }
    try{
        const res = await axios.get(url)
        console.log(res.list[0].main.temp_max)
        return res.list
    }
    catch (erro){
        console.log(`Erro: ${erro}`)
    }
    try{
        const previsoes = await axios.get(url)
        for(let previsao of previsoes){
         //quero exibir a descricao de cada uma
         console.log(previsao.weather[0].description)
    }
    }
    catch (erro){
        console.log(`Erro: ${erro}`)
    }
}

getClimateAsyncAwait()
// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     return res.data})
// .then(res => {
//     console.log(res.list)
//     return res.list
// })
// .then(res => {
//     //mostrar temperatura máxima da primeira previsão do tempo
//     console.log(res[0].main.temp_max)
//     return res
// })
// .then(previsoes => {
//     //iterar sobre a lista aqui
//     for(let previsao of previsoes){
//         //quero exibir a descricao de cada uma
//         console.log(previsao.weather[0].description)
//     }
// })
// console.log('A')

// const fatorial = (n) => {
//     if (n < 0) return Promise.reject("Valor não pode ser negativo.")

//     let res = 1
//     for (let i = 2; i <= n; i++) {
//         res *= i
//     }
//     return Promise.resolve(res)
// }

// const chamadaComThenCatch = () => {
//     fatorial(170)
//         .then(res => console.log(`Resultado: ${res}`))
//         .catch(function (erro) { console.log(`Erro: ${erro}`) })

//     fatorial(-5)
//         .then(res => console.log(`Resultado: ${res}`))
//         .catch(function (erro) { console.log(`Erro: ${erro}`) })
// }

// chamadaComThenCatch()

// const chamadaComAsyncAwait = async () => {
//     try{
//         const f1 = await fatorial(5)
//         console.log(`F1: ${f1}`)
//         console.log('A')
        
//     }
//     catch (erro) {
//         console.log(`Erro ${erro}`)
//     }
//     try{
//         const f2 = await fatorial(2)
//         console.log(f2)
//     }
//     catch (erro) {
//         console.log(`Erro ${erro}`)
//     }
//     try{
//         const f2 = await fatorial(-1)
//         console.log(f2)
//     }
//     catch (erro) {
//         console.log(`Erro ${erro}`)
//     }
// }

// chamadaComAsyncAwait()

// async function hello(nome){
//     return `Olá, ${nome}`
// } //async devolve uma promise, que te permite retornar `Olá ${nome}`

// const res = hello('Ana')
// res.then((texto) => {console.log(texto)})
// console.log('A')

// const axios = require('axios')
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
// const q = 'Itu'
// //const cnt = 1
// const units = 'metric'
// const lang = 'pt_br'
// const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}`
// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     return res.data})
// .then(res => {
//     console.log(res.list)
//     return res.list
// })
// .then(res => {
//     //mostrar temperatura máxima da primeira previsão do tempo
//     console.log(res[0].main.temp_max)
//     return res
// })
// .then(previsoes => {
//     //iterar sobre a lista aqui
//     for(let previsao of previsoes){
//         //quero exibir a descricao de cada uma
//         console.log(previsao.weather[0].description)
//     }
// })
// console.log('A')