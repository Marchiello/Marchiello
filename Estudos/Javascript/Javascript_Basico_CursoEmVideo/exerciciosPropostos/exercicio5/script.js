function gerarTabuada(){
    let numero = document.getElementById("numTabuada")
    let tabuada = document.getElementById("tabuada")

    if(numero.value.length == 0){
        alert("Insira um valor!")
    }else{
        tabuada.innerHTML = ""
        let n = Number(numero.value)
        for(let multiplo = 1; multiplo <= 10; multiplo++){
            let item = document.createElement('option')
            item.text = `${numero.value} x ${multiplo} = ${n*multiplo}`
            item.value = `tab${multiplo}`
            tabuada.appendChild(item)
        }
    }

   
}