import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultarPreComponent } from './consultar-pre/consultar-pre.component';
import { RecuperarNumeroPreComponent } from './recuperar-numero-pre/recuperar-numero-pre.component';


@NgModule({
  declarations: [ConsultarPreComponent, RecuperarNumeroPreComponent],
  imports: [
    CommonModule,
    ConsultaRoutingModule
  ]
})
export class ConsultaModule { }
