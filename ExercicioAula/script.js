const compras = {
    nomeProduto: "Brownie Tradiciona" , 
    precoProduto: 6 ,
    quantidade: 5,
}

const carrinhoPresente = {...compras,
cliente: "Renata",
pagamento: "Cartão presente"
}

console.log(compras, carrinhoPresente)