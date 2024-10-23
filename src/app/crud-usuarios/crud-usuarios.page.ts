import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
})
export class CrudUsuariosPage implements OnInit {

  usuarios: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  // Obtener todos los usuarios
  getUsuarios() {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  // Eliminar un usuario
  eliminarUsuario(id: number) {
    this.apiService.deleteUsuario(id).subscribe(() => {
      this.getUsuarios();  // Refrescar la lista de usuarios
    });
  }
}
