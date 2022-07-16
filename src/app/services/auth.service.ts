import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URI_API: string = 'http://localhost:3000/api/auth';

  constructor(private HTTP_CLIENT: HttpClient, private ROUTER: Router) { }

  LOGUEAR_USUARIO(USUARIO: Auth) {
    return this.HTTP_CLIENT.post<any>(`${this.URI_API}/login`, USUARIO);
  }

  VERIFICAR_LOGUEO() {
    return !!localStorage.getItem('TOKEN');
  }

  OBTENER_TOKEN() {
    return localStorage.getItem('TOKEN');
  }

  DESLOGUEAR_USUARIO() {
    localStorage.removeItem('TOKEN');
    this.ROUTER.navigate(['/login']);
  }
}
