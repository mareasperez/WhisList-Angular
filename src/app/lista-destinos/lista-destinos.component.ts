import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from 'src/app/modelos/detino-viaje.model';
import { DestinosApiClient } from 'src/app/modelos/destinos-api-client.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../modelos/destinos-viajes-state.model';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  constructor(private destinosApiClient: DestinosApiClient, private store: Store<AppState>) {
    this.onItemAdded = new EventEmitter<DestinoViaje>();
    this.updates = [];
    this.store.select(state => state.destinos.favorito).subscribe(data => {
         if (data != null) {
        this.updates.push('destino actualizado: ' + data.nombre);
      }
    });
  }

  ngOnInit() {
  }
  agregado(destino: DestinoViaje) {
    this.destinosApiClient.add(destino);
    this.onItemAdded.emit(destino);
    this.store.dispatch(new NuevoDestinoAction(destino));
  }
  elegido(destino: DestinoViaje) {
    this.destinosApiClient.elegir(destino);
    this.store.dispatch(new ElegidoFavoritoAction(destino));
  }
}
