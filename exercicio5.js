function decimais(num1,num2){
    return `O valor a ser pago é : R$${(num1+num2).toFixed(2)}`
}

console.log(decimais(0.1,0.2))