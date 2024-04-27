const userTemperatureFahrenheit = Number(prompt('Zadejte prosim teplotu ve Fahrenheitech'))
const userTemperatureCelsius = (5*(userTemperatureFahrenheit-32))/9

document.body.innerHTML = 'Teplota má být ' + userTemperatureCelsius + ' stupňů Celsia'