import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgnecyRegistrationComponent } from './agnecy-registration.component';

describe('AgnecyRegistrationComponent', () => {
  let component: AgnecyRegistrationComponent;
  let fixture: ComponentFixture<AgnecyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgnecyRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgnecyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
