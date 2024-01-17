let cardsArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
let mastArr = ['images/clubs.svg', 'images/spades.svg','images/diamonds.svg','images/hearts.svg']

let nameTask = document.createElement(`h2`)
nameTask.className = `titleH`
let nameImgStyle = `style="height: 25px"`

let nameTaskImg = document.createElement(`img`)
// Как сокраить nameImg???
let nameImg =  ` <img src="${mastArr[0]}" ${nameImgStyle}/> <img src="${mastArr[3]}" ${nameImgStyle}/> <img src="${mastArr[1]}" ${nameImgStyle}/> <img src="${mastArr[2]}" ${nameImgStyle}/> `
nameImg.className = `styleH1`
nameTask.innerHTML = `${nameImg}  Cards  ${nameImg} `

document.body.appendChild(nameTask)

for (let i = 0; i < cardsArr.length; i++) {
    const row = document.createElement('div')
    row.className = `wrapper`
    //console.log(i)
    for (let j = 0; j < mastArr.length; j++) {
    //console.log(j)
      const card = document.createElement('div')
      card.className = 'card'
      
      let upNumberCart = document.createElement('div')
      let downNumberCart = document.createElement('div')
      let image = document.createElement(`img`)
      
      upNumberCart.className = 'card__info'
      downNumberCart.className = 'card__info'
      image.className = 'person'
      //console.log(mastArr[j])
      image.src = mastArr[j]
      image.alt = `clubs`
      upNumberCart.innerHTML = `${cardsArr[i]} <img src="${mastArr[j]}"/>`
      downNumberCart.innerHTML = `${cardsArr[i]} <img src="${mastArr[j]}"/>`
      
      card.appendChild(upNumberCart)
            if (cardsArr[i] === `J`){
                image.src = `images/jack.svg`
                card.className = `card card--person`
                card.appendChild(image)
                // console.log(image)
            }
            if (cardsArr[i] === `Q`){
                image.src = `images/queen.svg`
                card.className = `card card--person`
                card.appendChild(image)
            }
            if (cardsArr[i] === `K`){
                image.src = `images/king.svg`
                card.className = `card card--person`
                card.appendChild(image)
            }
            if (cardsArr[i] === `A`){
                image.src = `${mastArr[j]}`
                card.className = `card card--person`
                card.appendChild(image)
               // console.log(image)
            }
      card.appendChild(downNumberCart)
      row.appendChild(card)
      //console.log(image)
    }
    document.body.appendChild(row)
  } 