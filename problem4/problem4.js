var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');
var kelvinValue = document.getElementById('kelvin-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    console.log(celsiusValue);

    if (isNaN(celsiusValue)) {
        return kelvinValue.innerHTML = 'Error!';
    }

    kelvinValue.innerHTML = (celsiusValue*1)+273.15;

}

button.onclick = function() {
    convert(celsiusInput.value);
}