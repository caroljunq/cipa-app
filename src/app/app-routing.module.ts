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
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'support-locations', loadChildren: './pages/support-locations/support-locations.module#SupportLocationsPageModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportPageModule' },
  { path: 'cases', loadChildren: './pages/cases/cases.module#CasesPageModule' },
  { path: 'how-to-use', loadChildren: './pages/how-to-use/how-to-use.module#HowToUsePageModule' },
  { path: 'definition', loadChildren: './pages/definition/definition.module#DefinitionPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'ref', loadChildren: './pages/ref/ref.module#RefPageModule' },
  { path: 'generic-list-items', loadChildren: './pages/generic-list-items/generic-list-items.module#GenericListItemsPageModule' },
  { path: 'diag-select-group', loadChildren: './pages/diag-select-group/diag-select-group.module#DiagSelectGroupPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
