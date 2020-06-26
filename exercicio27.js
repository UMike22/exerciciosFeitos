function AnaliseCrescimento(altura1,altura2,taxCres1,taxCresc2){
    let menorCriança = []
    let maiorCriança = []
    if(altura1<altura2){
        menorCriança = altura1,maiorCriança = altura2
    }
    else{
        maiorCriança = altura2, menorCriança = altura1
    }

    return `A menor criança tem ${menorCriança.toFixed(2)}cm e a maior criança tem ${maiorCriança.toFixed(2)}cm`
}

console.log(AnaliseCrescimento(1.70,2.00,1.1,1.2))