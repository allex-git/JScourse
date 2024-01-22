let a = Number(prompt(`Введите переменную "а":`))
let b = Number(prompt(`Введите переменную "b":`))
function main(a, b ,c) {
    if (!a){
        a = 2
    }
    if (!b){
        b = 3
    }
    if (typeof c === `function`){
        return c(sum(a,b)) 
    } else {
        return sum (a,b)
    }
}
function sum(a, b) {
    return a + b
}
let result = main(a,b, (num) => {
    return num
})
console.log(result)
