function TrocaVetor(item1,item2){
    if(item1.length == item2.length){
    for(i=0;i<item1.length;i++){
        item1[i] = item1[i] + item2[i]
        item2[i] = item1[i] - item2[i]
        item1[i] = item1[i] - item2[i]
    }
} else{
    return 'Itens com tamanhos diferentes.'
}
    console.log(`Os novos numeros do item1 é : ${vetor1} e o do item2 é: ${vetor2}`)
}

let vetor1 = [1,2,3,4,5,6,7,8,9,10]
let vetor2 =[11,12,13,14,15,16,17,18,19,20,21]
TrocaVetor(vetor1,vetor2)


