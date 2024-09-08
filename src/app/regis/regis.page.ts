import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController ) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellidos': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Algo te falto',
        subHeader: 'Subtitle',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Ta Bien']
      })

      await alert.present();
      return;
    }

    var usuario ={
      nombre: f.nombre,
      apellidos: f.apellidos,
      email: f.email,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }


}
