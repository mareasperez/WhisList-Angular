import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { DestinoViaje } from './detino-viaje.model';
@Injectable()
export class DestinosApiClient {
    destinos: DestinoViaje[] = [];
    constructor(private store: Store<DestinoViaje>) {
        this.store
            .select(state => state.destinos)
            .subscribe((data) => {
                console.log('destinos sub store');
                console.log(data);
                this.destinos = data.items;
            });
        this.store
            .subscribe((data) => {
                console.log('all store');
                console.log(data);
            });
    }
    add(destino: DestinoViaje) {
        // this.destinos.push(d);
        this.store.dispatch(new NuevoDestinoAction(destino));

    }
    getAll() {
        return this.destinos;
    }
    getById(d: DestinoViaje) {
        return this.destinos.find(destino => destino.id === d.id);
    }
    elegir(destino: DestinoViaje) {
        // this.destinos.forEach(destino => destino.setSelected(false));
        // d.setSelected(true);
        this.store.dispatch(new ElegidoFavoritoAction(destino));


    }
    subscribeOnChange(fn) {
        // this.current.subscribe(fn);
    }
}
