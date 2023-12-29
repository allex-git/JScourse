// let userName = prompt('Enter your name: ')
// alert('Hello, ' + userName + ' ! How are you? This is JavaScript world!')
/* */
const applePrice = 25
const orangePrice = 110
const bananaPrice = 62

let totalPrice = 0

const needApple = confirm('Do you need Apple?')
if (needApple){
    const appleCount = Number(prompt('How mutch Apples do ypu need (kg)?'))
    if (!isNaN(appleCount)) totalPrice += appleCount * applePrice
    else alert('You entered not a number')
}
const needOrange = confirm('Do you need Orange?')
if (needOrange){
    const orangeCount = Number(prompt('How mutch Oranges do ypu need (kg)?'))
    if (!isNaN(orangeCount)) totalPrice += orangeCount * orangePrice
    else alert('You entered not a number')
}
const needBanana = confirm('Do you need Banana?')
if (needBanana){
    const bananaCount = Number(prompt('How mutch Bananas do ypu need (kg)?'))
    if (!isNaN(bananaCount)) totalPrice += bananaCount * bananaPrice
    else alert('You entered not a number')
}

const totalElement = document.querySelector('.total')
console.log('totalElement', totalElement)
if (totalPrice) {
    console.log(`Your purchase cost ${totalPrice} UAH`) 
} else {
    console.log(`You bshopping card is empty`)
}

