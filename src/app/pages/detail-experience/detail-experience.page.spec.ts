import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailExperiencePage } from './detail-experience.page';

describe('DetailExperiencePage', () => {
  let component: DetailExperiencePage;
  let fixture: ComponentFixture<DetailExperiencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
