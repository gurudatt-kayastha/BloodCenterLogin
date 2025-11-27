import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaPasswordComponent } from './okta-password.component';

describe('OktaPassword', () => {
  let component: OktaPasswordComponent;
  let fixture: ComponentFixture<OktaPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OktaPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OktaPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
