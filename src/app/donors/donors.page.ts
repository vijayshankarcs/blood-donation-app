import { Component, OnInit } from '@angular/core';
import { Donor } from './donor.model';
import { DonorsService } from './donors.service';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.page.html',
  styleUrls: ['./donors.page.scss'],
})
export class DonorsPage implements OnInit {

  donors: Donor[] = [];
  constructor(private donorService:DonorsService) { }

  ngOnInit() {
   this.donors= this.donorService.getAllDonors();
  }

}
