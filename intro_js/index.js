//Processamento síncrono e assíncrono
//Processamento bloqueante (síncrono)
// console.log('Eu primeiro...')
// console.log('Agora eu....')
// console.log('Sempre serei a última...')

// const a = 5 + 6
// const b = 9 + 4
// console.log(a + b) //linha 3 depende das linhas 1 e 2

// function demorada(tempo){
//     console.log('Comecei agora')
//     const dataAtualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= dataAtualMaisTempo);
//     const d = 8 + 2 * 6
//     console.log(`Demorada com tempo: ${tempo}`)
//     return d
// }

// setTimeout(() => {
//     demorada(2000)
// }, 500 /*tempo de demora pra entrar na fila*/)

// setTimeout(() => {
//     demorada(1000)
// },0) //Em geral as funções agendadas respeitam a ordem da fila de agendamento

//CPU Bound: predominantemente caracterizada por ciclos de CPU, ex: While
//IO Bound: predominantemente caracterizada por operações de Entrada e Saída, ex: Acesso a arquivos

// const fs = require('fs') //realiza leitura de arquivos no Node js
// const NomeArquivo = 'arquivo.txt'
// //função callback (aquela que você define mas nunca chama)
// const exibirConteudo = (erro, conteudo) => {
//     console.log("A")
//     if(erro){
//         console.log(`Erro ao tentar abrir o arquivo... ${erro}`)

//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         //mais uma função callback
//         const escrever = (erro) => {
//             console.log(erro ? "Deu erro" : "Ok, escreveu o dobro")
//             console.log('C')
//             const exibirDobro = (erro, conteudo) => {
//                 console.log('E')
//                 console.log(erro? "Deu erro lendo o dobro" : `Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt', exibirDobro)
//             console.log('F')
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), escrever)
//         console.log('D')
//     }
// }
// fs.readFile(NomeArquivo, exibirConteudo)
// console.log("B")

//promises
//1 + 2 + 3 + ... + n
//demorando...
const calculoDemorado = (n) => {
    let cont = 0
    for(let i = 1; i<=n; i++){
        cont += i 
    }
    return cont
}
const res = calculoDemorado(10000000000)
console.log(res)


// setTimeout(() => {
//     console.log('Agendada pela setTimeout')
// }, 0)
// const dataAtualMais10Segundos = new Date().getTime() + 10000
// while(new Date().getTime() <= dataAtualMais10Segundos);
// console.log("Terminando o script principal...") //a função agendada jamais que termina antes que o script principal terminar, por mais que demore

// const a = 2 + 3
// const b = 6 * 1

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500) //agenda a execução de outra função

// const e = a * b + 2
// console.log(e)

//Uma calculadora realiza as quatro operações fundamentais
//soma: representada por uma arrow function que faz return
//subtração: representada por uma arrow function sem return
//multiplicação: function regular
//divisão: você escolhe

// const calculadora = {
//     operacoes: {
//         soma:  (a, b) => {
//         return a + b
//     },
//         subtracao: (a, b) => a - b,

//         multiplicacao: function (a,b){
//         return a * b
//     },
//         divisao: (a, b) => {
//         return a/b
//     },
//     }
// }

// console.log(calculadora.operacoes.soma(2,3))
// console.log(calculadora.operacoes.subtracao(2,3))
// console.log(calculadora.operacoes.multiplicacao(2,3))
// console.log(calculadora.operacoes.divisao(2,3))

//Uma concessionária tem nome, CNPJ e endereco (logradouro, numero e bairro). Ela também tem seu estoque de veículos. A quantidade de veículos é arbitrária. A qualquer instante, ela pode ter 2 ou 5 ou 17 veículos. Cada veículo tem modelo, marca e placa.

// const concessionaria = {
//     nome: 'Bla',
//     CNPJ: 5266727,
//     endereco:{
//         logradouro: 'Rua C',
//         numero: 50,
//         bairro: {
//             nome: 'Jardim',
//         } 
//     },
//     estoque:[
//         {
//             modelo: 'Kicks',
//             marca: 'Nissan',
//             placa: 'ABC-1234',
//         },
//         {
//             modelo: 'Fit',
//             marca: 'Honda',
//             placa: 'CDE-5678',
//         }
//     ]
// }

// console.log(concessionaria.estoque[0].modelo)
// console.log(concessionaria['estoque'][1]['modelo'])

//JSON: JavaScript Object Notation
//Uma pessoa que se chama João e tem 17 anos
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
// {} objeto js
// let pessoa = {
//     nome: 'João',
//     idade: 17,
// }
// console.log("Me chamo " + pessoa.nome);
// console.log("Tenho " + pessoa["idade"] + " anos")

// const pessoa2 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 50,
//     },
// }
// console.log(pessoa2.endereco.logradouro)
// console.log(pessoa2['endereco']['numero'])
// console.log(pessoa2.endereco['logradouro'])
// console.log(pessoa2['endereco'].numero)
// console.log(pessoa2)
// console.log(pessoa2.endereco)

// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2() //Closure é montado apenas no final, ou seja, as funções f1 e f2 são montadas com cont = 3.




// function f(idade){
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
//     }
//     return g
// }
// const res = f(17)
// res() //Closure nesse caso é a variação nome e idade em conjunto com uma função interna g()

// function f (funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => 'A'
//     }
//     return outraFuncao()
// }
// const res = g()
// f(res)
// console.log(res())

// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
//     return () => 'oi'
// } //categoriza uma função como cidadãs de primeira classe (pelo fato de ter sido armazenada em uma variável)
// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao)

//Listas/vetores/arrays/arranjos
// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v)
// console.log(res)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']
// const iniciais = nomes.map(nome => nome.charAt(0))
// const res = nomes.every(n => n.startsWith('A'))
// console.log(iniciais)
// console.log(res)
// console.log(nomes.some(n => n.startsWith('A')))

// const apenasComA = nomes.filter((nome) => nome.startsWith('A')) //nome => {return nome.startsWith('A')}
// console.log(apenasComA)
// const f1 = () => {}
// const f2 = function(){}
// v1 = []
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)
// for(let i=0; i < v1.length; i++){
//     console.log(v1[i])
// }
//funções
//function e arrow function
// function hello(){
//     console.log(`Oi`)
// }
// hello()
// //sobrecarga
// //lembrando em Java
// // class Calculadora{
// //     int somar(int a, int b)
// //         return a + b

// //     int somar(String a, String b)
// //         return Integer.parseInt(a) + Integer.parseInt(b)
// // }
// function hello(nome){
//     console.log(`Oi ${nome}`)
// }
// hello('Maria')
// //não há sobrecarga em js, apenas redefinição de funções, há comportamentos diferentes por conta da dupla passagem do js

//function soma(a, b){
//  return a + b}
// const res = soma(2, 1)
// console.log(res)

// const dobro = function(n){
//     return 2 * n
// }
// console.log(dobro(6))

// const triplo = function(n = 5){ //nesse caso estamos definindo um valor padrão para parâmetro, caso não seja passado nada, n = 5 
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

//arrow function
// const falarOi = () => {console.log('oi')} //precisa apenas de parâmetros seta e bloco, guardamos essa arrow func em falarOi nesse caso
// falarOi()
// const falarOi = (nome) => {console.log(`Oi, ${nome}`)}
// falarOi('Maria')
//ou
// const falarOi2 = nome => {console.log(`Oi, ${nome}`)}
// falarOi2('João')
// falarOi3 = nome => console.log(`Oi, ${nome}`)
// falaOi3('Johnny')

// const somar = (a, b) => {return a + b}
// console.log(somar(1, 2))
//ou
// const somar2 = (a, b) => a + b
// console.log(somar(1, 2))


//coleções
// v1 = [] //List <Object> v1 = new ArrayList <>(); não há declaração de tamanho, sempre cresce e diminui dinamicamente
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = 'abc'
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }


//coerção implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2 //aqui há uma coerção implícita
// console.log(n3)
// const n4 = n1 + Number(n2) //Classe empacotadora de number, aqui há uma coerção explícita
// console.log(n4)

//operadores de comparação por igualdade: == e ===
//==
// console.log(1 == 1)
// console.log(1 == "1") //aqui ele está fazendo uma coerção implícita, convertendo os dois para number, e depois comparando
// console.log(true == 1)
// console.log(1 == [1]) //[1] representa um array que na primeira posição há o número 1
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// //===
// console.log(1 === "1") //aqui, o problema do == já não ocorre, ele não faz a coerção implícita


//parece que os tipos de variáveis mudam
// let a = 2
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))


//e o var?
//içamento (hoisting) a declaração é içada para fora do if
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >=18)
//     {
//         var nome = 'João'
//         console.log("Parabéns, " + nome + ". Você pode dirigir")
//     }
// console.log('Até, ' + nome)
// var linguagem = 'Javascript'
// console.log('Aprendendo ' + linguagem)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`) //operador de interpolação (semelhante ao print(f) do python)
// //var admite redefinição de variáveis (muito estranho - jamais use)
// // var c = 2
// // var c = 3
// // console.log(c) 


// //declarando variáveis
// let a = 2 //variáveis também funcionam como ponteiros (não trocam de tipos)
// console.log(a)
// let passou = true
// console.log(passou)
// console.log(typeof(passou))   


//declarando constantes
//se fosse Java...
// String nome = "josé";
// const nome = "José" //constantes são imutáveis (semelhante a um ponteiro)
// console.log(nome)
// const idade = 17 //constantes não tem tipos, são como ponteiros que apontam para uma criatura de um tipo
// console.log(typeof(idade))

// console.log('Hello World')