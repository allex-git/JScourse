const divContainer = document.createElement(`div`)
const divInfo = document.createElement(`div`)
const headerH2 = document.createElement(`h2`)
const scoreContainer = document.createElement(`div`)
const scoreTitle = document.createElement(`div`)
const scoreSpan = document.createElement(`span`)
const resultSpan = document.createElement(`span`)
const resultSpanControl = document.createElement(`p`)
const resultSpanControlKey = document.createElement(`p`)
const divGrid = document.createElement(`div`)
const resultScore = document.createElement(`p`)
const resultRestart = document.createElement(`p`)

divContainer.className = `container`
divInfo.className = `info`
scoreContainer.className = `score-container`

headerH2.innerText=`2048`

scoreTitle.className = `score-title`
scoreTitle.innerText=`рахунок`

scoreSpan.id = `score`
scoreSpan.innerText = `0`

resultSpan.className = `result`
resultSpan.id = `result`
resultSpan.innerHTML = `Сладіть числа та наберіть <b><strong>&nbsp2048</strong></b>!`
resultSpanControl.innerHTML = `<strong><i>Керування клавіатурою:</i></strong>`

resultSpanControlKey.className = `control-key`
resultSpanControlKey.innerHTML = `<i>стрілки:</i>&nbsp<b>&#8592</b>&nbsp<b>&#8594</b>&nbsp<b>&#8593</b>&nbsp<b>&#8595</b>&nbsp<i>або</i>&nbsp<b>a</b>&nbsp<b>d</b>&nbsp<b>w</b>&nbsp<b>s</b>` 

resultScore.className = `end-game`
resultRestart.className = `restart`

divGrid.className = `grid`

document.body.appendChild(divContainer)
divContainer.appendChild(divInfo)
divInfo.appendChild(headerH2)
divInfo.appendChild(scoreContainer)
scoreContainer.appendChild(scoreTitle)
scoreContainer.appendChild(scoreSpan)
divContainer.appendChild(resultSpan)

divContainer.appendChild(divGrid)
divContainer.appendChild(resultSpanControl)
divContainer.appendChild(resultSpanControlKey)

const startGame = document.addEventListener('DOMContentLoaded', () =>  {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    let squares = []
    const width = 4
    let score = 0

    function createBoard() {
        for (let i=0; i < width*width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }

    createBoard()

    function generate() {
        randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            checkForGameOver()
            } 
            else generate()
    }

    function moveRight() {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zero = Array(missing).fill(0)
                let newRow = zero.concat(filteredRow)

                squares[i].innerHTML = newRow[0]
                squares[i +1].innerHTML = newRow[1]
                squares[i +2].innerHTML = newRow[2]
                squares[i +3].innerHTML = newRow[3]
            }
        }
    }

    function moveLeft() {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zero = Array(missing).fill(0)
                let newRow = filteredRow.concat(zero)

                squares[i].innerHTML = newRow[0]
                squares[i +1].innerHTML = newRow[1]
                squares[i +2].innerHTML = newRow[2]
                squares[i +3].innerHTML = newRow[3]
            }
        }
    }


    function moveUp() {
        for (let i=0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zero = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(zero)

            squares[i].innerHTML = newColumn[0]
            squares[i +width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
        }
    }

    function moveDown() {
        for (let i=0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zero = Array(missing).fill(0)
            let newColumn = zero.concat(filteredColumn)

            squares[i].innerHTML = newColumn[0]
            squares[i +width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
        }
    }

    function combineRow() {
        for (let i =0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i +1].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i +1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i +1].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }

        checkForWin()
    }

    function combineColumn() {
        for (let i =0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i +width].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i +width].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i +width].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }

        checkForWin()
    }

    function control(el) {
        if(el.keyCode === 37 || el.keyCode === 65) {
            keyLeft()
        } else if (el.keyCode === 38 || el.keyCode ===  87 ) {
            keyUp()
        } else if (el.keyCode === 39 || el.keyCode ===  68) {
            keyRight()
        } else if (el.keyCode === 40 || el.keyCode ===  83) {
        keyDown()
        }
    }

  document.addEventListener('keyup', control)

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
    }

    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }

        function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }

    function checkForWin() {
        for (let i=0; i < squares.length; i++) {
            if (squares[i].innerHTML == 2048) {
                resultDisplay.className = `end-game`
                resultDisplay.innerHTML = '<b>Вітаю! Ви виграли!</b>'
                divGrid.className = `hidden`
                resultSpanControlKey.className = `hidden`
                resultSpanControl.className = `hidden`
                resultScore.innerHTML = `Ви набрали <b>${score}</b> бали!`
                resultRestart.innerHTML = `<i>Гра почнеться за декілька секунд...</i>`
                
                divContainer.appendChild(resultScore)
                divContainer.appendChild(resultRestart)
                document.removeEventListener('keyup', control)
                setTimeout(() => clear(), 2000)
                setTimeout(function(){
                    location.reload();
                }, 7000) 
            }  
        }
    }

    function checkForGameOver() {
        let zero = 0
            for (let i=0; i < squares.length; i++) {
                if (squares[i].innerHTML == 0) {
                    zero++
                }
            }
        if (zero === 0) {
            resultDisplay.className = `end-game`
            resultDisplay.innerHTML = '<b>Нажаль, гру завершено. Спробуйте ще раз!<b>'
            divGrid.className = `hidden`
            resultSpanControlKey.className = `hidden`
            resultSpanControl.className = `hidden`
            resultScore.innerHTML = `Ви набрали <b>${score}</b> бали!`
            resultRestart.innerHTML = `<i>Гра почнеться за декілька секунд...</i>`
            
            divContainer.appendChild(resultScore)
            divContainer.appendChild(resultRestart)
            document.removeEventListener('keyup', control)
            setTimeout(() => clear(), 2000)
            setTimeout(function(){
                location.reload();
            }, 7000)
        }
    }

    function clear() {
        clearInterval(timerGame)
    }

    function addColours() {
        for (let i=0; i < squares.length; i++) {
            if (squares[i].innerHTML == 0) squares[i].style.backgroundColor = '#afa192'
            else if (squares[i].innerHTML == 2) squares[i].style.backgroundColor = '#eee4da'
            else if (squares[i].innerHTML == 4) squares[i].style.backgroundColor = '#ede0c8' 
            else if (squares[i].innerHTML == 8) squares[i].style.backgroundColor = '#f2b179' 
            else if (squares[i].innerHTML == 16) squares[i].style.backgroundColor = '#ffcea4' 
            else if (squares[i].innerHTML == 32) squares[i].style.backgroundColor = '#e8c064' 
            else if (squares[i].innerHTML == 64) squares[i].style.backgroundColor = '#ffab6e' 
            else if (squares[i].innerHTML == 128) squares[i].style.backgroundColor = '#fd9982' 
            else if (squares[i].innerHTML == 256) squares[i].style.backgroundColor = '#ead79c' 
            else if (squares[i].innerHTML == 512) squares[i].style.backgroundColor = '#76daff' 
            else if (squares[i].innerHTML == 1024) squares[i].style.backgroundColor = '#beeaa5' 
            else if (squares[i].innerHTML == 2048) squares[i].style.backgroundColor = '#d7d4f0' 
        }
    }
    
    addColours()

    const timerGame = setInterval(addColours, 50)

})
