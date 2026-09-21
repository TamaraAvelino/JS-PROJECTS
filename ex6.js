// Crie um algoritmo que calcule um valor total de uma locação
// Se a quantidade de dias for maior que 10 
// Aplicar um desconto de 50R$ no valor total

const dias = 12 
const valorDia = 113.42

const locação = dias * valorDia

if (dias > 10){
   console.log (`O valor total é ${locação - 50}`)

} else {
    console.log (`O valor total é ${locação}`)
}