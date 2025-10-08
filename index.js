var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var SetaDireita = window.document.getElementById("seta-direita")

getelem

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:75px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:felx"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"


}