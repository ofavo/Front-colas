import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ColasService {

  constructor(
    public wsService: WebsocketService
  ) { }

    sendMessage( mensaje: string, data: any ) {

  

      this.wsService.emit('sendToCola', data );

    }

    getMessages(name: string) {
      return this.wsService.listen(name);
    }

}
