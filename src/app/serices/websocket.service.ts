import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus: boolean = false;

  constructor(private socket: Socket) {

    this.checkStatus();
  }

  checkStatus() {

    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  //Emitir todos los eventos que se ejecuten en la aplicacion
  /**
   *
   * @param evento: Evento que queremos emitir
   * @param payload: Informacion que quiero enviar
   * @param callback: Funcion que queremos ejecutar despues de ejecutar el emit
   */
  emitir(evento: string, payload?: any, callback?: Function) {

    console.log('Emitiendo', evento);
    this.socket.emit(evento, payload, callback);
  }
}
