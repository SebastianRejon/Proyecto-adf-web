const boton=document.querySelector(".nav_abrir");
const clase=document.querySelector(".list_menu");
const ws=document.querySelector(".contact_ws");

boton.addEventListener("click",()=>{
    clase.classList.toggle("lm_activo");
    ws.classList.toggle("ws_inactivo");
    console.log("tocado");
});