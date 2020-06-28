 /*var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

console.log(numbers.shift())
console.log(numbers.pop()) */
function DefinirMaiorMenor(vetorEscolhido){
  vetorEscolhido.sort(function(a,b){
    return a-b
  })
   console.log(`O maior valor desse array é ${vetorEscolhido.pop()} e o menor é ${vetorEscolhido.shift()}`)

}


let vetor = [9,20,50,30,1,2,99,40,35,66,70,88]

DefinirMaiorMenor(vetor)