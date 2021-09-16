function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 9
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >=0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background = "#FFF68F"
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = "#CD6600"
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = "#2F4F4F"
    }

}
