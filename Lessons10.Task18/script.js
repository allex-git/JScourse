function getRandRange(min, step) {
    return Math.ceil(Math.random() * step) + min
  }
  
  function setWinner(isLeft) {
    alert(`${isLeft ? heroRight.name : heroLeft.name} is Winner`)
    heroRight.startGame()
    heroLeft.startGame()
  }
  
  const attackerParts = [
    'головою',
    'рукою',
    'ногою',
    'пальцем',
    'носом',
  ]
  
  const attackieParts = [
    'голову',
    'руку',
    'ногу',
    'палець',
    'ніс',
  ]
  
  class Hero {
    constructor(name, hp, className, img, str) {
      this.name = name
      this.hp = hp
      this.maxHp = hp
      this.className = className
      this.img = img
      this.str = str
    }
  
    startGame() {
      this.hp = this.maxHp
      const hpText = document.querySelector(`.${this.className} .hp-text`)
      const hpHeight = document.querySelector(`.${this.className} .hp`)
      hpText.innerHTML = this.maxHp
      hpHeight.style.height = `100%`
    }
  
    setHp(isStart) {
      const isBlock = Math.random() < 0.3
      const value = (isStart || isBlock) ? 0 : this.str
      const hpText = document.querySelector(`.${this.className} .hp-text`)
      const hpHeight = document.querySelector(`.${this.className} .hp`)
  
      const newHpValue = this.hp - value
      
      const newValue = (newHpValue < 0) ? 0 : newHpValue
      
      hpText.innerHTML = newValue
      hpHeight.style.height = `${newValue * 100 / this.maxHp || 2}%`
      this.hp -= value
  
      if(!isBlock && !isStart) {
        const logBlock = document.querySelector('.battle-log')
        const logPostBlock = document.createElement('div')
        const logPost = document.createElement('span')
        const logPostImg = document.createElement('img')
  
        logPostImg.src = this.img
  
        logPost.innerText = `${this.name} наніс удар ${attackerParts[Math.floor(Math.random() * attackerParts.length)]} в ${attackieParts[Math.floor(Math.random() * attackieParts.length)]}, ${this.className === 'left' ? heroRight.name : heroLeft.name} плаче !`
  
        logPostBlock.appendChild(logPostImg)
        logPostBlock.appendChild(logPost)
        logBlock.appendChild(logPostBlock)
      }
  
      if (newHpValue < 1) {
        this.hp = this.maxHp
        setWinner(this.className === 'left')
      }
      // setTimeout(() => {
      //   if (isBlock) console.log(`${this.name} have blocked the damage !!!`)
      // }, 100)
    }
  
    setName() {
      const nameEl = document.createElement('h3')
      nameEl.classList.add('hero-name')
      nameEl.innerHTML = this.name
      document.querySelector(`.${this.className}`).appendChild(nameEl)
    }
  
    setImage() {
      const imageEl = document.querySelector(`.${this.className} img`)
      imageEl.setAttribute('src', this.img)
    }
  }
  
  const heroLeft = new Hero('Mordekaiser', getRandRange(100, 300), 'left', 'https://static.wikia.nocookie.net/leagueoflegends/images/f/f1/Mordekaiser_Render.png/revision/latest/thumbnail/width/360/height/360?cb=20190604005742', getRandRange(12, 28))
  
  const heroRight = new Hero('Katarina', getRandRange(100, 100), 'right', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16ba7581-d40f-45a6-ad94-b1e783d22fb6/de0lpnj-0c5cfa07-ff66-4790-9e9b-8c580740b972.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2YmE3NTgxLWQ0MGYtNDVhNi1hZDk0LWIxZTc4M2QyMmZiNlwvZGUwbHBuai0wYzVjZmEwNy1mZjY2LTQ3OTAtOWU5Yi04YzU4MDc0MGI5NzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-BUbFjxIB3dR59THK7ZdC_NUuBSmt6Mr59ek2zxL7Wk', getRandRange(12, 8))
  
  const hitBtn = document.querySelector('.hit-btn')
  
  hitBtn.addEventListener('click',() => {
    heroLeft.setHp()
    heroRight.setHp()
  })
  
  
  
  heroLeft.setHp(true)
  heroRight.setHp(true)
  heroRight.setName()
  heroLeft.setName()
  heroLeft.setImage()
  heroRight.setImage()