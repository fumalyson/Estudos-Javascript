type Uid = number | String // atalho para denominar os types.

//sem type alias
function logDetails(uid:number | string, item:string) {
    console.log(`A product with ${uid} has a tittle as ${item}`)
    
}
//com type alias
function logInfo(uid:Uid, user:string) {
    console.log(`An user with ${uid} has a name as ${user}.`)

}

//type alias vvv
type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'IOS' | 'Android'

function renderPlataform(plataform:Plataform) {
    return plataform
    
}

renderPlataform('IOS')

logDetails(123,"sapato")
logDetails("123", "sapato")

logDetails(123,"Alyson")
logDetails("123", "Alyson")