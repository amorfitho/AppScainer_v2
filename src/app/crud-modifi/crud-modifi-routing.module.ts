import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudModifiPage } from './crud-modifi.page';

const routes: Routes = [
  {
    path: '',
    component: CrudModifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudModifiPageRoutingModule {}
