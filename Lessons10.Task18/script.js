class Human {
    constructor(names, age) {
      this.names = names
      this.age = age 
    }
    infoHuman() {
      return console.log(`Human name: ${this.names}, Human age: ${this.age}`)
    }
}

class Automobile {
  owner;
    constructor(vendor, model, year, registerNumber) {
      this.vendor = vendor
      this.model = model
      this.year = year
      this.registerNumber = registerNumber
    }

    set owner(human) {
        this.owner = human;
    };

    carInfo() {
      
      console.log(this.owner.age > 18 ? `Автомобіль марки ${this.vendor} ${this.model}, ${this.year} року випуску з реєстраційним номером ${this.registerNumber}` : `Нажаль вік майбутнього власника меньшe 18, а саме ${this.owner.age}`)
      this.owner.infoHuman();
      console.log(`-----------------------------------------------------------------------------------------------------------------------------------------------`)
    }
}

const personHumanA = new Human(`Anna`, 19)
const personHumanB = new Human(`Bogdan`, 35)
const personHumanC = new Human(`Yurii`, 15)
const personHumanD = new Human(`Olga`, 31)
const personHumanE = new Human(`Pavlo`, 17)

const mazda = new Automobile(`Mazda`, `CR-7`, 2019, `AA2323BH`, `Vadym`, 22)
mazda.owner = personHumanA
const vw = new Automobile(`VW`, `Passat`, 2015, `AX4503HI`, `Yurii`, 15)
vw.owner = personHumanB
const ford = new Automobile(`Ford`, `Focus`, 2021, `BC3712CB`)
ford.owner = personHumanC
const opel = new Automobile(`Opel`, `Omega`, 2009, `BI4511AE`)
opel.owner = personHumanD
const audi = new Automobile(`Audi`, `Q5`, 2015, `AT2693BC`)
audi.owner = personHumanE

mazda.carInfo();
vw.carInfo();
ford.carInfo();
opel.carInfo();
audi.carInfo();
