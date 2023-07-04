import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDescriptionComponent } from './agency-description.component';

describe('AgencyDescriptionComponent', () => {
  let component: AgencyDescriptionComponent;
  let fixture: ComponentFixture<AgencyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
