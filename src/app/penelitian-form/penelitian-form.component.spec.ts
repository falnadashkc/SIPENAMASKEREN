import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenelitianFormComponent } from './penelitian-form.component';

describe('PenelitianFormComponent', () => {
  let component: PenelitianFormComponent;
  let fixture: ComponentFixture<PenelitianFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenelitianFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenelitianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
