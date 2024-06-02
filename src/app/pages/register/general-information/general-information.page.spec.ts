import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralInformationPage } from './general-information.page';

describe('GeneralInformationPage', () => {
  let component: GeneralInformationPage;
  let fixture: ComponentFixture<GeneralInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
