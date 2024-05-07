import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TelaFundoComponent } from './tela-fundo/tela-fundo.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaSobreComponent } from './tela-sobre/tela-sobre.component';
import { TelaModeradorLoginComponent } from './tela-moderador-login/tela-moderador-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TelaSobreComponent,
    TelaInicialComponent,
    TelaFundoComponent,
    TelaModeradorLoginComponent


  ],
  exports: [MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
