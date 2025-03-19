function agregar() {
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    res = n1 + n2;
    document.getElementById("resposta").innerHTML = `La suma es ${res}`;
}

function sustraer() {
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    res = n1 - n2;
    document.getElementById("resposta").innerHTML = `La resta es ${res}`;
}

function multiplicar() {
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    res = n1 * n2;
    document.getElementById("resposta").innerHTML = `La multiplicación es ${res}`;
}

function dividir() {
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    res = n1 / n2;
    document.getElementById("resposta").innerHTML = `La divisió es ${res}`;
}
