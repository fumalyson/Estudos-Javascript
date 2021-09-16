// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo',"foo",`foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0
// array ('type'[])
let items: string[]
items = ['alyson', 'felipe']

let values: Array<number>
values = [1,2,3]

//tuple (tipo um array, mas vc sabe exatamente quanto e quais itens tem)
let title: [number, string, string]
tittle: [1,'alyson','felipe']

//enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NAO E VIAVEL!
let coisa: any
coisa = [1]

//void
function logger(): void {
    console.log('foo')
}
// null | undefined
type Bla = string | undefined

//never (nunca vai retornar)
function error(): never{
    throw new Error('error')

}
//object
let cart: object
cart = {
    key: 'fi'
}
