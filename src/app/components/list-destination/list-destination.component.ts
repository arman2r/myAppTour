import { Component, OnInit } from '@angular/core';
import { IonCard,
  IonCardContent, 
  IonCardHeader,
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent
 } from '@ionic/angular/standalone';


@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonCardContent, 
    IonCardSubtitle, IonCardTitle, IonCardHeader,
    IonInfiniteScroll,  IonInfiniteScrollContent, 
    ],
})
export class ListDestinationComponent  implements OnInit {
  items: string[] = [];
  constructor() { }

  

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item ${i}`);
    }
  }

}
