import { Component, OnInit } from '@angular/core';
import {DatosService} from '../../services/datos.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor( public datosService: DatosService) { }

 
  ngOnInit() {
    this.datosService.arrContacts
    this.datosService.color();
    // this.datosService.addContact;
    // this.datosService.strMessage;
    // this.datosService.blnToggle;
    // this.datosService.strGenre;
    // this.datosService.blnNext;
    // this.datosService.card;
    // this.datosService.name;
    // this.datosService.phone;
    // this.datosService.notes;
    // this.datosService.email;
    // this.datosService.regexp;
    // this.datosService.addContact;
    // this.datosService.color;
    // this.datosService.fnErrors;
    // this.datosService.isPresent;
    // this.datosService.removeContacts;

  }


}
