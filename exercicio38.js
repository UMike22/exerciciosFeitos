function Intervalo(i,fim){
    let Impares = []
    let Pares = []
    for(i=0;i<fim;i++){
        if(i%2==0){
        Pares.push(i)
        }else{
            Impares.push(i)
        }
    }
        return  Pares
    }


console.log(Intervalo(0,100))