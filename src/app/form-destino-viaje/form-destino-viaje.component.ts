import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { DestinoViaje } from '../modelos/detino-viaje.model';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  public fg: FormGroup;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  minLongitud = 3;
  searchResults: string[] = [];
  constructor(private fb: FormBuilder) {
    this.onItemAdded = new EventEmitter();
    this.fg = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidator,
        this.nombreValidatorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });
    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambios en el form', form);
    });
  }
  ngOnInit() {
    const elemeNombre = <HTMLInputElement>document.getElementById('nombre');
    fromEvent(elemeNombre, 'input')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(() => ajax('/assets/datos.json'))
      ).subscribe((res) => this.searchResults = res.response);
  }

  guardar(nombre: string, url: string): boolean {
    const d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }
  nombreValidator(control: FormControl): { [s: string]: boolean } {
    console.log('validando: ', control.value.toString());
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5) {
      return { invalidNombre: true };
    }
    return null;
  }
  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong) {
        return { minLong: true };
      }
      return null;
    };
  }
}
