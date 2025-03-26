function salarios() {
    mensagemBruto = "";
    //mensagem vazia//

    valorDaHora = parseFloat(document.getElementById("tarifa por hora").value);
    horasTrabalhadas = parseFloat(document.getElementById("numero de horas").value);
    salarioBruto = (valorDaHora * horasTrabalhadas).toFixed(2);
    //valor do salário bruto//

    mensagemBruto = `tu salario bruto es R$${salarioBruto}`;
    document.getElementById("salario bruto").innerHTML = mensagemBruto;
    //mensagem com a indicação do salario bruto//

    mensagemNeto = "";
    //mensagem vazia//

    if (salarioBruto <= 1500) {
        imposto = 0;
    } else if (salarioBruto <= 3000) {
        imposto = salarioBruto * 0.1;
    } else if (salarioBruto <= 5000) {
        imposto = salarioBruto * 0.15;
    } else if (salarioBruto <= 10000) {
        imposto = salarioBruto * 0.22;
    } else {
        imposto = salarioBruto * 0.27;
    }
    //calculo do salario neto//

    salarioNeto = salarioBruto - imposto.toFixed(2);
    mensagemNeto = `tu salario neto es R$${salarioNeto}`;
    document.getElementById("salario neto").innerHTML = mensagemNeto;
    //mensagem com a indicação do salario líquido//
}
