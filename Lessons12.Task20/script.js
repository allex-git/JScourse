
setInterval (function(){
  function randomRGBA(){
    let i =Math.round, r =Math.random, max =255
    return 'rgba('+i(r()*max)+','+i(r()*max)+','+i(r()*max)+')'
  }
  
  function getRandomX() {
    let xMax = Number(document.documentElement.clientWidth) - 100
    return x = Math.floor(Math.random() * xMax)
  }

  function getRandomY() {
    let yMax = Number(document.documentElement.clientHeight) - 100
    return y = Math.floor(Math.random() * yMax)
  }

  document.querySelector('.block').style.backgroundColor = randomRGBA()
  document.querySelector('.block').style.left = `${getRandomX()}px`
  document.querySelector('.block').style.top = `${getRandomY()}px`
},500)