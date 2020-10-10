import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './detino-viaje.model';

export class DestinosApiClient {
    current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);
    destinos: DestinoViaje[];
    constructor() {
        this.destinos = [];
    }
    add(d: DestinoViaje) {
        this.destinos.push(d);
    }
    getAll() {
        return this.destinos;
    }
    getById(d: DestinoViaje) {
        return this.destinos.find(destino => destino.id === d.id);
    }
    elegir(d: DestinoViaje) {
        this.destinos.forEach(destino => destino.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }
    subscribeOnChange(fn) {
        this.current.subscribe(fn);
    }
}
