import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  public id: number = 0;
  public name: string = '';
  constructor(private socketService: WebsocketService) { }
  sendToCola() {
    if(this.id < 0 || !this.name) return
   
     this.socketService.emit('sendToCola', {id: this.id, name: this.name});
      this.id = 0;
      this.name = '';
  }
}
