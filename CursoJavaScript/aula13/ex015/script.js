function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    
    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!!')

    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (formSex[0].checked) {
            genero = "Masculino"
            
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if(formSex[1].checked) {
            genero = "Feminino"
            
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos pessoa de genero ${genero} com ${idade} anos de idade.`
    res.appendChild(img)
    
    } 
}