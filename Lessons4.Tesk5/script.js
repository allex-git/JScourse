let numberFirst = Number(prompt(`Введіть число для змінної а:`))
let numberSecond = Number(prompt(`Введіть число для змінної b:`))
let numberStep = Number(prompt(`Введіть число для змінної h:`))
let sumOfFactorials = 0
if (numberStep > 0) {
    if (numberFirst < numberSecond){
        for (numberFirst; numberFirst <= numberSecond; numberFirst +=  + numberStep){
            sumOfFactorials += numberFirst
            console.log(numberFirst)   
        }
        console.log(`Сумма: ${sumOfFactorials}`)
    } else{
        console.log(`Змінна 'a' більше змінної 'b'`)
    } 
}
else{console.log(`Змінна 'h' не більше нуля`)}