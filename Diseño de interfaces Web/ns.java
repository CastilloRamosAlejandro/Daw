//Ejercicio 2 
public interface envio{
    public void enviar(String tipo);
}

class Notificacion implements envio{
    public void enviar(String tipo) {
        if (tipo.equals("correo")) {
            System.out.println("Enviando correo...");
        } else if (tipo.equals("sms")) {
            System.out.println("Enviando SMS...");
        }
    }
}
//Ejercicio 3 
class nuevaNotificacion implements envio{
    public void enviar(String tipo) {
        if (tipo.equals("correo")) {
            System.out.println("Enviando correo...");
        } else if (tipo.equals("sms")) {
            System.out.println("Enviando SMS...");
        }else if (tipo.equals("whatsapp")){
            System.out.println("Enviando WhatsApp...");
        }
    }
}
//Ejercicio 4
public interface ns{
    public void volar();
}

class Ave implements ns {
    public void volar() {
        System.out.println("Volando...");
    }
}

class Pinguino implements ns {
    public void volar() {
        throw new UnsupportedOperationException("¡Los pingüinos no pueden volar!");
    }
}

//ejercicio 5
interface Trabajador {
    void programar();
    }

class Desarrollador implements Trabajador {
    public void programar() {
        System.out.println("Programando...");
    }

}

interface Innerns {
    public void conectar();
    
}

//Ejercicio 6 
class BaseDeDatosMySQL {
 public void conectar() {
    System.out.println("Conectado a MySQL");
 }  
}
class App {
    private BaseDeDatosMySQL baseDeDatos;
        public App( BaseDeDatosMySQL baseDeDatos) {
        this.baseDeDatos =  BaseDeDatosMySQL();
    }
    public void iniciar() {
        baseDeDatos.conectar();
        }
    }
    