let hour = Number(prompt('Введіть кількість годин:'))
const secondsInHours = () => hour *3600
let result = secondsInHours()

if (hour <= 0) {
    alert(`Серйозно?`)
    }
else if (hour === 1) {
    alert(`В ${hour} годині ${result} секунд`)
    }
else if (isNaN(hour)) {
    alert(`Ви ввели не число`)
    }
else { alert(`В ${hour} годинах ${result} секунд`)
    }
