function QuantImparPar(vetorSelecionado){
    let qtdImpar = 0
    let qtdPar = 0 
    for (i=0;i<vetorSelecionado.length;i++){
        if(vetorSelecionado[i]%2==0){
             qtdPar++
        }else {
             qtdImpar++
        }
    }console.log(`A quantidade de impares é ${qtdImpar}, e a de pares é ${qtdPar}`)
}

let vetor = [1,2,3,4,5,6,7,8,9,10]

QuantImparPar(vetor)