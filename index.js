// prompt user to input Farenheit Temp, it will be convert to Celcius
farenheitTemp = prompt(`Input the Farenheit Temperature and I'll convert it to Celcius.`);
inputFarenTemp = Number(farenheitTemp);

// ConvertToCelius function create to take input and return celcius.
const convertToCelcius = (farenTemp) => {
  celciusTemp = (farenTemp - 32) * (5/9);
  return(celciusTemp);
}

console.log(convertToCelcius(inputFarenTemp));