alert('esse site calculará a área de um retângulo. Lembre-se que estamos lidando com centímetros.')
nome = prompt('digite o seu nome.')
Largura = parseFloat(prompt('Vamos começar. Digite a largura, em centímetros, do retângulo proposto:'))
Altura = parseFloat(prompt('Agora, digite a altura, em centímetros, do mesmo retângulo:'))
Area = Largura * Altura
alert(`${nome}, área do seu retângulo é exatamente ${Area}cm².`)
