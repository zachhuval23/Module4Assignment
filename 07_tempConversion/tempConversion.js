const convertToCelsius = function convertToCelsius(fahrenheit) {
 const celsius = (fahrenheit - 32) * 5 / 9;
 return celsius;
};

const convertToFahrenheit = function convertToCelsius(celsius) {

const fahrenheit = celsius * 9 / 5 + 32;
return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
