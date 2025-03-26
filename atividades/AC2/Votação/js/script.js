mensagem = "";

function idade() {
    Idade = parseFloat(document.getElementById("idade").value);
    nacionalidade = document.getElementById("voto").checked;

    if (Idade >= 16 && nacionalidade) {
        mensagem = "Voto Aceito";
    } else {
        mensagem = "Voto Negado";
    }

    document.getElementById("confirmacao").innerHTML = mensagem;
}


