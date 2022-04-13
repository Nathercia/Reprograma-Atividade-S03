function divideNumeros(num1, num2){
  const divisao = num1/num2

  if(num1 % num2 && divisao % 2 === 0){
    return `O resultado da divisão é ${divisao} e ele é par`
  } else {
    return `O resto da divisão é ${divisao}`
  }
}

console.log(divideNumeros(10, 2))