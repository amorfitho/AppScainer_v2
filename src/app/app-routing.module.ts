import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {noIngresadoGuard} from './no-ingresado.guard';
import {ingresadoGuard} from './ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
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
    canActivate: [noIngresadoGuard]
  },
  {  
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'recu',
    loadChildren: () => import('./recu/recu.module').then( m => m.RecuPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'ini',
    loadChildren: () => import('./ini/ini.module').then( m => m.IniPageModule),
    canActivate: [ingresadoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule),
    canActivate: [noIngresadoGuard]
  },
  {
    path: 'crud-usuarios',
    loadChildren: () => import('./crud-usuarios/crud-usuarios.module').then( m => m.CrudUsuariosPageModule),
    canActivate: [ingresadoGuard]
  },  {
    path: 'crud-modifi',
    loadChildren: () => import('./crud-modifi/crud-modifi.module').then( m => m.CrudModifiPageModule)
  },


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
