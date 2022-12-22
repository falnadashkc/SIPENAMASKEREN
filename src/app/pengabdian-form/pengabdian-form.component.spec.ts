import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengabdianFormComponent } from './pengabdian-form.component';

describe('PengabdianFormComponent', () => {
  let component: PengabdianFormComponent;
  let fixture: ComponentFixture<PengabdianFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengabdianFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengabdianFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
