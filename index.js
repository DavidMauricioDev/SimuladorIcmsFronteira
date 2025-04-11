function calculate() {
  let produto = document.getElementById("product_value").value;
  let ipi = document.getElementById("ipi").value;
  let frete = document.getElementById("freight_value").value;
  let icmsNF = document.getElementById("icms_nf").value;
  let aliqInt = document.getElementById("aliquota_interestadual").value;
  let iva = document.getElementById("indice_valor_agregado").value;
  
  let icmsCalculado = ((produto + ipi + frete - icmsNF) / 0.795) * iva;
  
  document.querySelector('.result_box').style.display = 'block'
  document.querySelector('.result_box_value').innerHTML = icmsCalculado
}
