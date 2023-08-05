import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloodgroupPage } from './bloodgroup.page';

describe('BloodgroupPage', () => {
  let component: BloodgroupPage;
  let fixture: ComponentFixture<BloodgroupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BloodgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
