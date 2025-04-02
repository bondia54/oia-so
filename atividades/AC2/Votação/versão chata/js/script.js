function VerificarVoto() {
    idade = parseFloat(document.getElementById('idade').value);
    nacionalidade = (document.getElementById('nacionalidade').value);
    mensagem = "";

    if (idade >= 16 && nacionalidade == "sim" || nacionalidade == "s" || nacionalidade == "S" || nacionalidade == "Sim" || nacionalidade == "SIM") {
        mensagem = "Pode votar (¬‿¬)"
    } else {
        mensagem = "Não pode votar (ノಠ益ಠ)ノ"
    }

    document.getElementById("resposta").innerHTML = mensagem;
}
