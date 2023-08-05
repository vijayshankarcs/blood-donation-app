import { Component, OnInit } from '@angular/core';
import { BloodGroup } from './bloodgroup.model';

@Component({
  selector: 'app-bloodgroup',
  templateUrl: './bloodgroup.page.html',
  styleUrls: ['./bloodgroup.page.scss'],
})
export class BloodgroupPage implements OnInit {
bloodGroups:BloodGroup[]=[
  {
    id:'1',
    bloddGroupName:"A+"
  },
  {
    id:'3',
    bloddGroupName:"B+"
  },
  {
    id:'4',
    bloddGroupName:"B-"
  },
  {
    id:'5',
    bloddGroupName:"AB+"
  },
  {
    id:'6',
    bloddGroupName:"AB-"
  },
  {
    id:'7',
    bloddGroupName:"O+"
  },
  {
    id:'8',
    bloddGroupName:"O-"
  },

];
  constructor() { }

  ngOnInit() {
  }

}
