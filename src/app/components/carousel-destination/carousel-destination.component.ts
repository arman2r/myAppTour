import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, afterNextRender, signal, Input, Output, EventEmitter, ContentChild, TemplateRef, SimpleChanges } from '@angular/core';
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
import { chevronBack, chevronForward, heart, add, cartOutline, paperPlaneOutline } from 'ionicons/icons';
import { SwiperOptions } from 'swiper/types';
import { Router } from '@angular/router';

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
export class CarouselDestinationComponent implements AfterViewInit {
  @Input() items: any[] = [];  // Array de objetos
  @Input() effect: string | null = '';  // Efecto de transición
  @Input() spaceItems?: number = 30;  // Efecto de transición
  @Input() slidePerView?: number = 1;  // items por vista
  @Input() isAutoPlay?: boolean = false;  // autoplay
  @Output() signalUpdate = new EventEmitter<any>();  // Evento para comunicar con el padre
  @ContentChild(TemplateRef, { static: false }) contentTemplate!: TemplateRef<any>;
  @ViewChild('swiperContainer', { static: false }) swiperContainerRef!: ElementRef;
  public swiperParams!: SwiperOptions;


  constructor(private router: Router) {
    addIcons({ heart, paperPlaneOutline, cartOutline, add, chevronBack, chevronForward });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.carouselInitFn();
  }

  ngAfterViewInit(): void {
    // this.imageService.getImages().subscribe((data: string[]) => {
    //   this.images = data;
    //   console.log(this.images)

    // });
    this.carouselInitFn();
  }

  carouselInitFn() {
    this.swiperParams = {
      slidesPerView: this.slidePerView,
      slidesPerGroup: 1,      
      grabCursor: true,
      spaceBetween: this.spaceItems,
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

    if (this.isAutoPlay) {
      this.swiperParams.autoplay = {
        delay: 5000,
        disableOnInteraction: true,
      };
      this.swiperParams.slidesPerView = this.slidePerView;
    }

    if(this.effect !== null) {
      this.swiperParams.effect = this.effect;
    }

    setTimeout(() => {
      Object.assign(this.swiperContainerRef.nativeElement, this.swiperParams); // Add parameters to the Swiper
      this.swiperContainerRef.nativeElement.initialize(); // Init Swiper  
    }, 100);
  }

  updateData() {
    const dataToSendBack = { updated: true, effectApplied: this.effect, slidePerView: this.slidePerView, isAutoPlay: this.isAutoPlay };
    this.signalUpdate.emit(dataToSendBack);
  }

}
