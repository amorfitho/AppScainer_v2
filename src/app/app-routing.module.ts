import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {  
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule)
  },  {
    path: 'recu',
    loadChildren: () => import('./recu/recu.module').then( m => m.RecuPageModule)
  },
  {
    path: 'ini',
    loadChildren: () => import('./ini/ini.module').then( m => m.IniPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
