import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscricoesComponent } from './dashboard/inscricoes/inscricoes.component';
import { CalendarioComponent } from './dashboard/calendario/calendario.component';
import { FaleconoscoComponent } from './dashboard/faleconosco/faleconosco.component';
import { BannersComponent } from './dashboard/banners/banners.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { OrientacoesComponent } from './cadastro/orientacoes/orientacoes.component';
import { ValidarCPFComponent } from './cadastro/validar-cpf/validar-cpf.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { ConsultaModule } from './consulta/consulta.module';
import { CardsComponent } from './dashboard/cards/cards.component';
import { DocumentacaoComponent } from './dashboard/documentacao/documentacao.component';
import { EnviarMensagemModule } from './enviarMensagem/enviar-mensagem.module';
import { PolicyListComponent } from './policy-list/policy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InscricoesComponent,
    CalendarioComponent,
    FaleconoscoComponent,
    BannersComponent,
    FooterComponent,
    OrientacoesComponent,
    DashboardComponent,
    ValidarCPFComponent,
    CardsComponent,
    DocumentacaoComponent,
    PolicyListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    CadastroModule,
    AppRoutingModule,
    ConsultaModule,
    EnviarMensagemModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
