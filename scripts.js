const inputPrimeiroNome = document.querySelector("#input-primeiro-nome")
const inputSegundoNome = document.querySelector("#input-segundo-nome")
const inputEmail = document.querySelector(".input-email")
const textarea = document.querySelector("#textarea")
const checkbox = document.querySelector(".input-aceito-contato")
const labelInquerito = document.querySelector("#label-inquerito")
const inputInquerito = document.querySelector("#input-inquerito")
const labelsuporte = document.querySelector("#label-suporte")
const inputSuport = document.querySelector("#input-suporte")

const mensagemAlertaNome = document.querySelector(".paragrafo-alerta-nome")
const mensagemAlertaSobrenome = document.querySelector(".paragrafo-alerta-sobrenome")
const mensagemAlertaEmail = document.querySelector(".paragrafo-alerta-email")
const mensagemAlertaConsulta = document.querySelector(".paragrafo-alerta-consulta")
const mensagemAlertaTextarea = document.querySelector(".paragrafo-alerta-textarea")
const mensagemAlertaCheckbox = document.querySelector(".paragrafo-alerta-checkbox")

function inputNomeVasio(){
    
    if(inputPrimeiroNome.value.length < 3){
        inputPrimeiroNome.style.border = "1px solid #D94747";
        mensagemAlertaNome.style.display = "block"

    } else{
        inputPrimeiroNome.style.border = "1px solid #86A2A5";
        mensagemAlertaNome.style.display = "none"
    }
}

function inputSobrenomeVasio(){

    if(inputSegundoNome.value.length < 3){
        inputSegundoNome.style.border = "1px solid #D94747";
        mensagemAlertaSobrenome.style.display = "block"

    } else{
        inputSegundoNome.style.border = "1px solid #86A2A5";
        mensagemAlertaSobrenome.style.display = "none"
    }
}

function inputEmailVasio(){

    if(inputEmail.value.length < 3){
        inputEmail.style.border = "1px solid #D94747";
        mensagemAlertaEmail.style.display = "block"

    } else{
        inputEmail.style.border = "1px solid #86A2A5";
        mensagemAlertaEmail.style.display = "none"
    }
}

function inputTextareaVasio(){

    if(textarea.value.length < 3){
        textarea.style.border = "1px solid #D94747";
        mensagemAlertaTextarea.style.display = "block"

    } else{
        textarea.style.border = "1px solid #86A2A5";
        mensagemAlertaTextarea.style.display = "none"
    }
}

function checkboxSelecionado(){

    if(checkbox.checked){
        mensagemAlertaCheckbox.style.display = "none"
    } else {
        mensagemAlertaCheckbox.style.display = "block"
    }
}

let verificarConsulta = ""

function consultaSelecionada(){
    verificarConsulta = "selecionado"

    mensagemAlertaConsulta.style.display = "none"

    if(inputSuport.checked){
        labelsuporte.style.background = "#E0F1E8"
    } else {
        labelsuporte.style.background = "#FFF"
    }
    
    if(inputInquerito.checked){
        labelInquerito.style.background = "#E0F1E8"
    } else {
        labelInquerito.style.background = "#FFF"
    }
}

function verificarTudo(){

    if(verificarConsulta === "selecionado"){
        mensagemAlertaConsulta.style.display = "none"
    } else {
        mensagemAlertaConsulta.style.display = "block"
    }

    checkboxSelecionado()
    inputNomeVasio()
    inputSobrenomeVasio()
    inputEmailVasio()
    inputTextareaVasio()
}







