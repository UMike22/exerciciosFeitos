function WhatTriangule(lado1,lado2,lado3){
    
    
    if(lado1==lado2 &&lado3==lado1){
        return 'esse triangulo é isósceles'
    }
    else if(lado1==lado2 && lado2 != lado3 || lado1 != lado2 && lado2==lado3){
        return 'esse triangulo é escaleno'

    }
    else return 'esse triangulo é equilatero'
    
}

console.log(WhatTriangule(3,2,1))