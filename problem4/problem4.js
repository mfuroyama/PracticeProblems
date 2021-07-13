var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var fahrenheitValue = document.getElementById('fahrenheit-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    console.log(celsiusValue);

    if (isNaN(celsiusValue)) {
        return fahrenheitValue.innerHTML = 'Error!';
    }

    fahrenheitValue.innerHTML = (celsiusValue*1)+273.15;
}

button.onclick = function() {
    convert(celsiusInput.value);
}