import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviarMensagemRoutingModule } from './enviar-mensagem-routing.module';
import { EnviarMsgComponent } from './enviar-msg/enviar-msg.component';


@NgModule({
  declarations: [EnviarMsgComponent],
  imports: [
    CommonModule,
    EnviarMensagemRoutingModule
  ]
})
export class EnviarMensagemModule { }
