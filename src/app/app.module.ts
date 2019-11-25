import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscricoesComponent } from './inscricoes/inscricoes.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { BannersComponent } from './banners/banners.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { OrientacoesComponent } from './cadastro/orientacoes/orientacoes.component';
import { ValidarCPFComponent } from './cadastro/validar-cpf/validar-cpf.component';
import { CadastroModule } from './cadastro/cadastro.module';

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
    ValidarCPFComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
