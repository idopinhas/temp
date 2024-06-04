import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedUsersComponent } from './allowed-users.component';

describe('AllowedUsersComponent', () => {
  let component: AllowedUsersComponent;
  let fixture: ComponentFixture<AllowedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllowedUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllowedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
