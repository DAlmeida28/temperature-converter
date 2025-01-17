// prompt user to input Farenheit Temp, it will be convert to Celcius
farenheitTemp = prompt(`Input the Farenheit Temperature and I'll convert it to Celcius.`);
inputFarenTemp = Number(farenheitTemp);

// ConvertToCelius function create to take input and return celcius.
const convertToCelcius = (farenTemp) => {
  celciusTemp = (farenTemp - 32) * (5/9);
  return(celciusTemp);
}

// describeTemperature return message based on user input temp value
const describeTemperature = (inputFarenheitTemp) =>{
  if (inputFarenheitTemp < 32){
    return(`It is very cold`);
  }else if(inputFarenheitTemp < 64){
    return(`It is cold`);
  }else if(inputFarenheitTemp < 86){
    return(`It is warm. `);
  }else if(inputFarenheitTemp < 100){
    return(`it is hot`);
  }else if(inputFarenheitTemp >= 100){
    return(`it is very hot`);
  }
}

//send alert to use with inputed weather in degrees Farenheight, the Celcius converted temperature, and how it feels. 
alert(`You entered it is ${inputFarenTemp} degrees Farenheit. Converted to Celcius that is ${convertToCelcius(inputFarenTemp)}. ${describeTemperature(inputFarenTemp)}`);