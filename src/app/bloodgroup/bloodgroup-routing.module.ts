import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodgroupPage } from './bloodgroup.page';

const routes: Routes = [
  {
    path: '',
    component: BloodgroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodgroupPageRoutingModule {}
