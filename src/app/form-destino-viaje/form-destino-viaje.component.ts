import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DestinoViaje } from '../modelos/detino-viaje.model';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  public fg: FormGroup;
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor(private fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = this.fb.group({
      nombre: [''],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambios en el form', form);
    });
  }
  ngOnInit() {
  }

  guardar(nombre: string, url: string): boolean {
    const d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
}
