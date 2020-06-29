function uniaoConcat(vetor1,vetor2,vetor3){
    let uniao = [].concat(vetorInteiro,vetorString)
    let uniao2 = [...vetorString,...vetorInteiro]
    let uniaoTudo = [...vetorInteiro,...vetorString,...vetorDouble]
    return ` com concat : ${uniao}. com spread : ${uniao2}. com spread uniao dos 3 : ${uniaoTudo}`

}

let vetorInteiro = [9,34,5,6,4]
let vetorString = ['Vasco', "Botafogo", 'Chelsea', 'Real Madrid']
let vetorDouble = [0.5,1.4,6.6,9.22,0.11235]

console.log(uniaoConcat(vetorInteiro,vetorString,vetorDouble))