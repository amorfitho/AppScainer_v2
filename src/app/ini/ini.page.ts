import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.page.html',
  styleUrls: ['./ini.page.scss'],
})
export class IniPage implements OnInit {

  constructor(public navControl: NavController) {}

  ngOnInit() {
  }


  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    // Redirige al usuario a la página de login después de cerrar sesión
    this.navControl.navigateRoot('login');
  }
}


