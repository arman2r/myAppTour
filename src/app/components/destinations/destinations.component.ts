import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CarouselDestinationComponent } from '../carousel-destination/carousel-destination.component';
import { ListDestinationComponent } from '../list-destination/list-destination.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  standalone: true,
  imports: [ 
    CarouselDestinationComponent, 
    ListDestinationComponent, 
    IonIcon, IonContent, NgIf
   ]
})
export class DestinationsComponent  implements OnInit {
  isListView: boolean = true;
  constructor() { }

  ngOnInit() {}

  toggleView() {
    this.isListView = !this.isListView;
  }

}
