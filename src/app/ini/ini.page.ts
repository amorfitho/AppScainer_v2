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
    const userId= this.getUsuarioById();
    

    if (userId) {
      this.apiService.getUsuarioById(userId).subscribe({
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

<<<<<<< HEAD
  private getUsuarioById(): string {
    return this.nombre, this.apellidos, this.email; 
=======
  private getUserEmail(): string {
    // Implementa una manera de obtener el email del usuario, por ejemplo a través de un servicio o algún otro medio
    return ''; // Cambia esto a tu lógica
>>>>>>> parent of f4fccc2 (intento terminar crud aver que sale)
  }


  async salir() {
    localStorage.removeItem('Ingresado');
    console.log('Sesión cerrada');
    this.navControl.navigateRoot('login');
  }
}