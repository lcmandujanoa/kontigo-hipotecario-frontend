import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  OPERACIONES?: Operation[]

  constructor(private OPERATION_SERVICE: OperationService) { }

  ngOnInit(): void {
    this.OBTENER_OPERACIONES();
  }

  OBTENER_OPERACIONES() {
    this.OPERATION_SERVICE.OBTENER_OPERACIONES().subscribe({
      next: (res) => {
        this.OPERACIONES = res;
      },
      error: (err) => console.error(err)
    });
  }

}
