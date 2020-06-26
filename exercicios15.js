function VendaCarros(carro){
    switch (carro) {
       case 'hatch':{
           return 'Obrigado'
       }break
       case 'moto','caminhonete':{
        return 'tem certeza?'
       }break
       default :{
           return 'Não temos esse modelo aqui'}
       }
    }

    console.log(VendaCarros('moto'))