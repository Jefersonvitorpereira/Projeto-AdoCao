import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TelaSobreComponent } from './tela-sobre/tela-sobre.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaModeradorLoginComponent } from './tela-moderador-login/tela-moderador-login.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { ListCaesComponent } from './list-caes/list-caes.component';

const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'sobre', component: TelaSobreComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'login', component: TelaModeradorLoginComponent },
  { path: 'caes', component: ListCaesComponent },
  { path: 'contato', component: ContateNosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
