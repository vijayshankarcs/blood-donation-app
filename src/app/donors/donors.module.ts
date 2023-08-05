import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorsPageRoutingModule } from './donors-routing.module';

import { DonorsPage } from './donors.page';
import { DonorItemComponent } from './donor-item/donor-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorsPageRoutingModule
  ],
  declarations: [DonorsPage, DonorItemComponent]
})
export class DonorsPageModule {}
