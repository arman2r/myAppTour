import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterBoardPage } from './register-board.page';

describe('RegisterBoardPage', () => {
  let component: RegisterBoardPage;
  let fixture: ComponentFixture<RegisterBoardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
