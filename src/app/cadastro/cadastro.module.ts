import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { EstudanteComponent } from './estudante/estudante.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { NeeComponent } from './nee/nee.component';
import { ContatoComponent } from './contato/contato.component';
import { VagaComponent } from './vaga/vaga.component';
import { ComprovanteComponent } from './comprovante/comprovante.component';


@NgModule({
  declarations: [EstudanteComponent, DocumentosComponent, NeeComponent, ContatoComponent, VagaComponent, ComprovanteComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
