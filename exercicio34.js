function Comparar(value1,value2){
    let Contido = true
    for(i=0;i<value1.length;i++){
      let caractereString1 = value1.charAt(i).toLowerCase()
    
    for(j=0;i<value2.length;j++){
        let caractereString2 = value2.charAt(j).toLowerCase()
    
    if(caractereString1 == caractereString2){
        Contido = true
        break
    }else{
         Contido = false
    }break
}
if(!Contido){
    return Contido
}
}
return Contido
}



console.log(Comparar('abc','ttkokadoksdt'))