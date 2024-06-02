import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmPhonePage } from './confirm-phone.page';

describe('ConfirmPhonePage', () => {
  let component: ConfirmPhonePage;
  let fixture: ComponentFixture<ConfirmPhonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
