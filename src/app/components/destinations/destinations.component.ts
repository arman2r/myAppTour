import { IonContent, IonIcon, IonButton, IonButtons, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { Component, Input, OnInit, computed, effect, inject } from '@angular/core';
import { CarouselDestinationComponent } from '../carousel-destination/carousel-destination.component';
import { ListDestinationComponent } from '../list-destination/list-destination.component';
import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { list } from 'ionicons/icons';
import { albums } from 'ionicons/icons';
import { DestinationContentToCarouselComponent } from "./destination-content-to-carousel/destination-content-to-carousel.component"; 


@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab,
    CarouselDestinationComponent,
    ListDestinationComponent,
    IonIcon, IonContent, NgIf, IonButton, IonButtons, DestinationContentToCarouselComponent]
})
export class DestinationsComponent {
  @Input() isListView!: boolean; 

  slides = [
    { image: '../../../assets/images/1.jpg', agency: 'Turismo por siempre', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', agency: 'Indra Tour', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/3.jpg', agency: 'Vamonos de tour', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/4.jpg', agency: 'Aviajar', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', agency: 'Viajeros por colombia', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/1.jpg', agency: 'Ecoturismo', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
  ];

  effectSlider = 'cards';

  constructor( 
  ) { 
    addIcons({'list': list, 'albums': albums});
  }

  onUpdate(event: any) {
    console.log('Evento recibido desde el hijo:', event);
    // Puedes realizar alguna acción aquí, como actualizar alguna propiedad o estado en el padre.
  }

  /*toggleView() {
    this.isListView = !this.isListView;
  }*/

}
