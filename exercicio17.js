let Aumento = function(salario,plano){
    switch (plano) {
        case 'A','a':{
            return  salario + salario * 0.10
        }break
        case 'B','b':{
            return salario + salario * 0.15
        } break;
        case 'C','c' :{
            return salario + salario * 0.20
        }break;
        
        default: return 'Plano inválido.'
            break;
    }
}

console.log(Aumento(3000,'a'))
console.log(Aumento(4000,'b'))