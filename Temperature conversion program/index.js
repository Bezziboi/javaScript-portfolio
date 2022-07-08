let tempBtn = document.getElementById("tempBtn");
let tempInput = document.getElementById("tempInput");
let celsiusBtn = document.getElementById("celsiusBtn");
let fahrenheitBtn = document.getElementById("fahrenheitBtn");
let tempLabel = document.getElementById("tempLabel");

tempBtn.onclick = function() {
    let temp;
    if(celsiusBtn.checked) {
        temp = tempInput.value;
        temp = Number(temp);
        temp = toCelsius(temp);
        tempLabel.innerHTML = temp + "°C";
    }
    else if(fahrenheitBtn.checked) {
        temp = tempInput.value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        tempLabel.innerHTML = temp + "°F";
    }
    else {
        tempLabel.innerHTML = "Select a unit"
    }
} 

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}