/*function signature/sample */
function calculateVAT(price) {
  let vat = 0;
  if (price > 0 && typeof price === "number") {
    vat = (price * 7.5) / 100;
    return vat;
  } else {
    console.log("Invalid");
  }
}

const totalVat = calculateVAT("foo");
console.log(totalVat);
