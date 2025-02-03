export class Jugador{
    //Nombre del personaje
    nombre : string ;
    //Puntos de salud del personaje
    puntos_salud: number;
    //Puntos de ataque
    puntos_ataque:number;
    //Dinero
    dinero:number;
    //Constructor
    constructor(nombre:string){
    this.nombre=nombre;
    this.puntos_salud=20;
    this.puntos_ataque=0;
    this.dinero=2;
    }
    //Método para imprimir los atributos del jugador
    get imprimirAtributos(){
        return(`Nombre: ${this.nombre}, puntos de salud: ${this.puntos_salud},puntos de fuerza: ${this.puntos_ataque},dinero ${this.dinero}`)
    }
    //Método para calcular aleatoriamente puntos_ataque.
    calcularFuerzaInicial(){
        this.puntos_ataque=Math.floor(Math.random()*10)+1;
    }
}


