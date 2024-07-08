import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, afterNextRender } from '@angular/core';
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
import { chevronBack, chevronForward, heart } from 'ionicons/icons';
import { SwiperOptions } from 'swiper/types';

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
    { image: '../../../assets/images/1.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/3.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/4.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/3.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },

  ];
  @ViewChild('swiperContainer', { static: false }) swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;


  constructor() {
    addIcons({ 'heart': heart, 'chevron-back': chevronBack, 'chevron-forward': chevronForward }); 
  }

  ngOnInit() {


  }

  ngAfterViewInit(): void {
    // this.imageService.getImages().subscribe((data: string[]) => {
    //   this.images = data;
    //   console.log(this.images)

    // });
    this.swiperParams = {
      slidesPerView: 1,
      effect: 'cards',
      grabCursor: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      /*breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30 
        },
        // when window width is >= 640px
        640: {
          slidesPerView: "auto",
          spaceBetween: 10,
          effect: 'coverflow',
        },
        920: {
          slidesPerView: "auto",
          spaceBetween: 10,
          effect: 'coverflow',
        }
      }*/
      /*autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },*/
      on: {
        init() {
          // Here you can add some functions after initializing the swiper
          console.log('inicia el carrusel')
        },
      },
    };
    setTimeout(() => {
      Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
      this.swiperContainerRef.nativeElement.initialize(); // Init Swiper  
    }, 100);
    
  }

  initializeSwipers() { 
    

  }
}
