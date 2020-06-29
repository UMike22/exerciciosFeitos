function NotaAluno(vetor){
    let total = vetor.reduce((total,numero) =>{
        return total+numero/vetor.length
    })
    if(total<4.9){
        return 'Conceito D'
    }else if(total>5.0 && total<6.9){
        return 'Conceito C'
    }else if(total > 7.0 && total < 8.9){
        return 'Conceito B  '
    }else {
        return 'Conceito A'
    }
}

let vetor1 = [1,2,3,4,5,6,7,8,9,10,11]

console.log(NotaAluno(vetor1))



function CadaNota(vetor){
    
    let conceito = []
    for(i=0;i<vetor.length;i++){    
    if(vetor[i]>=0 && vetor[i]<=4.9){
        conceito.push('D')  
    }else if(vetor[i]>=5 && vetor[i]<=6.9){
        conceito.push('C')  
    }else if(vetor[i]>=7 && vetor[i]<=8.9){
        conceito.push('B')  
    }else if(vetor[i]>=9 && vetor[i]<=10) {
        conceito.push('A')  
    }else{
        conceito.push('Numero Inválido')
    }
    
    }
    return conceito
}

console.log(CadaNota(vetor1))
