import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatosService {



  arrContacts: Array<any> = [] as Array<JSON>;
  strMessage :string;
  blnToggle:boolean;
  strGenre:string;
  blnNext:boolean;
  card:boolean;
  date:Date;

  name:string;
  phone:number;
  email:string;
  notes:Text;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  constructor(public alertController: AlertController) { }
  
  // async presentAlert() {

  // }
 
  async addContact(){
    this.strMessage = '';
    this.blnNext = false;

    (this.name)? this.fnErrors: this.fnErrors("El campo nombre es olbigatorio");
    (this.phone)? this.fnErrors: this.fnErrors("El campo telefono es obligatorio");
    (this.email)? (this.regexp.test(this.email))? this.fnErrors: this.fnErrors(' no es un email válido'): this.fnErrors('El campo email es olbigatorio');
    (this.notes)? this.fnErrors: this.fnErrors("El campo notas es olbigatorio");

    if (!this.blnNext) {
      const jsnContacts: any = {
        strName: this.name,
        intPhone: this.phone,
        srtEmail:this.email,
        date: this.date,
        genero:this.strGenre,
        txtNotes: this.notes
      }
      // this.presentAlert();
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se añadió el contacto correctamente :)',
        buttons: ['OK'],
      });
    
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
      this.arrContacts.push(jsnContacts);
      console.log(this.arrContacts);
      console.log('*****************************');
      console.log(this.strGenre);
      this.name = '';
      this.phone = null;
      this.email = '';
      this.notes = null;
      this.date = null;
     
      
    }else{
      this.presentAlert();
    }


  }
  isPresent($event) {
    // console.log($event.returnValue);
    return this.blnToggle = $event.detail.checked
    // console.log($event.detail.checked);
 }
 color(){
   this.card = !this.card;
 }


  async removeContacts(strName:string ,r){
   
      const alert = await this.alertController.create({
        header: 'Eliminar Contacto',
        message: 'Seguro que desea elimar a <strong>'+strName+'</strong>!!!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'OK',
            handler: () => {
              console.log('Confirm Okay');

              const index = this.arrContacts.findIndex(i => i.strName === this.arrContacts[r].strName);
              console.log(index)
              // if (index >= -1) {
              this.arrContacts.splice(index, 1)
              console.log(this.arrContacts)
              // }
            }
          }
        ]
      });
  
      await alert.present();

    let result = await alert.onDidDismiss();
    console.log(result);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Algo salió mal :(',
      message:this.strMessage,
      buttons: ['OK']
    });

    await alert.present();
  }

  fnErrors(msg?:string){
    if (msg) {
      this.strMessage += '<br>'+ msg +'<br>';
      this.blnNext = true;
    }else if(this.blnNext){
      this.blnNext = true;
    }else{
      this.blnNext = false;
    }
  }
}
