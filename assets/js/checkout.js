const cartContainer = document.getElementById("carrito");
const totalContainer = document.getElementById("total-container");
const retirosLocal = document.getElementById("retiros-local");
const insertTotalCart = document.getElementById("total-cart");
const conQueAbono = document.getElementById("con-que");
const dolaresOSoles = document.getElementById("soles-dolares");
const precioFinal = document.getElementById("precio-final");
const pagoCompra = document.getElementById("pago-compra");
const compraContainer = document.getElementById("compra-price");
const emptyItem = document.getElementById("empty-item");
const precioConvertido = document.getElementById("precio-final-converted");
const pagoExitoso = document.getElementById("pago-exitoso");
const shopItemsContainer = document.getElementById("shop-items-container");
const mostrarPrecioFinal = document.getElementById("mostrando-precio-final");
const dateLux = document.getElementById("date-lux");
const currentyUsd = document.getElementById("currency-btn01");
const currentyArs = document.getElementById("currency-btn02");
const volverComprar = document.getElementById("volver-comprar");
const pagarCompra = document.getElementById("pagar-compra");
const formPago = document.getElementById("form");


currentyUsd.onclick = _ => pay("Soles");
currentyArs.onclick = _ => pay("usd");
pagarCompra.onclick = _ => pagoRealizado();
volverComprar.onclick = _ => (location.href = "/index.html");

var cartSoles = 0;
var compraUSD = 0;
var compraSoles = 0;
var cartUSD = 0;

var DateTime = luxon.DateTime;
const dt = DateTime.now();
dt.toLocaleString();

function pay(str) {
  totalCart = document.getElementById("total-cart").innerText;
  cartConvertSoles(totalCart);
  calculoCompra(totalCart);
  if (str == "Soles") {
    precioConvertido.innerHTML = `S/. ${cartSoles} Soles`;
  } else if (str == "usd") {
    precioConvertido.innerHTML = `$ ${cartUSD} Dólares`;
  }
  if (str == "Soles" || str == "usd") {
    precioFinal.style.display = "block";
    pagoCompra.style.display = "flex";
    formPago.style.display = "flex";
  } else {
    precioFinal.style.display = "none";
    pagoCompra.style.display = "none";
  }
}

// funcion para sacar en soles y que me lo ponga en el boton
function calculoCompra() {
  compraSoles = Math.floor(cartSoles);
  compraContainer.innerHTML = "S/." + compraSoles;
}

async function cartConvertSoles(str) {
  cartUSD = parseInt(str);
  try {

    
    const dolarPriceBuy = 3.84;

    cartSoles = dolarPriceBuy * cartUSD;
    document.getElementById("cotizacion-usd").innerHTML = cartSoles;
  } catch {
    pagoCompra.style.display = "none";
    precioFinal.style.display = "none";
    formPago.style.display = "none";
  }
}
