var button = document.getElementById('convert-button');
var celsiusInput = document.getElementById('celsius-value');

// You can test to see whether or not a radio button is selected using the `.checked` value. So
// for example, if you want to see if the `fahrenheitRadio` radio button is selected, you can 
// use something like this:
//   if (fahrenheitRadio.checked === true) {
//       ....
//   }
var fahrenheitRadio = document.getElementById('fahrenheit-radio');
var kelvinRadio = document.getElementById('kelvin-radio');

var convertedValue = document.getElementById('converted-value');

// ==== Implement your code here! ====
function convert(celsiusValue) {
    // Here, check to see which radio button is selected, then use the appropriate conversion
    // formula, and `return` that value.
}
    
button.onclick = function() {
    // Don't forget to re-add the check for a non-numeric "celsiusInput.value" here!

    var value = convert(celsiusInput.value);

    convertedValue.innerHTML = value;
}