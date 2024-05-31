import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonMenu, IonMenuButton, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; 
import {search} from 'ionicons/icons';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonMenuButton, IonButton, IonMenu, IonHeader, IonTitle, IonToolbar, NgClass, IonSearchbar, FormsModule, IonBackButton]
})
export class HeaderComponent {

  @Input({required: true}) headerProps!: headerProperties;
  previousRoute: string = './';
  onOpenSearch = true;
  
  constructor(private router: Router) {
    addIcons({search});

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          console.log('entro aqui');
          this.previousRoute = this.router.url; // Store the current route
      }
    });
  }

  toggleSearch(){
    this.onOpenSearch = !this.onOpenSearch;
  }
 

}
