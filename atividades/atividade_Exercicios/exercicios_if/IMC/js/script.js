function imc() {
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    Imc = (peso / (altura * altura)).toFixed(1);
    mensagem = ""

    if (Imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (Imc <= 24.9) {
        mensagem = "Peso normal";
    } else if (Imc <= 29.9) {
        mensagem = "Sobrepeso";
    } else if (Imc <= 34.9) {
        mensagem = "Obesidade I";
    } else if (Imc <= 39.9) {
        mensagem = "Obesidade II";
    } else {
        mensagem = "Obesidade III";
    }

    document.getElementById("IMC").innerHTML = `Tu IMC es ${Imc} y tu estas en ${mensagem}`
}