

let answer = document.createElement(`div`)
let question = document.createElement('p')
question.innerHTML = `1. Вивести на сторінку в один рядок через кому числа від 10 до 20:`
let numArr = []
document.body.appendChild(question)

for (i=10; i<=20; i++){
    numArr.push(i)  
    answer.innerHTML = `${numArr}`
    answer.className = `answer`
    document.body.appendChild(answer)
    // console.log(i)
}



let question2 = document.createElement('p')
question2.innerHTML = `2. Вивести квадрати чисел від 10 до 20:`
let answer2 = document.createElement(`div`)
document.body.appendChild(question2)
document.body.appendChild(answer2)
let answer2Result =[]
for (let j in numArr) {
    let k = numArr[j]
    numArr[j] = numArr[j] ** 2
    answer2Result.push(j)
    answer2.innerHTML = `${numArr}`
    answer2.className = `answer`
    document.body.appendChild(answer2)
    console.log(`квадрат числа ${k}: ${numArr[j]}`)
}



let question3 = document.createElement('p')
question3.innerHTML = `3. Вивести таблицю множення на 7:`
let answer3 = document.createElement(`div`)
document.body.appendChild(question3)
for (let k = 1; k <= 10; k++) {
    let multiTbl = document.createElement(`p`)
    multiTbl.innerHTML = `7 x ${k} = ${7 * k}`
    multiTbl.className = `answer`
    answer3.appendChild(multiTbl)
    console.log(`7 x ${k} = ${7 * k}`)
  }
  document.body.appendChild(answer3)



let question4 = document.createElement('p')
question4.innerHTML = `4. Знайти суму всіх цілих чисел від 1 до 15:`
let answer4 = document.createElement(`div`)
document.body.appendChild(question4)

function sumRange (a,b){
    if (a>b) return 0
    let sum =0
    for(let i = a; i<=b; i++){
        sum += i
        //console.log(sum)
    } 
    return sum
} console.log(`Сума чисел від 1 до 15 складає:  ${sumRange(1,15)}`)
answer4.innerHTML = `Сума чисел від 1 до 15 складає:  ${sumRange(1,15)}`
answer4.className = `answer`
document.body.appendChild(answer4)



let question5 = document.createElement('p')
question5.innerHTML = `5. Знайти добуток усіх цілих чисел від 15 до 35:`
let answer5 = document.createElement(`div`)
document.body.appendChild(question5)

let res = 1
 for(let i = 15; i <= 35; i++){
    res = res * i  
}
let result5 = BigInt(res).toString()
console.log(`Добуток усіх цілих чисел від 15 до 35:  ${result5.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}`)
answer5.innerHTML = `Добуток усіх цілих чисел від 15 до 35:  ${result5.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}`
answer5.className = `answer`
document.body.appendChild(answer5)



let question6 = document.createElement('p')
question6.innerHTML = `6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500:`
let answer6 = document.createElement(`div`)
document.body.appendChild(question6)
let max = 500
let sum = 0
let result6 = 1
for(let y = 1; y <= max; y++){
    sum += y
}
result6 = sum / max
console.log(`Cереднє арифметичне всіх цілих чисел від 1 до 500:  ${result6}`)
answer6.innerHTML = `Cереднє арифметичне всіх цілих чисел від 1 до 500:  ${result6}`
answer6.className = `answer`
document.body.appendChild(answer6)



let question7 = document.createElement('p')
question7.innerHTML = `7. Вивести суму лише парних чисел в діапазоні від 30 до 80:`
let answer7 = document.createElement(`div`)
document.body.appendChild(question7)
let a = 30
let b = 80
function sumIntegers(a, b) {
    let sum = 0
    for (let i = a; i < b; i++) {
      if (i % 2 === 1) continue
      sum += i
    }
    return sum
  }
//console.log(sum)
console.log(`Cума парних чисел в діапазоні від 30 до 80: ${sumIntegers(a, b)}`)
answer7.innerHTML = `Cума парних чисел в діапазоні від 30 до 80:  ${sumIntegers(a, b)}`
answer7.className = `answer`
document.body.appendChild(answer7)



let question8 = document.createElement('p')
question8.innerHTML = `8. Вивести всі числа в діапазоні від 100 до 200 кратні 3 :`
let answer8 = document.createElement(`div`)
document.body.appendChild(question8)

let num2Arr = []
let k = 100;
for (k; k < 200; k++) {
      if (k != 0 && (k % 3 == 0)) {
        num2Arr.push(k);
        answer8.innerHTML = `Числа в діапазоні від 100 до 200 кратні 3:  ${num2Arr}`
answer8.className = `answer`
document.body.appendChild(answer8)
      }
}
//console.log(num2Arr)



let question9 = document.createElement('p')
 question9.innerHTML = `9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.`
 let answer9 = document.createElement(`div`)
 document.body.appendChild(question9)

 let naturalNum = 100
 let num3Arr = []
 let counts = 0
 let summ = 0
 for (let n = 2; n * 2 <= naturalNum; n++) {
    if (naturalNum % n == 0) {
        num3Arr.push(n)
      //console.log(`Дільник натурального числа ${naturalNum}: ${n}`) 
      if (n % 2 === 0) {
        counts++
        summ += n
    }
    answer9.innerHTML = `Всі дільники натурального числа ${naturalNum}: ${num3Arr}`
}
}


answer9.className = `answer`
document.body.appendChild(answer9)
//console.log(`Всі дільники натурального числа ${naturalNum}:  ${num3Arr}`)



let question10 = document.createElement('p')
question10.innerHTML = `10. Визначити кількість його парних дільників.`
let answer10 = document.createElement(`div`)
document.body.appendChild(question10)
answer10.innerHTML = `Кількість парних дільників натурального числа ${naturalNum}:  ${counts}`
answer10.className = `answer`
document.body.appendChild(answer10)
//console.log(`Кількість парних дільників натурального числа ${naturalNum}:  ${counts}`)



let question11 = document.createElement('p')
question11.innerHTML = `11. Знайти суму його парних дільників.`
let answer11 = document.createElement(`div`)
document.body.appendChild(question11)
answer11.innerHTML = `Cумa парних дільників натурального числа ${naturalNum}:  ${summ}`
answer11.className = `answer`
document.body.appendChild(answer11)
//console.log(`Кількість парних дільників натурального числа ${naturalNum}:  ${summ}`)



let question12 = document.createElement('p')
question12.innerHTML = `12. Надрукувати повну таблицю множення від 1 до 10:`

document.body.appendChild(question12)

for (let h = 1; h <= 10; h++) {
    let answer12 = document.createElement(`div`)
    answer12.className = `answer`
    for (let g = 1; g <= 10; g++) {
        let mult = document.createElement('h3')
        answer12.appendChild(mult)
        mult.innerHTML = `${h} * ${g} = ${h * g}`  
    }
    document.body.appendChild(answer12)
  }