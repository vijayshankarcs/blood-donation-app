import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonorDetailPage } from './donor-detail.page';

describe('DonorDetailPage', () => {
  let component: DonorDetailPage;
  let fixture: ComponentFixture<DonorDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
