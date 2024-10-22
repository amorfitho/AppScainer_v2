import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://tu-api-url.com';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Obtener todos los posts
  getUsuario(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario`);
  }
  // Obtener un post por nombre
  getUsuarioBynombre(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/${nombre}`);
  }
  //obtener por apellido
  getUsuarioByapellido(apellido: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/${apellido}`);
  }
  //obtener por email
  getUsuarioByemail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/${email}`);
  }
  //obtener contraseña
  getUsuarioBypassword(password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuario/${password}`);
  }
  // Crear un nuevo post
  createUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario`, usuario);
  }

  // Actualizar un post
  updateUsuario(nombre:string,apellido:string, email:string, password:string, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${nombre}/${apellido}/${email}/${password}`, usuario);
  }

  // Eliminar un post
  deleteUsuario(nombre:string, apellido:string, email:string, password:string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/usuario/${nombre}/${apellido}/${email}/${password}`);
  }
}
