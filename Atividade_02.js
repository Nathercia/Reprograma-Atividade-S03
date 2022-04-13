function comparaNumeros(num1, num2){
  if(num1>num2){
    return "O primeiro número é maior que o segundo"
  } else if(num1<num2){
    return "O segundo número é maior que o primeiro"
  } else {
    return "Os dois números são iguais"
  }
}

console.log(comparaNumeros(5,5))