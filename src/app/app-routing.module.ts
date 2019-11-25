import { NgModule } from '@angular/core';
import { OrientacoesComponent } from './cadastro/orientacoes/orientacoes.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  /*{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }*/
  {
    path: 'orientacoes',
    component: OrientacoesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
