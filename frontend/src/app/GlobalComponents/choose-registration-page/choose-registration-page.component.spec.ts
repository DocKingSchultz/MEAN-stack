import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRegistrationPageComponent } from './choose-registration-page.component';

describe('ChooseRegistrationPageComponent', () => {
  let component: ChooseRegistrationPageComponent;
  let fixture: ComponentFixture<ChooseRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
