const user = {
    nome: "Tamara",
    email: "tamara.aveli@outlook.com",
    senha: "123456"
}

const email = "tamara.avelino@outlook.com"
const senha = "123457"

if (email !== user.email || senha !== user.senha){
    console.log("Email ou senha inválidos")
    return
}

console.log(`Bem vindo ${user.nome}!`)



// if (user.email === email && user.senha === 123456){
 //    console.log(`${user.email} && ${user.senha} Seja bem vindo!`)
  //   return
// }

// console.log ("senha ou email incorretos")

// if(user.idade >= 18 && user.genero === "masculino"){
// console.log(`${user.nome} Deve se alistar!`)
//   return
// }

// console.log("Não precisa")