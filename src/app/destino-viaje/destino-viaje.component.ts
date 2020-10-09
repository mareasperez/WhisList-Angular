import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../modelos/detino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input('idx') posicion: number;
  @Input() destino: DestinoViaje;
  @Output() clicked: EventEmitter<DestinoViaje>;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }
  ir() {
    this.clicked.emit(this.destino);
    return false;
  }
}
