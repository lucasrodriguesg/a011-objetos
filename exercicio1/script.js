//Crie um array vazio chamado `sacolao`
var sacolao = []

//Crie três objetos que vão representar frutas do sacolão.
//nome: string;
//preco: number;
//disponibilidade: boolean
const fruta1= {
    nome: "Manga", 
    preco: 4.99,
    disponivel: true,
}
const fruta2= { 
    nome: "Morango",
    preco: 5.99,
    disponivel: true,
}
const fruta3= {
    nome: "Goiaba",
    preco: 3.99,
    disponivel: true
}
//Adicione os objetos ao array `sacolao` utilizando o método **`push()
sacolao.push(fruta1, fruta2, fruta3)

//Imprima a o array `sacolao`
console.log(sacolao)