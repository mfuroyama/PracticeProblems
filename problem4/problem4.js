var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var fahrenheitValue = document.getElementById('fahrenheit-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    console.log(celsiusValue);

    fahrenheitValue.innerHTML = (celsiusValue*9/5)+32;

    if (isNaN(celsiusValue)) {
        return fahrenheitValue.innerHTML = 'Error!';
    }
}

button.onclick = function() {
    convert(celsiusInput.value);
}