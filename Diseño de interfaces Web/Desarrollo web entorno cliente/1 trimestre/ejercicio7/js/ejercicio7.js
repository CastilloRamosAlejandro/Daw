boton1 = document.getElementById("boton1tutor");
boton1.addEventListener("click", () => {
    const resultadoTutor = document.getElementById("resultadoTutor"); // Elemento donde mostrar el resultado
    resultadoTutor.textContent = `El tutor es: ${tutor1.mostrarTUTOR()}`;
});
boton2= document.getElementById("boton2Tutor");
boton2.addEventListener("click", () => {
     const cambioNombreTutor = document.getElementById("cambioNombreTutor")
     cambioNombreTutor.textContent = `El tutor ahora se llama: ${tutor1.cambiarTUTOR}`
});
//Tutor
class TUTOR {
    constructor(nombre, edad, dni, tituloUniversitario) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.tituloUniversitario = tituloUniversitario;
    }     
    mostrarTUTOR(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni},Título universitario${this.tituloUniversitario}`
        
    }
    
    cambiarTUTOR(){

    };

}
//Tutores   
let tutor1 = new TUTOR("Manu",38,"77887798N", "Ingeniería de software");

console.log(tutor1);

//Asignatura
class ASIGNATURA{
    constructor(nombre, curso, horas, nota) {
        this.nombre = nombre;
        this.curso = curso;
        this.horas = horas;
        this.nota = nota;
    }
}
//Asignaturas
let asignatura1 = new ASIGNATURA("Despliegue", "2º", "270",[7,10,6,2]);
let asignatura2 = new ASIGNATURA("Programación", "1º", "310",[5,5,4,7]);
let asignatura3 = new ASIGNATURA("Interfaces", "2º", "290",[7,7,6,7]);
let asignatura4 = new ASIGNATURA("Entornos", "1º", "260",[5,6,6,4]);
let asignatura5 = new ASIGNATURA("Servidor", "2º", "320",[6,4,4,5,7]);
let mediaAsignaturas= [];
let asignaturas=[asignatura1,asignatura2,asignatura3,asignatura4,asignatura5];
asignaturas.forEach((element) =>{

    //MEDIA
    let total=0,numeros = element.nota;

    for(let i = 0; i < numeros.length; i++) total+=numeros[i];
    let media= total/numeros.length;

    // Actualizar la nota de la asignatura con la media
    element.nota = media;

    // Crear el mensaje y añadirlo al array
    let mensaje = `La media de ${element.nombre} es: ${media.toFixed(2)}`;
    mediaAsignaturas.push(mensaje);
});

// Imprimir el array de mensajes
mediaAsignaturas.forEach((mensaje) => console.log(mensaje));



//Alumno

class ALUMNO {

    constructor(nombre,edad,ciclo,curso,tutor,mediaAsignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciclo=ciclo;
        this.curso=curso;
        this.tutor=tutor;
        this.listaMediaNota=mediaAsignaturas;
    }


}
//Alumnos
let alumno1 = new ALUMNO("Pepe","21","Daw","1º");

console.log(alumno1);

//Ejercicio 5 

//Ejercicio 6 
function mostrarASIGNATURA(){

}

