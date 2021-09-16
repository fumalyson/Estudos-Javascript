var hora = 2
console.log(`Agora sao exatamente ${hora} horas.`)


if (hora > 6  && hora < 12){
    console.log(`Esta de dia`)
} else if (hora > 13 && hora < 19){
    console.log(`Esta de Tarde`)
} else if (hora > 18 && hora < 24){
    console.log(`Esta de noite`)   
} else if (hora < 6){
    console.log(`Esta de madrugada`)
}
