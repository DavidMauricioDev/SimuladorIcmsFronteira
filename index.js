function calculate() {
  let produto = document.getElementById("product_value").value;
  let ipi = document.getElementById("ipi").value;
  let frete = document.getElementById("freight_value").value;
  let icmsNF = document.getElementById("icms_nf").value;
  let aliqInt = document.getElementById("aliquota_interestadual").value;

  let icmsCalculado = ((produto + ipi + frete - icmsNF) / 0.795) * aliqInt;
  console.log("Valor do icms fronteira é:" + icmsCalculado);
}
