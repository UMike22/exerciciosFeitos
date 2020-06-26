function JurosSimples(capInic,tax, time){
    let juros = capInic*tax*time

    return  capInic+juros
   
}
console.log(JurosSimples(1000,0.5,2))


function JurosCompostos(capInic,tax,time){
    let juros =  capInic*(1+tax) **time

    return juros

}

console.log(JurosCompostos(1000,0.5,5))

