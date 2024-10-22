import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/almacena.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: any[]=[];
  

  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit() {
    this.getUsuario();
  }


  getUsuario(){
    this.http.get<any[]>('http://localhost:3000/usuario').subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  getUsuari() {
    this.apiService.getUsuario().subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  createUsuario() {
    const newUsuario = { title: 'Nuevo Usuario', content: 'Contenido del uauario' };
    this.apiService.createUsuario(newUsuario).subscribe(data => {
      console.log('usuario creado:', data);
      this.getUsuario();  // Refresca la lista después de crear el post
    });
  }

  updateUsuario(nombre: string) {
    const updatedUsuario = { title: 'usuario actualizado', content: 'usuario actualizado' };
    this.apiService.updateUsuario(nombre, updatedUsuario).subscribe(data => {
      console.log('usuario actualizado:', data);
      this.getUsuario();  // Refresca la lista después de actualizar el post
    });
  }

  deleteUsuario(nombre: string) {
    this.apiService.deleteUsuario(nombre).subscribe(() => {
      console.log('Post eliminado');
      this.getUsuario();  // Refresca la lista después de eliminar el post
    });
  }
}


