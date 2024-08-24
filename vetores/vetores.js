
class Vector {
	constructor(posicoes) {
		this.array = []
		this.somatorio = 0
	}
}

// Função que gera um número aleatório
function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
}

// Função que gera um vetor com n posições
function gerarVetor(qtd_posicoes){
	let vetor = new Vector( qtd_posicoes )
	let valor = undefined

	for (let i = 0; i < qtd_posicoes; i++){
		valor = gerarAleatorio(0,1)
		vetor.array.push( valor )
		vetor.somatorio += valor
	}
	
	return vetor
}

// Função que gera n vetores e cada um com m posições
function gerarVetores(qtd_vetores, qtd_posicoes){
	let vetores = []
	
	for (let i = 0; i < qtd_vetores; i++){
	  vetores.push( gerarVetor(qtd_posicoes) )
	}
	
	return vetores
}
