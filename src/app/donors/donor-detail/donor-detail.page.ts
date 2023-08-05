import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { DonorsService } from '../donors.service';
import { Donor } from '../donor.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-donor-detail',
  templateUrl: './donor-detail.page.html',
  styleUrls: ['./donor-detail.page.scss'],
})
export class DonorDetailPage implements OnInit {
  donor?: Donor;

  constructor( private activateRoute:ActivatedRoute,
    private donorService:DonorsService,
    private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap=>{
if(!paramMap.has('donorId')){
  this.router.navigate(['/donors']);
  return;
}
const donorsId=paramMap.get('donorId')!;
this.donor=this.donorService.getDonor(donorsId);
    });
  }
  onDeleteDonor(){
    this.alertCtrl.create({header:'Are you sure?', message:'Do you really want to delete the donor?',
    buttons:[{
      text:'Cancel',
      role:'cancel'
    },{
      text:'Delete',
      handler:()=>{
        this.donorService.deleteDonor(this.donor?.id!);
    this.router.navigate(['/donors']);
      }
    }]
  }).then(alertEl=>{
    alertEl.present();
  })
    
  }

}
