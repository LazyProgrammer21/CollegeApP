import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBATopupPage } from './bba-topup.page';

const routes: Routes = [
  {
    path: '',
    component: BBATopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBATopupPageRoutingModule {}
