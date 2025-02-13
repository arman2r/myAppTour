import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonCardTitle, IonCardHeader, IonCardSubtitle, IonLabel, IonItem, IonList, IonThumbnail, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { CarouselDestinationComponent } from "../../components/carousel-destination/carousel-destination.component";
import { BannerDetailComponent } from './components/banner-detail/banner-detail.component';
import { addIcons } from 'ionicons';
import { busOutline, timeOutline, heart } from 'ionicons/icons';

@Component({
  selector: 'app-detail-experience',
  templateUrl: './detail-experience.page.html',
  styleUrls: ['./detail-experience.page.scss'],
  standalone: true,
  imports: [IonText, IonList, IonItem, IonLabel, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton, IonCol, IonRow, IonGrid, IonCardContent, IonCard, IonIcon, IonFabButton, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, CarouselDestinationComponent, BannerDetailComponent, IonThumbnail]
})
export class DetailExperiencePage {

  headerProps: headerProperties = {
    pageTitle: 'Prado de en sueño',
    search: false
  }

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

  effectSlider = 'fade';

  constructor() {
    addIcons({heart,timeOutline,busOutline});
  }

  toggleDescription() {
    this.isExpanded = !this.isExpanded;
  }

}
