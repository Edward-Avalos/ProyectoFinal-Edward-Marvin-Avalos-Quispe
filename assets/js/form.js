function pagoRealizado() {
  const formName = document.getElementById("name").value;
  const formSurname = document.getElementById("surname").value;
  const formEmail = document.getElementById("email").value;
  if (formName !== "" && formSurname !== "" && formEmail !== "") {
    pagarCompra.innerHTML = "Enviando pago...";
    pagarCompra.classList.add("disabled");
    emailjs.init("3kJGi9Vu55rMQSfSo");
    formPago.addEventListener("submit", function (event) {
      event.preventDefault();
      const serviceID = "service_0z7t0tv";
      const templateID = "template_dcggt4m";
      emailjs.sendForm(serviceID, templateID, this).then(function(response) {
          pagarCompra.classList.add("disabled");
          console.log("Pago enviado!");
          pagoExitoso.style.display = "flex";
          cartContainer.style.display = "none";
          conQueAbono.style.display = "none";
          pagoCompra.style.display = "none";
          dolaresOSoles.style.display = "none";
          precioFinal.style.display = "none";
          window.location = "#pago-exitoso";
        }, function(error) {
          console.log('FAILED...', error);
          pagarCompra.classList.add("disabled");
          console.log("Error al enviar pago");
          pagoExitoso.style.display = "none";
          cartContainer.style.display = "none";
          conQueAbono.style.display = "none";
          pagoCompra.style.display = "none";
          dolaresOSoles.style.display = "none";
          precioFinal.style.display = "none";
          formPago.style.display = "none";
          window.location = "#error-pago";
        }
      );
    });
  }
}
