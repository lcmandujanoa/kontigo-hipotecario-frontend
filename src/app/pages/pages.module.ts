import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
// import { ClientComponent } from './clients/client/client.component';
// import { ClientListComponent } from './clients/client-list/client-list.component';
import { OperationComponent } from './operations/operation/operation.component';
import { OperationListComponent } from './operations/operation-list/operation-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    // ClientComponent,
    // ClientListComponent,
    OperationComponent,
    OperationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class PagesModule { }
