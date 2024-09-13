import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {noIngresadoGuard} from './no-ingresado.guard';
import {ingresadoGuard} from './ingresado.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    data: { animation: 'HomePage' },
    canActivate: [noIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    data: { animation: 'LoginPage' },
    canActivate: [noIngresadoGuard]
  },
  {  
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule),
    data: { animation: 'RegisPage' },
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'recu',
    loadChildren: () => import('./recu/recu.module').then( m => m.RecuPageModule),
    data: { animation: 'RecuPage' },
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'ini',
    loadChildren: () => import('./ini/ini.module').then( m => m.IniPageModule),
    data: { animation: 'IniPage' },
    canActivate: [ingresadoGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
