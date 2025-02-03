// Definición de una clase simple en TypeScript
class Saludo {
    private mensaje: string;
  
    constructor(mensaje: string) {
      this.mensaje = mensaje;
    }
  
    saludar() {
      console.log(this.mensaje);
    }
  }
  
  // Creación de una instancia de la clase y llamada al método
  const saludo = new Saludo('¡Hola, TypeScript!');
  saludo.saludar();
  