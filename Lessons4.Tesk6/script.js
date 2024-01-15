let points = 0;
let fail = `Как говорил Буданов: "УВЫ!" ))) `;

let userAlert1 = `Вы ничего не ввели!`
let userAlert2 = `Вы отказались от ввода!`
let questionFirst = prompt(`Сколько будет 2+2?`);
let answerFirst = 4;
if (Number(questionFirst) === answerFirst) {
        points += +10
        alert(`Верно! Вы получаете ${points} баллов!`)
    }
     else if (questionFirst  === null) {
    alert(userAlert2)
    }
    else if (questionFirst == 0) {
    alert(userAlert1)
    } 
else {
    alert(`${fail} Количество баллов: ${points}`)
}

let questionTwo = String(prompt(`Солнце встает на востоке?`))
let answerTwo = `да`
if (questionTwo.toLowerCase() === answerTwo.toLowerCase()) {
    points += +10
    alert(`Верно! Вы получаете ${points} баллов!`)
  }
   else if (questionTwo === 'null') {
    alert(userAlert2)
  }

   else if (questionTwo === '') {
    alert(userAlert1)
  } 
else {
    alert(`${fail} Количество баллов: ${points}`)
  }

  let questionThree = (prompt(`Сколько будет 5 / 0?`))
  let answerThree = [`Делить на ноль нельзя!`, `нельзя`, `ошибка`]

if (questionThree === '') {
    alert(userAlert1)
  }
    else if (questionThree === null) {
     alert(userAlert2)
    }
    else if ((String(answerThree.filter(item => item === questionThree.toLowerCase()))) === questionThree.toLowerCase()) {
    points += +10
    alert(`Верно! Вы получаете ${points} баллов!`)
    }    
    else {
            alert(`${fail} Количество баллов: ${points}`)
    }

let questionFour = prompt(`Какого цвета небо?`);
let answerFour = [`голубого`, `голубое`, `блакитне`, `синие`, `синє`];

if (questionFour === '') {
    alert(userAlert1)
   }
    else if (questionFour === null) {
     alert(userAlert2)
    }
    else if ((String(answerFour.filter(item => item === questionFour.toLowerCase()))) === questionFour.toLowerCase()) {
    points += +10
    alert(`Верно! Вы получаете ${points} баллов!`)
    }    
    else {
   alert(`${fail} Количество баллов: ${points}`)
}

let questionFive = String(prompt(`Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.`))
let answerFive = 42
if (questionFive.toLowerCase() == String(answerFive)) {
    points += +10
    alert(`Верно! Вы получаете ${points} баллов!`)
  }
   else if (String(questionFive) === 'null') {
    alert(userAlert2)
  }
   else if (String(questionFive) === '') {
    alert(userAlert1)
  } 
else {
    alert(`${fail} Количество баллов: ${points}`)
  }
  confirm(`Поздравляем ! Врезультате Ваших правильных ответов Вы получаете ${points}/50 баллов! Результат говорит сам за себя!`)