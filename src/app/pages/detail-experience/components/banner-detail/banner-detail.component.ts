import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonFab, IonButton, IonIcon, IonFabButton, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-banner-detail',
  templateUrl: './banner-detail.component.html',
  styleUrls: ['./banner-detail.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonFabButton, IonIcon, IonButton, IonFab, IonCard,],
})
export class BannerDetailComponent {
  @Input() slide: any;
  constructor() { }


}
