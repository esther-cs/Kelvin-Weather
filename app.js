const kelvin = 293;
// The forecast today is 293 Kelvin
var celsius = kelvin-273;
//Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius*(9/5)+32;
//Calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);
//Round down the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
