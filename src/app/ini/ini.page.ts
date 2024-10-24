import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.page.html',
  styleUrls: ['./ini.page.scss'],
})
export class IniPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  usuario: any;

  constructor(public navControl: NavController, public alertController: AlertController, private apiService: ApiService) {}


  ngOnInit() {
    }
  }



  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    this.navControl.navigateRoot('login');
  }
}