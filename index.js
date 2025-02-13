function calculate() {
  var produto = document.getElementById("product_value").value;
  var ipi = document.getElementById("ipi").value;
  var frete = document.getElementById("freight_value").value;
  var icmsNF = document.getElementById("icms_nf").value;
  var aliqInt = document.getElementById("aliquota_interestadual").value;

  var icmsCalculado = ((produto + ipi + frete - icmsNF) / 0.795) * aliqInt;
  console.log("Valor do icms fronteira é:" + icmsCalculado);
}
