let lengthArrA = Number(prompt(`Введите длину массива:`))
let randomNumber = []
let arrA = []
for (let i = 0; i < lengthArrA; i++) {
    arrA.push(Math.floor(Math.random() * (1000 - 1 + 1)) + 1)
}
console.log(arrA)
console.log(arrA.length)
for (let k = 0; k < arrA.length; k++) {
    let primeNumber = true;    
        for (let j = 2; j < k; j++) {
            if (arrA[k] % j == 0) {
            primeNumber = false;       
            break;
            }    
        }
    function isPrime(num) {
        for (let m = 2; num > m; m++) {
            if (num % m == 0) {
                return false;
            }
        } 
        return num > 1;  
    }
}
let arrB = []
arrB = (arrA.filter(isPrime))
arrB.sort(function (a, b) {
    return a - b;
})
console.log(arrB) 

let arrBmin = Math.min(...arrB)
let arrBmax = Math.max(...arrB)
console.log(arrBmin)
console.log(arrBmax)

let question1 = document.createElement('p')
let question2 = document.createElement('p')
let question3 = document.createElement('p')
let question4 = document.createElement('p')
let question5 = document.createElement('p')

question1.innerHTML = `Размер указанного массива: ${lengthArrA} <br>`
question2.innerHTML = `Массив arrA = [${arrA}] <br>`
question3.innerHTML = `В массиве 'arrА' найти простые числа и записать их в массив 'arrB'. arrB = [${arrB}] <br>`
question4.innerHTML = `Минимальное число массива 'arrB': ${arrBmin} <br>`
question5.innerHTML = `Максимальное число массива 'arrB': ${arrBmax} <br>`
question1.className = `answer`
question2.className = `answer`
question3.className = `answer`
question4.className = `answer`
question5.className = `answer`

document.body.appendChild(question1)
document.body.appendChild(question2)
document.body.appendChild(question3)
document.body.appendChild(question4)
document.body.appendChild(question5)