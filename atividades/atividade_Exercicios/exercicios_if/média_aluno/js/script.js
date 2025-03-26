function promedio() {
    nota1 = parseFloat(document.getElementById("nota 1").value);
    nota2 = parseFloat(document.getElementById("nota 2").value);
    Promedio = ((nota1 + nota2) / 2).toFixed(1);
    Status = "";

    if (Promedio <= 4.9) {
        Status = "Reprobado";
    } else if (Promedio <= 6.9) {
        Status = "Regular";
    } else if (Promedio <= 7) {
        Status = "Aprobado";
    }

    document.getElementById("respuesta").innerHTML = `Tu promedio es ${Promedio} y estas ${Status}`

}