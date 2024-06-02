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
export class HeaderComponent implements OnInit {

  @Input({required: true}) headerProps!: headerProperties;
  previousRoute: string = '/';
  onOpenSearch = true;
  
  constructor(private router: Router) {
    addIcons({search});

     
  }

  ngOnInit() {
    // Suscribirse al evento de cambio de ruta
    this.router.events.subscribe(event => {
      this.previousRoute = '';
      if (event instanceof NavigationEnd) {
        // Lógica para detectar cambio de ruta aquí
        console.log('Ruta cambiada:', event.url);
        const getRout = event.url.substring(0, event.url.lastIndexOf('/'));
        if(event.url !== '/'){
          this.previousRoute = getRout
        } else {
          this.previousRoute = './'
        }
        console.log('Ruta cambiada 2:', this.previousRoute);
      }
    });
  }

  goBack() {
    let currentUrl = this.router.url;
    let parts = currentUrl.split('/');
    parts.pop(); // Eliminar la última parte de la URL
    let newUrl = parts.join('/'); // Reconstruir la URL sin la última parte
    this.router.navigateByUrl(newUrl);
  } 

  toggleSearch(){
    this.onOpenSearch = !this.onOpenSearch;
  }
 

}
