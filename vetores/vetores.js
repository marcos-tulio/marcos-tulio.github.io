
function Vector( posicoes ) {
	this.array = []
	this.somatorio = 0
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




function validarVetor( vetor, limite ){
	let contador = 0

	for ( const value in vetor ) {
		console.log( contador )
	}

	return true
}

/* ------------------------------------------------------ */
// Exemplo 1: Gerar um vetor com 30 posições
/* ------------------------------------------------------ */
//let vetor = gerarVetor(30)
//console.log("Exibindo o único vetor criado: ")
//console.log( vetor )


/* ------------------------------------------------------ */
// Exemplo 2: Gerar três vetores e cada um tem 25 posições
/* ------------------------------------------------------ */
//let vetores = gerarVetores(3, 25)
// Aqui irá exibir todos os vetores
//console.log("Exibindo os três vetores criados: ")
//console.log( vetores )

// Aqui irá exibir apenas o segundo vetor.
//console.log("Exibindo apenas o segundo dos três vetores criados: ")
//console.log( vetores[1] )

// Aqui irá exibir apenas o quarto valor do segundo vetor.
//console.log("Exibindo apenas o quarto valor do segundo vetor: ")
//console.log( vetores[1][3] )

/* ------------------------------------------------------ */
// Exemplo 3: Calculo dos vetores
/* ------------------------------------------------------ */
