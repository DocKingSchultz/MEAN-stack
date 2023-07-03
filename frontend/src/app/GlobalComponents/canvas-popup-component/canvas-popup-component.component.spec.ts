import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPopupComponentComponent } from './canvas-popup-component.component';

describe('CanvasPopupComponentComponent', () => {
  let component: CanvasPopupComponentComponent;
  let fixture: ComponentFixture<CanvasPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasPopupComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
