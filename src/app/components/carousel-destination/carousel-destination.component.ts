import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from '@ionic/angular/standalone';
import Swiper from 'swiper';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-carousel-destination',
  templateUrl: './carousel-destination.component.html',
  styleUrls: ['./carousel-destination.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, IonContent,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonCardTitle
  ],
  providers: [
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselDestinationComponent implements OnInit, AfterViewInit {
  images: string[] = [];
  slides = [
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: "Here's a small text description for the card content. Nothing more, nothing less." },

  ];

  constructor() {
    addIcons({ heart })
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // this.imageService.getImages().subscribe((data: string[]) => {
    //   this.images = data;
    //   console.log(this.images)

    // });
    this.initializeSwipers();
  }

  initializeSwipers() {
    new Swiper('.mySwiper', {
      grabCursor: true,
      effect: 'cards',
      cardsEffect: {
        slideShadows: true,
      },

      // creativeEffect: {
      //   prev: {
      //     shadow: true,
      //     translate: [0, 0, -400],
      //   },
      //   next: {
      //     translate: ['100%', 0, 0],
      //   },
      // },
    });

  }
}
