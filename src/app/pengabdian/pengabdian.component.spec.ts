import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengabdianComponent } from './pengabdian.component';

describe('PengabdianComponent', () => {
  let component: PengabdianComponent;
  let fixture: ComponentFixture<PengabdianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengabdianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengabdianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
