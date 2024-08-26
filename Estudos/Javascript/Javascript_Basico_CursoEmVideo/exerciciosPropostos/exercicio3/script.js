function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(Fano.value.length == 0 || Fano.value.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        res.innerHTML = `Idade calculada = ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebehomem.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultohomem.jpg')
            }else{
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'bebemulher.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemmulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adultomulher.jpg')
            }else{
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        img.style.width = '10em'
        img.style.height = '10em'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)

    }
}

