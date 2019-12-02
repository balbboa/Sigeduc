import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarMsgComponent } from './enviar-msg/enviar-msg.component';



const routes: Routes = [
  { path: 'enviarMsg', component: EnviarMsgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnviarMensagemRoutingModule { }
