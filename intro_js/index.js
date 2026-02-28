


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