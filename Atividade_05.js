function maiorIdade(dataNacimento){
  const anoAtual = 2022
  const idade = anoAtual - dataNacimento
  
  if(idade<18){
    return "Menor"
  } else {
    return "Maior"
  }  
}

console.log(maiorIdade(2005))