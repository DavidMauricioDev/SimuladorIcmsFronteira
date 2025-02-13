function calculate() {
  var produto = document.getElementById("PRODUTO").value;
  var ipi = document.getElementById("ipi").value;
  var frete = document.getElementById("frete").value;
  var icmsNF = document.getElementById("icmsNF").value;
  var aliqInt = document.getElementById("aliqInt").value;

  var icmsCalculado = ((produto + ipi + frete - icmsNF) / 0.795) * aliqInt;
  console.log("Valor do icms fronteira é:" + icmsCalculado);
}
