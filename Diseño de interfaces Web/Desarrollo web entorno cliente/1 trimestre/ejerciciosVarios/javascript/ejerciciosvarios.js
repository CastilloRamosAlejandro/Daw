
/*Variable de Nombre*/
nombre = prompt("Nombre por favor");


/*bucle de bienvenida*/ 
if (nombre == null || nombre =="" ){
    alert("No has puesto nada!")
}else{
    alert("Bienvenid@ a mi página "+ nombre + " !")
}





/*Funcion de boton */
function boton(){
    alert("hola")
}


/*funcion al pasar por encima de imagen*/
function ala(){
    alert("ala")
}

function calc(){


    var bucle=true

        let num1 = parseInt(prompt("ingresa el primer numero"));

        let num2 = parseInt(prompt("ingresa el segundo numero"));  
        if(isNaN(num1) || isNaN(num2) || num1==null || num2==null){
            alert("Error");
        }else{

        

            while (bucle){



                console.log(num1,num2)

                if (isNaN(num1) || isNaN(num2)){
                    alert("escribe un numero")
                    
                }else{
                    
                    const operacion = prompt("Que operacion desea realizar\n1.Suma\n2.Resta\n3.Multiplicación\n4.division\n5.Cambiar numeros\n6.salir")

                    var resultado;
                    
                    
                        switch(operacion){
                            case "1":
                                
                                resultado = num1 + num2;
                                
                                alert("El resultado es: "+ resultado);
                                buclecal=false;         
                                break;

                            case "2":
                                resultado = num1 - num2;
                                alert("El resultado es: "+ resultado);
                                buclecal=false;
                                break;
                            
                            case "3":
                                resultado = num1 * num2;
                                alert("El resultado es: "+ resultado);
                                break;                    
                        
                            case "4":
                                if(num2 === 0){

                                    alert("No se puede dividir entre 0.")
                                    break;

                                }else{

                                    resultado = num1 / num2;
                                
                                    alert("El resultado es: "+ resultado);
                                    
                                    break;

                                }
                                                    
                            
                            case "5":
                                
                                num1=prompt("elige los nuevos numeros\nNumero 1: ")

                                num2=prompt("elige los nuevos numeros\nNumero 2: ")
                                
                                break;

                            case "6":
                                alert("saliendo...")
                                bucle=false;

                                
                        
                            
                        }


                }

        }

    }
        
}

