import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRippleEffect, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonMenu, IonToolbar, IonCol, IonHeader, IonTitle, IonRow, IonContent, IonMenuToggle, IonButton, IonItem, IonAvatar, IonLabel, IonText, IonList, IonIcon, IonRippleEffect]
})
export class MenuComponent  implements OnInit {
  menuType: string = 'reveal';
  constructor() { }

  ngOnInit() {}

}
