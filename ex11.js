const user = {
    nome: "Tamara",
    idade: 26,
    cores: ["azul", "verde", "amarelo"],
    carro: {
        marca: "BMW",
        modelo: "X5",
        ano: 2025,
        cor: "preto",
        combustível: ["gasolina", "etanol", "eletrico"]
    }
}

//toda lista [] começa em 0.

console.log(user.nome)
console.log(user.cores[2])

// console para mostrar a marca, modelo e ultimo combustível do carro

console.log(user.carro.marca, user.carro.modelo, user.carro.combustível [2])