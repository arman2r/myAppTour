import { IonContent, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CarouselDestinationComponent } from '../carousel-destination/carousel-destination.component';
import { ListDestinationComponent } from '../list-destination/list-destination.component';
import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons'; 
import {options} from 'ionicons/icons';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  standalone: true,
  imports: [ 
    CarouselDestinationComponent, 
    ListDestinationComponent, 
    IonIcon, IonContent, NgIf, IonButton, IonButtons
   ]
})
export class DestinationsComponent  implements OnInit {
  isListView: boolean = true;

  constructor(
    
  ) { 
    addIcons({options});
  }

  ngOnInit() {}

  toggleView() {
    this.isListView = !this.isListView;
  }

}
