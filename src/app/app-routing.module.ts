import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'locais', loadChildren: './locais/locais.module#LocaisPageModule' },
  { path: 'apoio', loadChildren: './apoio/apoio.module#ApoioPageModule' },
  { path: 'casos', loadChildren: './casos/casos.module#CasosPageModule' },
  { path: 'como-usar', loadChildren: './como-usar/como-usar.module#ComoUsarPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
