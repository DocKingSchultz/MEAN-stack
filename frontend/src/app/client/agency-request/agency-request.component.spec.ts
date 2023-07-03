import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRequestComponent } from './agency-request.component';

describe('AgencyRequestComponent', () => {
  let component: AgencyRequestComponent;
  let fixture: ComponentFixture<AgencyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
