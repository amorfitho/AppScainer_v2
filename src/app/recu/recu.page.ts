import { Component, OnInit } from '@angular/core';
import { FormGroup, 
  FormControl,
  Validators,
  FormBuilder 
   } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-recu',
  templateUrl: './recu.page.html',
  styleUrls: ['./recu.page.scss'],
})
export class RecuPage implements OnInit {

  formularioRecu: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navControl:NavController) { 
    this.formularioRecu = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'oldpassword': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'comfirmpassword': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async actulizar(){
    const f = this.formularioRecu.value;

    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    localStorage.getItem('password');

    if (usuario.nombre== f.nombre && usuario.password==f.oldpassword && f.password==f.comfirmpassword){
      console.log('Actualizado');
      localStorage.setItem('Actualizado','true');
      localStorage.getItem('password');
      this.navControl.navigateRoot('login');
    }else{
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      })

      await alert.present();
      return;
    }

  }



}
