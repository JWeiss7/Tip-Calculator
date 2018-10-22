function tipCalculation() {
    var billTotal = document.getElementById("enterAmount").value;
    var tipPercentage = document.getElementById("dropDown").value;
    var numPeople = document.getElementById("peopleNumber").value;

    if (billTotal === "" || tipPercentage == 0) {
        alert("Please enter values");
        return;
    }
    if (numPeople === "" || numPeople == 1) {
        numPeople = 1;
    }
    var total = (billTotal * tipPercentage) / numPeople;
    var tipBill = (billTotal / numPeople) + total;

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    tipBill = tipBill.toFixed(2);
    alert("Tip is $" + total + " per person" + "\n" + "Bill with tip is $" + tipBill + " per person");

    document.getElementById("compute").onclick = function () {
        tipCalculation();
    };
}
