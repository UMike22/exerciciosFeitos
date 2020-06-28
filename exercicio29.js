function Intervalo(vetorSelecionado){
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for (i=0;i<vetorSelecionado.length;i++){
        if (vetorSelecionado[i]<= 20 && vetorSelecionado[i]>=10){
            dentroIntervalo++
        }else{
            foraIntervalo++
        }
    }console.log(dentroIntervalo,foraIntervalo)
}
let vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

Intervalo(vetor)