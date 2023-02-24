let btnMedias = document.getElementById("btn-medias");
let btnRegalos = document.getElementById("btn-regalos");
let btnGorras = document.getElementById("btn-gorras");
let btnPolos = document.getElementById("btn-polos");
let btnTodos = document.getElementById("btn-todos");

btnMedias.onclick = _ => filterProducts("medias");
btnRegalos.onclick = _ => filterProducts("regalos");
btnGorras.onclick = _ => filterProducts("gorras");
btnPolos.onclick = _ => filterProducts("polos");
btnTodos.onclick = _ => filterProducts("todos");

function filterProducts(str) {
  // genero otro con misma clase para iterar
  let allsMedias = document.getElementsByClassName("medias");
  let allsGorras = document.getElementsByClassName("gorras");
  let allsRegalos = document.getElementsByClassName("regalos");
  let allsPolos = document.getElementsByClassName("polos");

  switch (str) {
    case "medias":
      for (const itemsPolos of allsPolos) {itemsPolos.style.display = "none";}
      for (const itemsRegalos of allsRegalos) {itemsRegalos.style.display = "none";}
      for (const itemsGorras of allsGorras) {itemsGorras.style.display = "none";}
      for (const itemsMedias of allsMedias) {itemsMedias.style.display = "flex";}
      btnMedias.classList.add("underline");
      btnGorras.classList.remove("underline");
      btnRegalos.classList.remove("underline");
      btnPolos.classList.remove("underline");
      btnTodos.classList.remove("underline");
      break;
    case "gorras":
      for (const itemsPolos of allsPolos) {itemsPolos.style.display = "none";}
      for (const itemsRegalos of allsRegalos) {itemsRegalos.style.display = "none";}
      for (const itemsGorras of allsGorras) {itemsGorras.style.display = "flex";}
      for (const itemsMedias of allsMedias) {itemsMedias.style.display = "none";}
      btnGorras.classList.add("underline");
      btnMedias.classList.remove("underline");
      btnRegalos.classList.remove("underline");
      btnPolos.classList.remove("underline");
      btnTodos.classList.remove("underline");
      break;
    case "regalos":
      for (const itemsPolos of allsPolos) {itemsPolos.style.display = "none";}
      for (const itemsRegalos of allsRegalos) {itemsRegalos.style.display = "flex";}
      for (const itemsGorras of allsGorras) {itemsGorras.style.display = "none";}
      for (const itemsMedias of allsMedias) {itemsMedias.style.display = "none";}
      btnRegalos.classList.add("underline");
      btnGorras.classList.remove("underline");
      btnMedias.classList.remove("underline");
      btnPolos.classList.remove("underline");
      btnTodos.classList.remove("underline");
      break;
    case "polos":
      for (const itemsPolos of allsPolos) {itemsPolos.style.display = "flex";}
      for (const itemsRegalos of allsRegalos) {itemsRegalos.style.display = "none";}
      for (const itemsGorras of allsGorras) {itemsGorras.style.display = "none";}
      for (const itemsMedias of allsMedias) {itemsMedias.style.display = "none";}
      btnPolos.classList.add("underline");
      btnGorras.classList.remove("underline");
      btnRegalos.classList.remove("underline");
      btnMedias.classList.remove("underline");
      btnTodos.classList.remove("underline");
      break;
    case "todos":
      for (const itemsPolos of allsPolos) {itemsPolos.style.display = "flex";}
      for (const itemsRegalos of allsRegalos) {itemsRegalos.style.display = "flex";}
      for (const itemsGorras of allsGorras) {itemsGorras.style.display = "flex";}
      for (const itemsMedias of allsMedias) {itemsMedias.style.display = "flex";}
      btnTodos.classList.add("underline");
      btnGorras.classList.remove("underline");
      btnRegalos.classList.remove("underline");
      btnPolos.classList.remove("underline");
      btnMedias.classList.remove("underline");
      break;
  }
}

