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
    const usuarioEmail = this.getUserEmail(); 

    if (usuarioEmail) {
      this.apiService.getUsuarioByEmail(usuarioEmail).subscribe({
        next: (data) => {
          this.usuario = data;
          this.nombre = this.usuario.nombre;
          this.apellidos = this.usuario.apellidos;
          this.email = this.usuario.email;
        },
        error: (error) => {
          console.error('Error al obtener el usuario:', error);
        }
      });
    }
  }

  private getUserEmail(): string {
    // Implementa una manera de obtener el email del usuario, por ejemplo a través de un servicio o algún otro medio
    return this.nombre, this.apellidos, this.email; // Cambia esto a tu lógica
  }


  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    this.navControl.navigateRoot('login');
  }
}