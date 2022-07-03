let x;
let z;
let y;

document.getElementById("rollBtn").onclick = function() {
    x = Math.floor(Math.random() * 20) + 1;
    document.getElementById("xLabel").innerHTML = x;

    z = Math.floor(Math.random() * 20) + 1;
    document.getElementById("zLabel").innerHTML = z;

    y = Math.floor(Math.random() * 20) + 1;
    document.getElementById("yLabel").innerHTML = y;
}
