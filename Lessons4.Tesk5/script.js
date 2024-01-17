let numberFirst = Number(prompt(`Введіть число для змінної а:`))
let numberSecond = Number(prompt(`Введіть число для змінної b:`))
let numberStep = Number(prompt(`Введіть число для змінної h:`))
let sumOfFactorials = 0
if (numberStep > 0) {
    if (numberFirst < numberSecond){
        for (let i = numberFirst; i <= numberSecond; i +=  numberStep){
            console.log(`Число перебора: ${i}`)
            console.log(`Факториал ${i}! = ${factorial(i)}`)
            sumOfFactorials += factorial(i)
            //// Честное copy past))) https://uk.javascript.info/task/factorial
                function factorial(i) {
                    return (i != 1) ? i * factorial(i - 1) : 1;    
                }
        }
        console.log(`Сумма: ${sumOfFactorials}`)
    } else{
        console.log(`Змінна 'a' більше змінної 'b'`)
    } 
}
else{console.log(`Змінна 'h' не більше нуля`)}
