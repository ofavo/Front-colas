import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {
  public cola1: any = [];
  public cola2: any = [];
  public name: string = '';
  public id: number = 0;

  constructor(private socketService: WebsocketService) {

    this.socketService.listen('sendToCola2').subscribe((data: any) => {
      if(data.type === "add") {
        this.cola2.push(data);
      }else {
        let index = this.cola2.findIndex((item: any) => item.idBd === data.idBd);
        if(index >= -1){
        this.cola2.splice(index, 1);
        }
      }
   
    });
    this.socketService.listen('sendToCola1').subscribe((data: any) => {
      if(data.type === "add") {
        this.cola1.push(data);
      }else {
        let index = this.cola1.findIndex((item: any) => item.idBd === data.idBd);
        if(index >= -1){
           this.cola1.splice(index, 1);
        }
       
      }
    })
   }
}
