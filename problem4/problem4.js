var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var fahrenheitValue = document.getElementById('fahrenheit-value');
var kelvinValue = document.getElementById('kelvin-value');
var radio = document.getElementById('fahrenheit-value');
var radio = document.getElementById('kelvin-value');

// ==== Implement your code here! ====
function convert(celsiusValue) 
    
    
button.onclick = function() {
    convert(celsiusInput.value);
}