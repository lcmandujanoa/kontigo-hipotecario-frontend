import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
// import { ClientComponent } from './clients/client/client.component';
// import { ClientListComponent } from './clients/client-list/client-list.component';
import { OperationListComponent } from './operations/operation-list/operation-list.component';
import { OperationComponent } from './operations/operation/operation.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'operations',
    component: PagesComponent,
    children: [
      { path: '', component: OperationListComponent },
      { path: 'operation', component: OperationComponent }
    ],
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'clients',
  //   component: PagesComponent,
  //   children: [
  //     { path: '', component: ClientListComponent },
  //     { path: 'client', component: ClientComponent }
  //   ]
  // },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'productos', component: ProductosComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
