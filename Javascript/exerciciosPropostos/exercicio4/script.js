function contar(){
    let valor = document.getElementById("inicioNumber")
    let fim = document.getElementById("fimNumber")
    let passo = document.getElementById("passoNumber")
    let res = (document.getElementById("res"))
    
    if(valor.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossivel Contar: "
        alert("[ERRO] Faltam Dados")
    }else{
        v = Number(valor.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            alert("Passo Inválido! Considerando passo 1")
            p = 1
        }
        res.innerHTML = "Contando: "
        if(v < f){ // Contagem Crescente
            while(v <= f){
                res.innerHTML += `${v} \u{1F449}` 
                v += p
            }
        }else{ // Contagem Decrescente
            for(let i = 1; v >= f; v -= p){
                res.innerHTML += `${v} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}