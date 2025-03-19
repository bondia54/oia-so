alert('esse site coverterá a temperatura Celsius para o Fahrenheit.')
nome = prompt('digite o seu nome.')
Celsius = parseFloat(prompt('me dê a temperatura desejada em Celsius.'))
Farenheit = (Celsius * 1.8) + 32
alert(`${nome}, a temperatura de ${Celsius}°C em Farenheit é exatamente ${Farenheit}°F.`)