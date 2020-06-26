function PlanodeSaude(valor){
switch (valor) {
    case 1:{
        return 100 + 80
    }break;
    case 2:{
        return 100+50
    }break
    case 3:{
        return 100+95
    }break
    case 4:{
        return 100+130
    }break
    default: 'erro'
        break;
}

}

console.log(PlanodeSaude(1))