// accountInfo
// charInfo

type AccountInfo = {
    id: number
    name: string
    email?: string
 
}

const account: AccountInfo = {
    id: 123,
    name: 'Alyson',
}

type charInfo = {
    nick: string
    level: number
}
const char: charInfo = {
    nick: 'fumalyson',
    level: 999
}
//intersection, junta os dois types LOL 
type PlayeInfo = AccountInfo & charInfo

const player: PlayeInfo = {
    id: 2,
    name:'Alyson F',
    email:'alysonbergantini@gmail.com',
    nick:'fumalyson',
    level: 999
}
