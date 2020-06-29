function ImprimirPares(inicio = 0,fim = 100){
    let Impares = []
    let Pares = []
    if(inicio>fim){
        inicio = inicio+fim
        fim = inicio-fim
        inicio = inicio-fim
    }
    for(i=0;i<fim;i++){
        if(i%2==0){
        Pares.push(i)
        }else{
            Impares.push(i)
        }
    }
        return  Pares
    }


console.log(ImprimirPares(10,50))