import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudModifiPageRoutingModule } from './crud-modifi-routing.module';

import { CrudModifiPage } from './crud-modifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudModifiPageRoutingModule
  ],
  declarations: [CrudModifiPage]
})
export class CrudModifiPageModule {}
