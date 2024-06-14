import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CarouselService } from 'src/app/shared/service/carousel.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel-destination',
  templateUrl: './carousel-destination.component.html',
  styleUrls: ['./carousel-destination.component.scss'],
  standalone: true,
  imports: [ CommonModule, HttpClientModule, IonContent ],
  providers: [
    HttpClientModule
  ]
})
export class CarouselDestinationComponent implements OnInit, AfterViewInit {
  images: string[] = [];

  constructor(
   private imageService: CarouselService
  ) { }

  ngOnInit() {}

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
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
    });

  }
}
