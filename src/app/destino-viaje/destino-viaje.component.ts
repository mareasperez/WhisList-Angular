import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DestinoViaje } from '../modelos/detino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destinos: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {
    // this.nombre = 'algo';
  }

  ngOnInit() {
  }

}
