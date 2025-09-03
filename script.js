function calculate() {
    const license = parseFloat(document.getElementById("license").value);
    const payment = parseInt(document.getElementById("payment").value) * 4; // max 20

    let paymentScore = 0;
    document.querySelectorAll(".payment-method:checked").forEach(cb => paymentScore += parseFloat(cb.value));

    let gameScore = 0;
    document.querySelectorAll(".game-type:checked").forEach(cb => gameScore += parseFloat(cb.value));

    let bonusScore = 0;
    document.querySelectorAll(".bonus-type:checked").forEach(cb => bonusScore += parseFloat(cb.value));

    const total = license + payment + paymentScore + gameScore + bonusScore;

    let status = "";
    if (total >= 80) status = "✅ Trusted Brand";
    else if (total >= 60) status = "⚠️ Average";
    else status = "❌ Risky Brand";

    document.getElementById("result").innerHTML =
        `<strong>Score:</strong> ${total}/100 <br> <strong>Status:</strong> ${status}`;
}