import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/services/operation.service';
import { Operation } from '../../../models/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  OPERACION: Operation = { TIPO_DOCUMENTO: '', NUMERO_DOCUMENTO: '', NOMBRE: '', APELLIDO_PATERNO: '', APELLIDO_MATERNO: '', ORIGEN: '' };

  constructor(private OPERATION_SERVICE: OperationService) { }

  ngOnInit(): void {
  }

  REGISTRAR_OPERACION() {
    this.OPERATION_SERVICE.REGISTRAR_OPERACION(this.OPERACION).subscribe({
      next: (res) => {
        console.log(res);
        this.LIMPIAR_FORMULARIO();
      },
      error: (err) => console.error(err)
    });
  }

  LIMPIAR_FORMULARIO() {
    this.OPERACION = { TIPO_DOCUMENTO: '', NUMERO_DOCUMENTO: '', NOMBRE: '', APELLIDO_PATERNO: '', APELLIDO_MATERNO: '', ORIGEN: '' };
  }

  PROCESAR_OPERACION() {
    if (!this.VALIDAR_DATOS()) {
      console.log('***completar todos los campos***');
    } else {
      this.REGISTRAR_OPERACION();
    }
  }

  VALIDAR_DATOS(): boolean {
    if (this.OPERACION.TIPO_DOCUMENTO === "") return false;
    if (this.OPERACION.NUMERO_DOCUMENTO === "") return false;
    if (this.OPERACION.NOMBRE === "") return false;
    if (this.OPERACION.APELLIDO_PATERNO === "") return false;
    if (this.OPERACION.APELLIDO_MATERNO === "") return false;
    if (this.OPERACION.ORIGEN === "") return false;
    return true;
  }

}
