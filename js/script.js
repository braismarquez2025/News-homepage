const menu = document.querySelector(".menu");
const abrir_menu = document.querySelector(".boton-menu");
const cerrar_menu = document.querySelector(".menu_cerrar");
const overlay = document.querySelector(".overlay");


abrir_menu.addEventListener("click", () => {
    menu.classList.add("activo");
    overlay.classList.add("activo");
})

cerrar_menu.addEventListener("click", () => {
    menu.classList.remove("activo");
    overlay.classList.remove("activo");
})



function actualizarClaseTitulo() {
    const titulo = document.querySelector(".main_portada-title");
    if (window.innerWidth > 1024) {
      titulo.classList.remove('text-preset-2');
      titulo.classList.add('text-preset-1');
    } else {
      titulo.classList.remove('text-preset-1');
      titulo.classList.add('text-preset-2');
    }
  }

window.addEventListener('load', actualizarClaseTitulo);
window.addEventListener('resize', actualizarClaseTitulo);