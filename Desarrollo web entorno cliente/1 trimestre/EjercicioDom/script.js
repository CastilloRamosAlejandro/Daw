    //EJ 1 HTML
    function mostrarURL(){
    var parrafo = document.getElementById("parrafo1");
    parrafo.innerHTML="Google www.google.es";
    parrafo.href="https://www.google.com";     
}
    function cambiarURL(){
        var parrafo = document.getElementById("parrafo1");
        parrafo.innerHTML="He cambiado a Youtube";
        parrafo.href="https://www.youtube.com"    
    }
    var boton2 = document.getElementById("boton2");
    boton2.onclick = cambiarURL;

    var boton = document.getElementById("boton1");
    boton.onclick = mostrarURL;

    //EJ2 2 HTML
    function cambiarTamano(){
        var paquito = document.getElementById("tabla");
        alert("Ahora mismo la tabla mide: "+paquito.clientHeight+"px x "+paquito.clientWidth)
            
        widthTabla = prompt("Que anchura quieres poner?");
        if (isNaN(widthTabla) || isNaN(widthTabla)){
            alert("¡Escribe números!")
            
        }else{
            paquito.style.width=widthTabla+"px"
        }

        heighTabla = prompt("Que altura quieres poner?");
        if (isNaN(heighTabla) || isNaN(heighTabla)){
            alert("¡Escribe números!")
            
        }else{
            paquito.style.height=heighTabla+"px"
        }
    }
    function cambiarBorde() {
        var paquito = document.getElementById("tabla");
        var estilo = getComputedStyle(paquito);// Obtener los estilos de la tabla
        var borderWidth = estilo.borderWidth;
        alert("Ahora mismo el borde mide: " + borderWidth);
    
        var cambiarGrosor = prompt("Que grosor quieres poner?");
        if (isNaN(cambiarGrosor) || isNaN(cambiarGrosor)){
            alert("¡Escribe números!")
        }else{
            paquito.style.borderWidth=cambiarGrosor+"px"
        }
    }
    function laCucaracha() { 
        var paquito = document.getElementById("pepe");
        var estilo = getComputedStyle(paquito); // Obtener los estilos aplicados
        
        var alineacion = estilo.textAlign; // Obtener el valor de text-align actual
    
        // Normaliza valores para asegurar que se cubren más casos
        if (alineacion === "center" || alineacion === "start") {
            paquito.style.textAlign = "right"; // Cambiar a derecha si está centrado o alineado al inicio
        } else if (alineacion === "right") {
            paquito.style.textAlign = "left"; // Cambiar a izquierda si está a la derecha
        } else if (alineacion === "left") {
            paquito.style.textAlign = "center"; // Cambiar a centro si está a la izquierda
        }
    }
    
    //EJ 3 HTML
    var clicks = 0;
    function suma() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    }
    function resta() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
    }


    //Ej 4 HTML
    function derecha(){

        var imagenNueva=document.getElementById("imagen");
        var botonDerecha=document.getElementById("botonDerecha4");
        var botonIzquierda=document.getElementById("botonIzquierda4");

        if (imagenNueva.src.match("lethal1.png")) {
            imagenNueva.src = "./img/lethal2.png";
            botonIzquierda.removeAttribute("disabled");
        } else if (imagenNueva.src.match("lethal2.png")) {
            imagenNueva.src = "./img/lethal3.png";
        } else if (imagenNueva.src.match("lethal3.png")) {
            imagenNueva.src = "./img/lethal4.png";
            
        } else if (imagenNueva.src.match("lethal4.png")) {
            imagenNueva.src = "./img/lethal5.png"; 
            botonDerecha.setAttribute("disabled",true);
        }
    }

    function izquierda(){
        var imagenNueva=document.getElementById("imagen");
        var botonIzquierda=document.getElementById("botonIzquierda4");
        var botonDerecha=document.getElementById("botonDerecha4");

        if (imagenNueva.src.match("lethal5.png")) {
            imagenNueva.src = "./img/lethal4.png";
            botonDerecha.removeAttribute("disabled");

        } else if (imagenNueva.src.match("lethal4.png")) {
            imagenNueva.src = "./img/lethal3.png";
        } else if (imagenNueva.src.match("lethal3.png")) {
            imagenNueva.src = "./img/lethal2.png";
        } else if (imagenNueva.src.match("lethal2.png")) {
            imagenNueva.src = "./img/lethal1.png"; 
            botonIzquierda.setAttribute("disabled",true);
        }
    }
    //EJ 5 HTML
    function cambiarClase(){
        var texto = document.getElementById("texto");

        if(texto.classList.contains("uno")){
        texto.classList.remove("uno");
        texto.classList.add("dos");
        }else if(texto.classList.contains("dos")){
            texto.classList.remove("dos");
            texto.classList.add("uno");
        }

    //EJ 9
    let esClaseUno = true;

    function cambiarClase2() {
        const parrafo = document.querySelector('p');
        if (esClaseUno) {
            parrafo.style.backgroundColor = 'lightcoral';
            parrafo.style.border = '2px solid red';
            parrafo.style.color = 'white';
            parrafo.style.fontSize = '20px';
            esClaseUno = false;
        } else {
            parrafo.style.backgroundColor = 'lightblue';
            parrafo.style.border = '2px solid blue';
            parrafo.style.color = 'darkblue';
            parrafo.style.fontSize = '18px';
            esClaseUno = true;
        }
    }
    
        //Ejercicio 10
// Guardar el color original al cargar la página
var originalColor = document.body.style.backgroundColor;

// Función para cambiar el fondo al color del div
function cambiarColorFondo(color) {
    document.body.style.backgroundColor = color;
}

// Función para restaurar el color original del fondo
function restaurarColorFondo() {
    document.body.style.backgroundColor = originalColor;
}


}

