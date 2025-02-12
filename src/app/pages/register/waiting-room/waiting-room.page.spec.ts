import { ComponentFixture, TestBed } from '@angular/core/testing';
import { waitingRoomPage } from './waiting-room.page';

describe('waitingRoomPage', () => {
  let component: waitingRoomPage;
  let fixture: ComponentFixture<waitingRoomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(waitingRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
