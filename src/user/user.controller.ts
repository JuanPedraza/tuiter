import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

@Get()
enviarMensaje() {
    return 'Esto es un mensaje de prueba';
}

}
