import { NgModule } from '@angular/core';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { ValidarCPFComponent } from './validar-cpf/validar-cpf.component';
import { EstudanteComponent } from './estudante/estudante.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'orientacoes', component: OrientacoesComponent },
  { path: 'cpf', component: ValidarCPFComponent },
  { path: 'estudante', component: EstudanteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
