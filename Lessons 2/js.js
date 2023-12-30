const num1 = Number(prompt('Enter number 1:'))
const num2 = Number(prompt('Enter number 2:'))
if (!isNaN(num1 && num2)) { 
  let a = num1 + num2
  let b = num1 - num2
  let c = num1 * num2
  let d = num1 / num2
  alert(num1 + ' + ' + num2 + ' = ' + a + '\n' + num1 + ' - ' + num2 + ' = ' + b + '\n' + num1 + ' * ' + num2 + ' = ' + c + '\n' + num1 + ' / ' + num2 + ' = ' + d)
}
else {
  alert(`You enter not number`)
} 
