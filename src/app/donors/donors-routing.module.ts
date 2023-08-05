import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorsPage } from './donors.page';

const routes: Routes = [
  {
    path: '',
    component: DonorsPage
  },
  {
    path: 'donor-detail',
    loadChildren: () => import('./donor-detail/donor-detail.module').then( m => m.DonorDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorsPageRoutingModule {}
