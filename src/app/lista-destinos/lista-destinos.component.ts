import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from 'src/app/modelos/detino-viaje.model';
import { DestinosApiClient } from 'src/app/modelos/destinos-api-client.model';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor(private destinosApiClient: DestinosApiClient) {
    this.onItemAdded = new EventEmitter<DestinoViaje>();
  }

  ngOnInit() {
  }
  agregado(destino: DestinoViaje) {
    this.destinosApiClient.add(destino);
    this.onItemAdded.emit(destino);
  }
  elegido(destino: DestinoViaje) {
    this.destinosApiClient.getAll().forEach(dest => dest.setSelected(false));
    destino.setSelected(true);
  }
}
