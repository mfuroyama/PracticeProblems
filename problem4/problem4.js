var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var fahrenheitValue = document.getElementById('fahrenheit-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    console.log(celsiusValue);

    fahrenheitValue.innerHTML = 'Your answer goes here';
}

button.onclick = function() {
    convert(celsiusInput.value);
}