import { Component } from '@angular/core';
import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonRouterOutlet, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import {addIcons} from 'ionicons';
import {search} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent, IonContent, IonButtons, IonIcon, IonMenuButton, IonButton, IonMenu, IonHeader, IonTitle, IonToolbar, NgClass, IonSearchbar, FormsModule],
})
export class AppComponent {

  onOpenSearch = true;
  
  constructor() {
    addIcons({search});
  }

  toggleSearch(){
    this.onOpenSearch = !this.onOpenSearch;
  }
}
