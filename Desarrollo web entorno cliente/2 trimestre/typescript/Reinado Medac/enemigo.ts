class Enemigo{
    nombre:string;
    puntos_ataque:number;

    constructor(nombre:string){
        this.nombre=nombre;
        this.puntos_ataque=0;
    }

    calcularFuerzaEnemigo(){
        this.puntos_ataque=Math.floor(Math.random()*10)+1
    }
}