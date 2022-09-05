const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// Resposta A: Qual o código para imprimir o nome do **primeiro** ator/atriz?
console.log("Nome do primeiro ator/atriz é: ", filme.elenco[0])
// Resposta B: Qual o código para imprimir o nome do **último** ator/atriz?
console.log("Nome do último ator/atriz é: ", filme.elenco[(filme.elenco.length-1)])
//Resposta C: Qual o código para exibir o array com **todas** as transmissões de hoje?
console.log("Segue os horarios de transmissão: ", filme.transmissoesHoje)
//Resposta D: d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?
console.log("No canal Brasil você pode assistir: ", filme.transmissoesHoje[1].horario)