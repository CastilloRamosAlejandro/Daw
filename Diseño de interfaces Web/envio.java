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

public interface ns{
    public void volar();
}

class Ave {
    public void volar() {
        System.out.println("Volando...");
    }
}

class Pinguino imp
    @Override
    public void volar() {
        throw new UnsupportedOperationException("¡Los pingüinos no pueden volar!");
    }
}
