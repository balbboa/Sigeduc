import { NgModule } from '@angular/core';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { ValidarCPFComponent } from './validar-cpf/validar-cpf.component';
import { EstudanteComponent } from './estudante/estudante.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { NeeComponent } from './nee/nee.component';
import { ContatoComponent } from './contato/contato.component';
import { VagaComponent } from './vaga/vaga.component';
import { ComprovanteComponent } from './comprovante/comprovante.component';





import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'orientacoes', component: OrientacoesComponent },
  { path: 'cpf', component: ValidarCPFComponent },
  { path: 'estudante', component: EstudanteComponent },
  { path: 'docs', component: DocumentosComponent },
  { path: 'nee', component: NeeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'vaga', component: VagaComponent },
  { path: 'comprovante', component: ComprovanteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
