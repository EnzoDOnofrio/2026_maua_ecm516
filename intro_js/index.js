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