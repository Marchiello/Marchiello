function carregar(){
    
    var msg = document.getElementById("msg")
    var img = document.getElementById('imagem')
  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#fbdd95'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#1b7ccb'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#1e2b3b'
    }

}

