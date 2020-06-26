



let diaDeSemana = function(num) {
    switch (num) {
        case 1:{
            return 'Final de semana'
        }
        break;
        case 2,3,4,5,6:{
            return 'Dia de semana'
        }
    default:{
        return 'Dia Inválido'
        
    }
    
        
}
}
console.log(diaDeSemana(1))