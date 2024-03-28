const derecha=document.getElementById("avanzar").addEventListener("click", adelante);
const retroceder=document.getElementById("retroceder").addEventListener("click", atras);
let numImg=0;
let nombre=["Azucar Refinada","Azucar Light","Azucar Impalpable","Edulcorante"];
let textos=[
    "El toque clásico para tus recetas. Nuestra azúcar refinada, pura y versátil, eleva cada creación culinaria con su dulzura inconfundible.",
    "Disfruta de la dulzura ligera con nuestro azúcar light. Menos calorías, mismo sabor delicioso. La elección inteligente para un estilo de vida equilibrado. El doble de sabor con menos calorias.",
    "Descubre la dulzura fina con nuestro azúcar impalpable premium. Ideal para repostería, se disuelve fácilmente y garantiza postres irresistibles.",
    "Disfruta de lo dulce sin calorías. Nuestro edulcorante artificial ofrece el mismo sabor, sin remordimientos. Endulza tu vida de manera saludable."
];
function adelante(){
    if (numImg>=3){
        numImg=0;
    }else{
        numImg++;
    }
    let elemento=document.getElementById("slider_img");
    elemento.style.backgroundImage="url(/img/"+numImg+".png)";
    elemento.style.transitionDuration="0.4s";
    elemento.innerHTML=`
        <h2>${nombre[numImg]}</h2>
        <h3 class="slider_txt">${textos[numImg]}</h3>
        <a href="productos.html" class="article_link">VER MAS</a>
    `;
}

function atras(){
    if (numImg<=0){
        numImg=3;
    }else{
        numImg--;
    }
    let elemento=document.getElementById("slider_img");
    elemento.style.backgroundImage="url(/img/"+numImg+".png)";
    elemento.style.transitionDuration="0.4s";
    elemento.innerHTML=`
        <h2>${nombre[numImg]}</h2>
        <h3 class="slider_txt">${textos[numImg]}</h3>
        <a href="productos.html" class="article_link">VER MAS</a>
    `;
}
