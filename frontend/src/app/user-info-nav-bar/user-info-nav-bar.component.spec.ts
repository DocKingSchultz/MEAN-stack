import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoNavBarComponent } from './user-info-nav-bar.component';

describe('UserInfoNavBarComponent', () => {
  let component: UserInfoNavBarComponent;
  let fixture: ComponentFixture<UserInfoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
