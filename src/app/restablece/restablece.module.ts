import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecePageRoutingModule } from './restablece-routing.module';

import { RestablecePage } from './restablece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecePageRoutingModule
  ],
  declarations: [RestablecePage]
})
export class RestablecePageModule {}
