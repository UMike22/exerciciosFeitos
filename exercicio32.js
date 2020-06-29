function CalcMedia(vetor){
    let total =  vetor.reduce((acc,currentValue) => acc+currentValue)
    return total / vetor.length
}
var numeros = [1, 2, 3, 4, 5, 6];
var vetor1 = [99,283932,238293,9093023]

console.log(CalcMedia(numeros))
console.log(CalcMedia(vetor1))