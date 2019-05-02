import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/firebase/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'create-account',
    loadChildren: './pages/create-account/create-account.module#CreateAccountPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule' 
  },
  { 
    path: 'forgot-password',
    loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    loadChildren: './pages/profile/profile.module#ProfilePageModule' 
  },
  {
    path: 'support-locations',
    canActivate: [AuthGuardService],
    loadChildren: './pages/support-locations/support-locations.module#SupportLocationsPageModule' 
  },
  {
    path: 'support',
    canActivate: [AuthGuardService],
    loadChildren: './pages/support/support.module#SupportPageModule'
  },
  {
    path: 'cases',
    canActivate: [AuthGuardService],
    loadChildren: './pages/cases/cases.module#CasesPageModule'
  },
  {
    path: 'how-to-use',
    canActivate: [AuthGuardService],
    loadChildren: './pages/how-to-use/how-to-use.module#HowToUsePageModule'
  },
  {
    path: 'definition',
    canActivate: [AuthGuardService],
    loadChildren: './pages/definition/definition.module#DefinitionPageModule'
  },
  {
    path: 'about',
    canActivate: [AuthGuardService],
    loadChildren: './pages/about/about.module#AboutPageModule'
  },
  {
    path: 'ref',
    canActivate: [AuthGuardService],
    loadChildren: './pages/ref/ref.module#RefPageModule'
  },
  {
    path: 'generic-list-items',
    canActivate: [AuthGuardService],
    loadChildren: './pages/generic-list-items/generic-list-items.module#GenericListItemsPageModule'
  },
  {
    path: 'diag-select-group',
    canActivate: [AuthGuardService],
    loadChildren: './pages/diag-select-group/diag-select-group.module#DiagSelectGroupPageModule'
  },
  {
    path: 'new-case',
    canActivate: [AuthGuardService],
    loadChildren: './pages/new-case/new-case.module#NewCasePageModule' 
  },
  { 
    path: 'change-password', 
    canActivate: [AuthGuardService],
    loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
