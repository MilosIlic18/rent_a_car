import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegistrationListComponent } from './car-registration-list.component';

describe('CarRegistrationListComponent', () => {
  let component: CarRegistrationListComponent;
  let fixture: ComponentFixture<CarRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRegistrationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
