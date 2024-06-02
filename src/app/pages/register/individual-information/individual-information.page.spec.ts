import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndividualInformationPage } from './individual-information.page';

describe('IndividualInformationPage', () => {
  let component: IndividualInformationPage;
  let fixture: ComponentFixture<IndividualInformationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
