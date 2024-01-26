let users = [
	{
	"index": 0,
	"isActive": true,
	"balance": 2226.60,
	"name": "Eugenia Sawyer",
	"gender": "female",
	"phone": "+1 (840) 583-3207",
	"address": "949 John Street, Rose, Puerto Rico, 1857"
	},
	{
	"index": 1,
	"isActive": true,
	"balance": 2613.77,
	"name": "Pauline Gallegos",
	"gender": "female",
	"phone": "+1 (985) 593-3328",
	"address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
	},
	{
	"index": 2,
	"isActive": false,
	"balance": 3976.41,
	"name": "Middleton Chaney",
	"gender": "male",
	"phone": "+1 (995) 591-2478",
	"address": "807 Fleet Walk, Brutus, Arkansas, 9783"
	},
	{
	"index": 3,
	"isActive": true,
	"balance": 1934.58,
	"name": "Burns Poole",
	"gender": "male",
	"phone": "+1 (885) 559-3422",
	"address": "730 Seba Avenue, Osage, Alabama, 6290"
	},
	{
	"index": 4,
	"isActive": true,
	"balance": 3261.65,
	"name": "Mcfadden Horne",
	"gender": "male",
	"phone": "+1 (942) 565-3988",
	"address": "120 Scholes Street, Kirk, Michigan, 1018"
	},
	{
	"index": 5,
	"isActive": false,
	"balance": 1790.56,
	"name": "Suzette Lewis",
	"gender": "female",
	"phone": "+1 (837) 586-3283",
	"address": "314 Dunne Place, Bawcomville, Guam, 9053"
	}
	]

let filterUsersOfBalance = []
for (let i= 0; i<users.length; i++) {
    if (users[i].balance > 2000 ) {
        filterUsersOfBalance = [...filterUsersOfBalance, users[i].phone]
    }
}

console.log(`Телефонні номери користувачів баланс яких більше 2000 доларів: ${filterUsersOfBalance}`)
console.log(`Загальна сума балансу користувачів: $${users.reduce((sum, users) => sum + users.balance, 0).toFixed(2)}`)

let div = document.createElement('div')
let pOne = document.createElement('p')
let pTwo = document.createElement('p')
let pParam = document.createElement('p')

div.innerHTML = `Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів <br><br>`
pOne.innerHTML = `1Телефонні номери користувачів баланс яких більше 2000 доларів: <br> ${filterUsersOfBalance} <br>`
pTwo.innerHTML = `Загальна сума балансу користувачів: $${users.reduce((sum, users) => sum + users.balance, 0).toFixed(2)} <br>`

document.body.appendChild(div)
div.appendChild(pOne)
div.appendChild(pTwo)

pOne.className = `classP`
pTwo.className = `classP`
