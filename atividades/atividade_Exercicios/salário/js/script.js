function salarios() {
    mensagemBruto = ""
    //mensagem vazia//

    valorDaHora = parseFloat(document.getElementById("tarifa por hora").value);
    horasTrabalhadas = parseFloat(document.getElementById("numero de horas").value);
    salarioBruto = (valorDaHora * horasTrabalhadas);
    //valor do salário bruto//

    mensagemBruto = `tu salario bruto es ${salarioBruto}`;
    document.getElementById("salario bruto").innerHTML = mensagemBruto;
    //mensagem com a indicação do salario bruto//

    mensagemNeto = "";
    //mensagem vazia//

    if (salarioBruto <= 5000) {
        imposto = salarioBruto * 0.15;
        salarioNeto = salarioBruto - imposto;
        mensagemNeto = `tu salario neto es ${salarioNeto}`;
    }
    //Salario liquido com 15%//

    if (salarioBruto > 5000) {
        imposto = salarioBruto * 0.22;
        salarioNeto = salarioBruto - imposto;
        mensagemNeto = `tu salario neto es ${salarioNeto}`;
    }
    //salario liquido com 22%//

    document.getElementById("salario neto").innerHTML = mensagemNeto;
    //mensagem com a indicação do salario líquido//
}
