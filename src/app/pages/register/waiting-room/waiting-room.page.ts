import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonGrid, IonCol, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.page.html',
  styleUrls: ['./waiting-room.page.scss'],
  standalone: true,
  imports: [IonText, IonRow, IonContent, IonGrid, IonRow, IonCol, CommonModule, FormsModule]
})
export class waitingRoomPage {

  constructor() { }
 

}
