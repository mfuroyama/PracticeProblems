var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var fahrenheitRadio = document.getElementById('fahrenheit-radio');
var kelvinRadio = document.getElementById('kelvin-radio');
var convertedValue = document.getElementById('converted-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    
    if (isNaN(celsiusValue)) {
        return convertedValue.innerHTML = 'Error!'
    }

    if (fahrenheitRadio.checked === true) {
        return convertedValue.innerHTML = (celsiusValue*9/5)+32;
    }

    if (kelvinRadio.checked === true) {
        return convertedValue.innerHTML = (celsiusValue*1)+273.15;
    }
}
    
button.onclick = function() {

    var value = convert(celsiusInput.value);

    convertedValue.innerHTML = value;
}