import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //autenticate por nombre y contra
  autenticarUsuario(nombre: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?nombre=${nombre}&password=${password}`);
  }
  //ntento
  getUsuarioByNombre(nombre:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/nombre=${nombre}`);
  }
  

  getUsuarioByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?email=${email}`);}

  // Obtener un usuario por ID
  getUsuarioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  // Actualizar un usuario
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
  }

  // Eliminar un usuario
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
