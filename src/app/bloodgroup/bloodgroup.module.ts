import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

 import { BloodgroupPageRoutingModule } from './bloodgroup-routing.module';

import { BloodgroupPage } from './bloodgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     BloodgroupPageRoutingModule
  ],
  declarations: [BloodgroupPage]
})
export class BloodgroupPageModule {}
