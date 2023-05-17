
function calcularArea() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var area = (base * altura) / 2;
  var areaRedondeada = area.toFixed(2);

  document.getElementById("resultado").innerHTML = "El área del triángulo es: " + areaRedondeada;
}
