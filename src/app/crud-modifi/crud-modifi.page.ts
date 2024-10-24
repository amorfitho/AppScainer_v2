import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  usuarios: any[] = [];
  usuarioSeleccionado: any = null;
  formularioModificar: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    // Inicializa el formulario vacío
    this.formularioModificar = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  // Cargar la lista de usuarios desde la API
  cargarUsuarios() {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  // Función que se llama al presionar "Modificar"
  editarUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;
    
    // Cargar los datos del usuario en el formulario
    this.formularioModificar.setValue({
      nombre: usuario.nombre,
      apellidos: usuario.apellidos,
      email: usuario.email,
      password: usuario.password
    });
  }

  // Función para guardar los cambios
  guardarCambios() {
    if (this.formularioModificar.valid && this.usuarioSeleccionado) {
      const datosModificados = this.formularioModificar.value;

      // Llama al servicio para actualizar los datos
      this.apiService.actualizarUsuario(this.usuarioSeleccionado.id, datosModificados).subscribe({
        next: async () => {
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Usuario actualizado correctamente.',
            buttons: ['Entendido']
          });
          await alert.present();
          this.cargarUsuarios();  // Recargar la lista de usuarios
          this.usuarioSeleccionado = null;  // Limpiar la selección
        },
        error: async (error) => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Hubo un problema al actualizar el usuario.',
            buttons: ['Entendido']
          });
          await alert.present();
        }
      });
    }
  }
}
