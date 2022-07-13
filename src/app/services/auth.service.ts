import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URI_API: string = 'http://localhost:3000/api/auth';

  constructor(private httpClient: HttpClient) { }

  LOGUEAR_USUARIO(USUARIO: Auth) {
    return this.httpClient.post<any>(`${this.URI_API}/login`, USUARIO);
  }
}
