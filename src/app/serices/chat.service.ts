import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService: WebsocketService) { }

  sendMessage(mensaje: string) {
    const payload = {
      de: 'Fernando',
      cuerpo: mensaje
    };

    this.wsService.emitir('mensaje',payload);
  }
}
