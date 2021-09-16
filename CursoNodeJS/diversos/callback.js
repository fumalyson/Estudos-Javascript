function soma(x, callback) {
    return setTimeout(()=>{
      return callback (null, x + 5000)
    },3000)
    
}
//callback function
function resSoma(error, resultado) {
    if(error) throw error
    console.log(resultado)
}
soma(200, resSoma)