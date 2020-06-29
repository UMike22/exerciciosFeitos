// usando for comum
function Vetores(vetor1,vetor2){
    
    for(i=0;i<vetor1.length;i++){
        
    console.log(vetor1[i]*vetor2)
    }
    
}
let vetorNum = [1,2,3,4,5,6,7,8,9,10]
let vetorUnicoNum = [2]
Vetores(vetorNum,vetorUnicoNum)

function Validation(vetor1,vetor2){
    for(i=0;i<vetor1.length;i++){
        if(vetor1[i]>5){
            console.log(vetor1[i]*vetor2)
        }
        else{
            console.log('Numero muito pequeno.')
        }break
        
    }
    
    
}
Validation(vetorNum,vetorUnicoNum)

// usando for.Each
let vetor = [1,2,3,4,5,6,7,8,9,10]
function Mult(vetor,multiplicador){
    let resultado = []
    vetor.forEach((element) => {
         resultado.push(element*multiplicador)
        
    });
    return resultado

}
console.log(Mult(vetor,2))