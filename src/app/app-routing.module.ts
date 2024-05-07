import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TelaSobreComponent } from './tela-sobre/tela-sobre.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaModeradorLoginComponent } from './tela-moderador-login/tela-moderador-login.component';


const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'sobre', component: TelaSobreComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'login', component:  TelaModeradorLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
