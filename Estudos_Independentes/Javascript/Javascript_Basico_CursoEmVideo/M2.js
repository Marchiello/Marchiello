// Comentários

// tipo 1
/* tipo 2 */

// ----------------------==----------==---

/*
====================== Data Types:

* Number
    - Infinity
    - NaN(Not a Number)
* String
* Bool
* Null
* Unfefined
* Object
    - Array
* Function    

====================== Tratamento de Dados

// Converter a variavel em numero

        var n1 = Number.parseInt(prompt("Digite um numero"))
        var n2 = Number.parseInt(prompt("Digite outro numero"))

        /*
        var n1 = Number.parseFloat(prompt("Digite um numero"))
        var n2 = Number.parseFloat(prompt("Digite outro numero"))

        ou 

        var n1 = Number(prompt("Digite um numero"))
        var n2 = Number(prompt("Digite outro numero"))
        
        ========= Conversão de Numero -> String

        String(n)
        n.toString()

        -
        -

        ======== Formatando Strings

        var a = "sim"

        'eu sou s' -> eu sou a(Não faz interpolação)

        'eu sou' + a -> eu sou sim(Faz concatenação)

        `Estou aprendendo ${a}` -< estou aprendendo sim
        
        a.length -> Mostra tamanho(Numero de letras) da string

        a.toUpperCase() -> Tudo para maiusculo

        a.toLowerCase() -> Tudo para minusculo

    =   =========== Formatando Numeros

        n1 = 1545.4

        n1.toFixed(2) -> 1545.50

        n1.toFixed(2).replace('.', ',') -> 1545,50

        n1.toLocaleString('pt-BR', {style: 'currency, currency: 'BRL'}) -> R$1545,50

        n1.toLocaleString('pt-BR', {style: 'currency, currency: 'USD'}) -> US$1545,50

        */
        
        var s = n1+n2

        /* (number + number) para adição 
           (string + string) para concatenação*/ 

  