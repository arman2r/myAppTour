import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonFabButton, IonGrid, IonCardContent, IonFab, IonIcon, IonCardTitle, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-destination-content-to-carousel',
  templateUrl: './destination-content-to-carousel.component.html',
  styleUrls: ['./destination-content-to-carousel.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonCardTitle, IonIcon, IonFab, IonCardContent, IonGrid, IonFabButton, IonCard,]
})
export class DestinationContentToCarouselComponent {
  @Input() slide: any;

  constructor(private router: Router) { }

  navigateToAgency(agency: string, experience: string) {
    this.router.navigate(['/agencies', agency, experience]);
  }

}
