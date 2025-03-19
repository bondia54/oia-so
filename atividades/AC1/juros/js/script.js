alert('esse site calculará o seu juros simples, lhe dando o valor que deve ser paga (montante).')
nome = prompt('digite o seu nome.')
Capital = parseFloat(prompt('digite a capital inicial:'))
Taxa = parseFloat(prompt('agora, apresente a taxa imposta, apenas a parte numérica da porcentagem.'))
Tempo = parseFloat(prompt('me dê o tempo, em anos:'))
Juros = Capital * (Taxa / 100) * Tempo
Montante = Juros + Capital
alert(`${nome}, o montante a ser pago é de: R$${Montante}`)
