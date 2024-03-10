function calculate() {

  // get value from subtotal, store in var
var subTotal = document.getElementById('subtotal').value;
  // get value from taxPercentage, store in var
var taxPercent = document.getElementById('taxPercentage').value;
  // get value from tipPercent, store in var
var tipPercent = document.getElementById('tipPercentage').value;
  // convert string values into parsefloat for
  // subtotal
  subTotal = parseFloat(subTotal);
  // tax
  taxPercent = parseFloat(taxPercent);
  // tip
  tipPercent = parseFloat(tipPercent);

  // update taxPercentage by dividing by 100
  taxPercent *= .01;
  // update tipPerncent by dividing by 100
  tipPercent *= .01;

  // calculate the tipAmount;
  var tipAmount = subTotal * tipPercent;
  // tipAmount = subtotal * tipPercent
  var taxAmount = subTotal * taxPercent;
  // taxAmount = subtotal * taxPercent

  // total amount = subtotal + tipAmount + taxAmount
  var totalAmount = subTotal + tipAmount + taxAmount;

  // update the tip amount h2
    // select tip span using id: calculatedTipAmmount, store in var
    document.getElementById('calculatedTipAmount').innerText = tipAmount;
    // update element's innerText with tipAmount variable above
  
  // update total amount h2
    // select tip span using id: totalAmount, store in var
    document.getElementById('totalAmount').innerText = totalAmount;
    // update element's innerText with totalAmount variable above




}
