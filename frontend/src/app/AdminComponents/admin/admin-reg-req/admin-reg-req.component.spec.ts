import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegReqComponent } from './admin-reg-req.component';

describe('AdminRegReqComponent', () => {
  let component: AdminRegReqComponent;
  let fixture: ComponentFixture<AdminRegReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
