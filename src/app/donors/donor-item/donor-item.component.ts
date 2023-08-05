import { Component, Input, OnInit } from '@angular/core';
import { Donor } from '../donor.model';

@Component({
  selector: 'app-donor-item',
  templateUrl: './donor-item.component.html',
  styleUrls: ['./donor-item.component.scss'],
})
export class DonorItemComponent  implements OnInit {
@Input() donorItem?:Donor;
  constructor() { }

  ngOnInit() {}

}
