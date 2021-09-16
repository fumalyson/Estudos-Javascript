let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
    
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}


function adicionar() { // !inLista o ! quer dizer NAO
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        
        let mediad = media.toFixed(2)

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p> Maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os numeros informados resulta em ${soma}</p>`
        res.innerHTML += `<p>A media dos valores informados resulta em ${mediad}</p>`
    }
    
}