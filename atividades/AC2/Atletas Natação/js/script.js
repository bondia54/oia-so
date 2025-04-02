function classificar() {
    idade = parseFloat(document.getElementById("atleta").value);
    mensagem = "";

    if (idade >= 18) {
        mensagem = "Classificação: Adulto";
    } else if (idade >= 14) {
        mensagem = "Classificação: Juvenil B";
    } else if (idade >= 11) {
        mensagem = "Classificação: Juvenil A";
    } else if (idade >= 8) {
        mensagem = "Classificação: Infantil";
    } else if (idade >= 1) {
        mensagem = "Classificação: mirim";
    } else {
        mensagem = "Classificação: unknown";
    }

    document.getElementById("resposta").innerHTML = mensagem;
} 