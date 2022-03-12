function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if(minutos < 10){
        minutos = '0' + minutos
    }
    if(hora < 10){
        hora = '0' + hora
    }
    

    msg.innerHTML = `Agora são ${hora}:${minutos}<br/>`
    if (hora >= 0  && hora < 12){
        //bom dia
        msg.innerHTML = msg.innerHTML + 'Bom Dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F0F5CF'
        document.querySelector('header#header').style.color = '#4B3500'
        document.querySelector('footer#footer').style.color = '#4B3500'
    
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        msg.innerHTML = msg.innerHTML + 'Boa Tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#CA6318'
    } else{
        //boa noite
        msg.innerHTML = msg.innerHTML + 'Boa Noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#041117'
    }
}