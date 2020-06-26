function Aprovacao(nota){
    
    let = notacorrigida = correcao(nota)
    if(nota <= 100){
    
    if(notacorrigida >= 40){
        return `Aprovado com nota ${notacorrigida}`
    }
    else {
        return `Reprovado com nota ${notacorrigida}`
    }
}   else{
    return 'Nota maior que 100'
}
}

function correcao(nota){
    if(nota%5 >= 3){
        return  nota +(5 - (nota%5))
    }
    else{
        return nota
    }
}   

console.log(Aprovacao(83))
