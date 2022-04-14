function divideNumeros(num1, num2){
  const divisao = num1/num2
  
  if(divisao % 2 == 0){
    return `O resultado da divisão é ${divisao} e ele é par`
  } else {
    return `O resultado da divisão é ${divisao} e ele é impar`
  }
}

console.log(divideNumeros(10, 2))