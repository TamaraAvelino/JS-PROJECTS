// Crie um algoritmo que calcule a area da parede
// o valor do pintor
// a quantidade de tinta  necessária (em baldes)

const altura = 3
const largura = 5
const valorPintor = 15
const rendimentoTinta = 12 //m2 por balde 

const areaParede = (altura * largura)
const resultadoPintor = (areaParede * valorPintor)
const baldes = areaParede / rendimentoTinta

console.log (`
A area da parede é ${areaParede}, 
    o valor do pintor é ${resultadoPintor.toFixed(2)} e 
    a quantidade de baldes é ${Math.ceil(baldes)}
    `)