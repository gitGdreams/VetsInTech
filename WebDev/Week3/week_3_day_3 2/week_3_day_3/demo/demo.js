function changeName() {
  var usernameInput = document.getElementById("usernameInput");
  var usernameSpan = document.getElementById("username");

  var usernameInputValue = usernameInput.value;

  usernameSpan.innerText = usernameInputValue;
  usernameInput.value = "";
}

function calculateTax() {
  var subtotalInput = document.getElementById("subtotal");
  var subtotalValue = subtotalInput.value;

  var taxAmountValue = subtotalValue * 0.18;

  var taxAmountSpan = document.getElementById("taxAmount");
  taxAmountSpan.innerText = taxAmountValue;
  subtotalInput.value = "";
}

function calculateExtra() {
var valetTip = document.getElementById("valet").value;
var gasCost = document.getElementById("gas").value;

var totalExtraCost = parseFloat(valetTip) + parseFloat(gasCost);

document.getElementById("extraCosts").innerText = totalExtraCost;
}