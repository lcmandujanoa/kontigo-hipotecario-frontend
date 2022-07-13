import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  URI_API: string = 'http://localhost:3000/api/operations';

  constructor(private HTTP_CLIENT: HttpClient) { }

  REGISTRAR_OPERACION(OPERACION: Operation) {
    return this.HTTP_CLIENT.post<any>(`${this.URI_API}`, OPERACION);
  }

  OBTENER_OPERACIONES() {
    return this.HTTP_CLIENT.get<any>(this.URI_API);
  }
}
