// Definición de una clase simple en TypeScript
var Saludo = /** @class */ (function () {
    function Saludo(mensaje) {
        this.mensaje = mensaje;
    }
    Saludo.prototype.saludar = function () {
        console.log(this.mensaje);
    };
    return Saludo;
}());
// Creación de una instancia de la clase y llamada al método
var saludo = new Saludo('¡Hola, TypeScript!');
saludo.saludar();
