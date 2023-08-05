import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'bloodgroup',
    pathMatch: 'full'
  },
  {
    path: 'bloodgroup',
    loadChildren: () => import('./bloodgroup/bloodgroup.module').then( m => m.BloodgroupPageModule)
  },
  {
    path: 'donors',
    children:[{
      path: '',
      loadChildren: () => import('./donors/donors.module').then( m => m.DonorsPageModule)
    },
    {
      path: ':donorId',
    loadChildren: () => import('./donors/donor-detail/donor-detail.module').then( m => m.DonorDetailPageModule)
    }
  ]
  },
  {
    path: 'donors',
    loadChildren: () => import('./donors/donors.module').then( m => m.DonorsPageModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
