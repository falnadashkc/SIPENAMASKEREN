import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenelitianDetailsComponent } from './penelitian-details.component';

describe('PenelitianDetailsComponent', () => {
  let component: PenelitianDetailsComponent;
  let fixture: ComponentFixture<PenelitianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenelitianDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenelitianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
