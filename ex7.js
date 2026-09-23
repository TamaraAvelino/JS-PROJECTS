// Crie um algoritmo que calcule um valor total de uma locação
// Se a quantidade de dias for maior que 10 
// Aplicar um desconto de 50R$ no valor total

// LET | VAR | CONST 
// VAR: GLOBAL, DENTRO DO MEU COD, TENHO FUNCOES QUE EXECUTAM ALGO, 
// FUNCAO É UM BLOCO DE COD, AQUELA VARIAVEL DEVE EXISTIR NAQUELA FUNCAO APENAS 
// DENTRO DA FUNCAO O COD FICA ALI TODO ENCAPSULADO
// A VAR ENTROU EM DESUSO 

// A LET FICA DENTRO DO BLOCO NÃO ESCAPA, POSSO ALTERAR O VALOR DELA. 

const dias = 12
const valorDia = 113.42

let calculo = dias * valorDia 

if(dias > 10) {
    calculo = calculo - 50
}

console.log(`O valor total é ${calculo}`)
