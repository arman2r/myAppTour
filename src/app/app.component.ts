import { Component } from '@angular/core';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { headerProperties } from './interfaces/header.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, MenuComponent, IonContent, HeaderComponent],
})
export class AppComponent {
 
  headerProps: headerProperties = {
    pageTitle: 'Experiencias',
    search: true
  }
  
  constructor() { 
  }
 
}
