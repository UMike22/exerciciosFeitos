function AlunoNotas(cod,not1,not2,not3){
    
    let notas = []
    notas.push(not1)
    notas.push(not2)
    notas.push(not3)
    notas.sort((a,b) => a < b ? 1 : -1)
     let maiorNota = notas.reduce((a,b) =>{
         return Math.max(a,b)
     })
    let media = ((notas[0]*4) + (notas[1]*3) + (notas[2]*3))/10
    if(media>=5){
        return ` Olá aluno do código ${cod}. A sua primeira nota foi ${not1}, a segunda foi ${not2} a terceira foi ${not3},e sua media é ${media} Sua maior nota foi : ${maiorNota}!! Parabéns você passou de ano!!`
    }else{
        return 'Você foi reprovado.'
    }

    
}

console.log(AlunoNotas(123,4,9.5,9.8))