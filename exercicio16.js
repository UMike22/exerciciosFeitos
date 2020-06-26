let Calculadora = function(num1,operacao,num2){
    switch(operacao){
        case '+' :{
            return num1+num2
        } break
        case '-' :{
            return num1-num2
        }break

        case 'X' :{
            return num1*num2
        }break
        case '/':{
            return num1/num2
        }break
    
        default :{
            return 'Operaçao inválida.'
        }
    }

}

console.log(Calculadora(5,'X', 5))