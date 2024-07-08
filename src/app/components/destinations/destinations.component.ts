import { IonContent, IonIcon, IonButton, IonButtons, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { Component, Input, OnInit, computed, effect, inject } from '@angular/core';
import { CarouselDestinationComponent } from '../carousel-destination/carousel-destination.component';
import { ListDestinationComponent } from '../list-destination/list-destination.component';
import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { list } from 'ionicons/icons';
import { albums } from 'ionicons/icons'; 


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab,  
    CarouselDestinationComponent, 
    ListDestinationComponent, 
    IonIcon, IonContent, NgIf, IonButton, IonButtons
   ]
})
export class DestinationsComponent  implements OnInit {
  @Input() isListView!: boolean; 

  constructor( 
  ) { 
    addIcons({'list': list, 'albums': albums});
  }

  ngOnInit() { 
  }

  /*toggleView() {
    this.isListView = !this.isListView;
  }*/

}
