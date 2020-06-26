function Lanchonete(codigo, qtd){
    
    
    switch (codigo) {
        
        case 100:{
            return   3 * qtd
        }break

        case 200:{
            return  4 * qtd
        }break
        
        case 300 :{
            return  5.50 * qtd
        }break
            
        case 400:{
            return 7.50 *qtd
        }break
        case 500 :{
            return 3.50 * qtd
        }break
        case 600 :{
            return 2.80 * qtd
        }break
        default: return 'Esse produto não existe.'
            break;
    }



}

console.log(Lanchonete(100,4))