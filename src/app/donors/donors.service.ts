import { Injectable } from '@angular/core';
import { Donor } from './donor.model';

@Injectable({
  providedIn: 'root',
})
export class DonorsService {
  private donors: Donor[] = [
    {
      id: '1',
      avatar:'assets/images/avatar.png',
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'A+',
      donorName: 'Vijay',
      lastDonatedBy: '20 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
    {
      id: '2',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'AB+',
      donorName: 'Ashley',
      lastDonatedBy: '25 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
    {
      id: '3',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'O+',
      donorName: 'Athira',
      lastDonatedBy: '15 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
    {
      id: '4',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'B+',
      donorName: 'Ajesh',
      lastDonatedBy: '10 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
    {
      id: '5',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'AB+',
      donorName: 'Aneesh',
      lastDonatedBy: '20 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
    {
      id: '6',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      donorBloodGroup: 'A+',
      donorName: 'Gouri',
      lastDonatedBy: '40 days Before',
      phoneNumber: '+91 9567822690',
      emailId: 'test@gmail.com',
    },
  ];

  constructor() {}
  getAllDonors() {
    return [...this.donors];
  }
  getDonor(donorId: string) {
    return {
      ...this.donors.find((donor) => {
      return donor.id===donorId;
    })
  };
  }
  deleteDonor(donorId: string){
    this.donors=this.donors.filter((donor) => {
      return donor.id!==donorId;
    })
  };
}
