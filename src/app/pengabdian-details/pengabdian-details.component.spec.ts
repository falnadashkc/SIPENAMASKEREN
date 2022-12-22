import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengabdianDetailsComponent } from './pengabdian-details.component';

describe('PengabdianDetailsComponent', () => {
  let component: PengabdianDetailsComponent;
  let fixture: ComponentFixture<PengabdianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengabdianDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengabdianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
