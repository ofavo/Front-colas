import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cola',
  templateUrl: './cola.component.html',
  styleUrl: './cola.component.css'
})
export class ColaComponent {
  @Input() cola : any ;
}
