const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const pokemon2 = {...pokemon1,
nome: "Squirtle",
tipo: "Água",
}
//No objeto original, adicione mais uma propriedade, chamada `ataques`.
pokemon1.ataques = []

//nome: Investida;
//dano: 40;
//tipo: Normal;
//precisao: 100;
pokemon1.ataques.push({nome: "Investida", dano: 40, tipo: "Normal", precisao: 100})

//Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemon2.ataques=[...pokemon1.ataques]

//para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push({nome: "Folha Lavalha", dano: 45, tipo: "Grama", precisao: 100})

//para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**
pokemon2.ataques.push({nome: "Jato Água", dano: 40, tipo: "Água", precisao: 100})

//Imprima os dois objetos no console
console.log(pokemon1)
console.log(pokemon2)
