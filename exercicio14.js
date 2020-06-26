let frutas = function(nome){
   switch(nome){
       case 'Kiwi','kiwi':{
           return 'Não vendemos kiwi aqui'
       }break
       case 'Maça','maça','maca','Maca' :{
           return 'Não vendemos maças aqui.'
       }break
       case 'Melancia','melancia' :{
           return 'Aqui está, são 3 reais o quilo.'
       }break
       default : {
           return 'Error 404 not found'
       }
    }

}



console.log(frutas('kiwisasa'))