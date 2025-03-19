alert('o site calculará os km/l que seu carro faz');
KmInicial = parseFloat(prompt('digite o quilômetro inicial que aparece no painel do seu carro.'));
KmFinal = parseFloat(prompt('digite o quilômetro final que aparece no painel do seu carro.'))
LReabastecido = parseFloat(prompt('digite quantos litros você reabasteceu.'));
KmRodados = KmFinal - KmInicial;
MediaDoCarro = KmRodados / LReabastecido;
alert(`A média de consumo do seu carro é de: ${MediaDoCarro.tofixed(2)}km/L`);