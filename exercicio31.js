function NumNegativo(vetorEscolhido){
    let negativo = 0
    let positivo = 0
    
    for(i=0;i<=vetorEscolhido.length;i++){
        if(vetorEscolhido[i]<0){
            negativo++
        }else{
            positivo++
        }
    }
    return `Quantidade negativos : ${negativo} e de positivos ${positivo}`
}

let vetor1 = [1,2,3,5,6,8,64,2,4,67,-11,-55,-33,5,1,-21,-1]

console.log(NumNegativo(vetor1))