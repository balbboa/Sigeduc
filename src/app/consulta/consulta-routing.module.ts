import { NgModule } from '@angular/core';
import { ConsultarPreComponent } from './consultar-pre/consultar-pre.component';
import { RecuperarNumeroPreComponent } from './recuperar-numero-pre/recuperar-numero-pre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'consultarPre', component: ConsultarPreComponent },
  { path: 'recuperarPre', component: RecuperarNumeroPreComponent },
  { path: 'pesquisa', component: PesquisaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
