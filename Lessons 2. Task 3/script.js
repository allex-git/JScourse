const userName = prompt("Enter your first name:")
const userSurname = prompt("Enter your last name:")

let email = prompt("Enter your email:")
let yearOfBirth = prompt("Enter year of birth:")
let toHTML = document.querySelector("#bodyJS")

// Виводимо ім'я та прізвище без пробілів на початку та в кінці рядка.
let fullName = userName.trim() + ' ' + userSurname.trim()

//Шукаємо  пробіли в рядку і видаляємо їх та приводимо до нижнього регістру.
email = email.replaceAll(" ", "").toLowerCase()

//Перевіряємо email на наявність "@"
let checkEmail
if (email.includes("@")) {checkEmail = email}
if (email.startsWith('@')) {checkEmail = "not valid email <b>" + email + "</b> (symbol @  find in first place)"}
if (email.endsWith('@')) {checkEmail = "not valid email <b>" + email + "</b>  (symbol @  find in last place)"}
if (!email.includes("@")) {checkEmail = "not valid email <b>" + email + "</b>  (symbol @ not exist)"}

// Шукаємо  пробіли в рядку і видаляємо їх, вираховуємо вік користувача.
let age = (new Date()).getFullYear() - (yearOfBirth.replaceAll(" ", ""))

//Вмводимо результат в HTML (<body>)
toHTML.innerHTML ="<ul> <li> Full name: " + fullName + "</li> <li> Email: " + checkEmail + "</li> <li> Age: " + age + "</li> </ul>"
