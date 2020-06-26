function Anuidade(valor,mes){
    switch(mes){
        case 'janeiro':{
            return   valor 
        }break
        case 'fevereiro':{
            return   valor*(1+0.05)**1
        }break
        case 'março':{
            return    valor*(1+0.05)**2
        }break
        case 'abril':{
            return    valor*(1+0.05)**3
        }break
        case 'maio':{
            return    valor*(1+0.05)**4
        }break
        case 'junho':{
            return  valor * (1+0.05)**5
        }break
        case 'julho':{
            return    valor *(1+0.05)**6
        }break
        case 'agosto':{
            return   valor *(1+0.05)**7
        }break
        case 'setembro':{
            return   valor *(1+0.05)**8
        }break
        case 'outubro':{
            return  valor * (1+0.05)**9
        }break
        case 'novembro':{
            return valor *(1+0.05)**10
        }break
        case 'dezembro':{
            return  (valor *(1+0.05)**11).toFixed(2)
        }break
    }
}

console.log(Anuidade(1000,'maio'))


function Contas(mes,valor){
if(mes > 0 && mes < 13){
    let atraso = mes -1

    return  (valor*(1+0.05)**atraso).toFixed(2)

}else{
    return 'Mes inválido.'
}
}
console.log(Contas(5,1000))