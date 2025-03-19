alert('esse é um site para calcular a Média Trimestral (AT) do aluno');
nome = prompt('digite o nome do aluno.');
AC = parseFloat(prompt(`Digite a nota de Avaliações Contínuas (AC) de ${nome}`));
AT = parseFloat(prompt(`Digite a nota de Avaliação Trimestral (AT) de ${nome}`));
AGH = parseFloat(prompt(`digite a nota de Avaliação Geral (AG) de ${nome}`));
MT = AC * 3 + AT * 5 + AGH * 2 / 10
alert(`A Média Trimestral de ${nome} é: ${MT}`);