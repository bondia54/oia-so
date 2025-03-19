function comprobarEdad() {
    idade = parseInt(document.getElementById("edad").value);
    mensagem = "";

    if (idade >= 12) {
        mensagem = "Acceso Concedido!!!( ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ )✌";
    }
    document.getElementById("resposta").innerHTML = mensagem;

    if (idade < 12) {
        mensagem = "(ง︡'-'︠)ง  Acceso Denegado.";
    }
    document.getElementById("resposta").innerHTML = mensagem;
}