import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    ValidarCPFComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CadastroModule,
    AppRoutingModule,
    ConsultaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
