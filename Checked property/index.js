
document.getElementById("submitBtn").onclick = function() {
    
    const checkBox = document.getElementById("checkBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("masterBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const subscribeLabel = document.getElementById("subscribeLabel");
    const paymentLabel = document.getElementById("paymentLabel");

    if(checkBox.checked == true) {
        subscribeLabel.innerHTML = "You are subscribed!";
    }
    else {
        subscribeLabel.innerHTML = "You are Not subscribed!";
    }

    if(visaBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a Visa!";
    }
    else if(masterBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a MasterCard!";
    }
    else if(paypalBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a PayPal!";
    }
    else {
        paymentLabel.innerHTML = "You must select a payment type!";
    }
}