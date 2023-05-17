
    function calcularArea() {
      var base = parseFloat(document.getElementById("base").value);
      var altura = parseFloat(document.getElementById("altura").value);

      const spinner = document.querySelector("#spinner");
    spinner.innerHTML = `<img src="spimner.gif">`;
    spinner.style.display = "block";

    setTimeout(() => {
        document.querySelector("#resultado").textContent = `El área del triángulo es: ${area}`;
        spinner.style.display = "none";
    }, 1000);
    }
