import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeNewJobComponent } from './arrange-new-job.component';

describe('ArrangeNewJobComponent', () => {
  let component: ArrangeNewJobComponent;
  let fixture: ComponentFixture<ArrangeNewJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangeNewJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrangeNewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
