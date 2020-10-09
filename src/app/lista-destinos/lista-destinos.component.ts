import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from 'src/app/modelos/detino-viaje.model';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  public destinos: DestinoViaje[] = [];
  constructor() {
  }

  ngOnInit() {
  }
  guardar(nombre: string, url: string): boolean {
    // console.log(nombre, url);
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log(this.destinos);
    return false;
  }
  elegido(destino: DestinoViaje) {
    this.destinos.forEach(dest => dest.setSelected(false));
    destino.setSelected(true);
  }
}
