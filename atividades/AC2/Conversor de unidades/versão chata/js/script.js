function Converter() {
    medida = parseFloat(document.getElementById('medida').value);
    unidades = (document.getElementById('unidades').value);
    resposta1 = "";
    resposta2 = "";

    if (unidades == "centimetro" || unidades == "cm" || unidades == "centímetros" || unidades == "centímetro" || unidades == "centimetros") {
        resposta2 = `${medida / 100} metros`;
        resposta1 = `${medida / 100000} quilômetros`;
    } else if (unidades == "m" || unidades == "metro" || unidades == "metros") {
        resposta2 = `${medida * 100} centímetros`;
        resposta1 = `${medida / 1000} quilômetros`;
    } else if (unidades == "km" || unidades == "quilometro" || unidades == "quilometros" || unidades == "quilômetro" || unidades == "quilômetros") {
        resposta1 = `${medida * 100000} centímetros`;
        resposta2 = `${medida * 1000} metros`;
    }

    document.getElementById("resposta1").innerHTML = resposta1;
    document.getElementById("resposta2").innerHTML = resposta2;
}