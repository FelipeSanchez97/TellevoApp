import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecePage } from './restablece.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecePageRoutingModule {}
