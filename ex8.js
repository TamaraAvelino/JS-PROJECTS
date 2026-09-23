// Crie um algoritmo que calcule o valor total de uma locação 
// Se a quantidade de dias for maior que 10
// Aplicar um desconto de 15% no valor total 
// Aplicar um acrescimo de 20% no valor total se for menor que 5 dias

const dias = 4
const valorDia = 135.33

let calculo = dias * valorDia 


if(dias > 10){
    let desconto = calculo * 15 / 100

    calculo = calculo - desconto
}

console.log(`O valor total da locação com o desconto é ${calculo}`)

if(dias < 5){
    let acrescimo = calculo * 20 / 100

    calculo = calculo + acrescimo
}

console.log (` O valor total da locação com acrescimo é ${calculo.toFixed(2)}`)