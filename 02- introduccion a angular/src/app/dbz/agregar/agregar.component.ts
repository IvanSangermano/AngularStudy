import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {nombre: '', poder: 0}
  //@Output() OnNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbService: DbzService){}

  agregar() {
    if(this.nuevo.nombre.trim().length !== 0) {

      //this.OnNewCharacter.emit( this.nuevo )
      this.dbService.agregarPersonaje( this.nuevo);

      this.nuevo = {
        nombre: '', 
        poder: 0
      }
    } 
  }
}
