class UserAccount {
    name: string
    age: Number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    logDetails(): void{
        console.log(`The player ${this.name} have ${this.age} years old`)
    }
}

class CharAccount extends UserAccount {
    nick: string
    level: number

    constructor(name: string, age: number, nick: string, level: number){
        super(name, age)

        this.nick = nick
        this.level = level

    }
    charDetails(): void{
        console.log(`The player ${this.name} have ${this.age} years old your nickname is ${this.nick} and have level ${this.level}`)
    }
}

const alys = new UserAccount('Alyson', 18)
console.log(alys)
console.log(alys.age)
alys.logDetails()

const felipe = new CharAccount('Felipe', 23,'paetzoldfelipe', 8001)

felipe.charDetails()
