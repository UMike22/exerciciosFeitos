function Bhaskara(ax2,bx,c){
 let = resultado = []
 let delta = Math.pow(bx,2) - 4*ax2*c
 let result1 = (-bx+ Math.sqrt(delta))/2*ax2
 let result2 = (-bx -Math.sqrt(delta))/2*ax2
 resultado.push(result1)
 resultado.push(result2)
 if(delta > 0){
     return resultado

 }
 else(delta < 0)
      return 'O delta é negativo'
 



}
console.log(Bhaskara(3,1,2))


