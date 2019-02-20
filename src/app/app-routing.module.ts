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
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'support-locations', loadChildren: './support-locations/support-locations.module#SupportLocationsPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'cases', loadChildren: './cases/cases.module#CasesPageModule' },
  { path: 'how-to-use', loadChildren: './how-to-use/how-to-use.module#HowToUsePageModule' },
  { path: 'definition', loadChildren: './definition/definition.module#DefinitionPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'ref', loadChildren: './ref/ref.module#RefPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
