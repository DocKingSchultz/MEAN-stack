import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorJobsComponent } from './administrator-jobs.component';

describe('AdministratorJobsComponent', () => {
  let component: AdministratorJobsComponent;
  let fixture: ComponentFixture<AdministratorJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
