import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonCardTitle, IonCardHeader, IonCardSubtitle, IonLabel, IonItem, IonList, IonThumbnail, IonText, IonNote, IonFooter } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { CarouselDestinationComponent } from "../../components/carousel-destination/carousel-destination.component";
import { BannerDetailComponent } from './components/banner-detail/banner-detail.component';
import { addIcons } from 'ionicons';
import { busOutline, timeOutline, heart, cartOutline } from 'ionicons/icons';
import { CarruselItemComponent } from "./components/carrusel-item/carrusel-item.component";

@Component({
  selector: 'app-detail-experience',
  templateUrl: './detail-experience.page.html',
  styleUrls: ['./detail-experience.page.scss'],
  standalone: true,
  imports: [IonFooter,
    IonNote,
    IonText,
    IonList,
    IonItem,
    IonLabel,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonCol,
    IonRow,
    IonGrid,
    IonCardContent,
    IonCard,
    IonIcon,
    IonFabButton,
    IonFab,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    CarouselDestinationComponent,
    BannerDetailComponent,
    IonThumbnail,
    CarruselItemComponent
  ]
})
export class DetailExperiencePage implements AfterViewInit {

  headerProps: headerProperties = {
    pageTitle: 'Prado de en sueño',
    search: false
  }

  @ViewChild(IonContent, { static: false }) content: IonContent | undefined;

  lastScrollPosition: boolean = false; 

  isExpanded: boolean = false;

  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            saepe quo, delectus sequi voluptate ab voluptates adipisci impedit
            eius animi cupiditate iusto. Esse temporibus modi laborum!Ex
            exercitationem accusamus quasi.

            Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident
            quidem atque incidunt cumque. Cumque, libero nam accusamus error vel
            blanditiis consectetur, exercitationem fuga tempora quas soluta
            consequatur? Nemo, temporibus unde?`;

  slides = [
    { image: '../../../assets/images/1.jpg', agency: 'Turismo por siempre', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', agency: 'Indra Tour', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/3.jpg', agency: 'Vamonos de tour', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/4.jpg', agency: 'Aviajar', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/2.jpg', agency: 'Viajeros por colombia', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/1.jpg', agency: 'Ecoturismo', title: 'Distrito de Knazawa', beforePrice: 'Antes: $23.000.000', nowPrice: 'Ahora: $19.990.000 USD', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
  ];

  souvenirs = [
    { image: '../../../assets/images/cafe.png', title: 'Cafe 100% colombiano', beforePrice: '', nowPrice: '5.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/gato-tejada.webp', title: 'Gato tejada', beforePrice: '', nowPrice: '14.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/llaveros.jpg', title: 'Llaveros en cuero y madera', beforePrice: '', nowPrice: '6.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/iman-de-nevera.webp', title: 'Iman de nevera de salento', beforePrice: '', nowPrice: '8.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/flores.jpg', title: 'Destaca tus momentos', beforePrice: '', nowPrice: '10.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/dulces-de-cafe.png', title: 'Dulces de cafe', beforePrice: '', nowPrice: '8.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
    { image: '../../../assets/images/chocolate.jpg', title: 'Chocolate con sabor a colombia', beforePrice: '', nowPrice: '10.000', description: 'En la Kanazawa actual encontrarás arte y arquitectura de estilo tradicional y moderno y una gran variedad de artesanías japonesas.' },
  ];

  effectSlider = 'fade';

  constructor() {
    addIcons({ heart, timeOutline, busOutline, cartOutline });
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }

  ngAfterViewInit() {
    // Espera un momento para asegurar que el DOM esté listo
    setTimeout(() => {
      // Accede al shadow DOM de ion-content
      const innerScrollDiv = (this.content as any).el.shadowRoot.querySelector('.inner-scroll');

      if (innerScrollDiv) {
        innerScrollDiv.addEventListener('scroll', () => {
          const scrollTop = innerScrollDiv.scrollTop;
          const scrollHeight = innerScrollDiv.scrollHeight;
          const clientHeight = innerScrollDiv.clientHeight;

          // Verifica si el scroll ha llegado al final
          if (scrollTop + clientHeight >= scrollHeight - 100) {
            this.lastScrollPosition = true
          } else {
            this.lastScrollPosition = false
          }
        });
      }
    }, 100);
  }

}
