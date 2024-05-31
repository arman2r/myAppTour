import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent } from '@ionic/angular/standalone'; 
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonContent, IonButtons, HeaderComponent]
})
export class HomePage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Experiencias',
    search: true
  }

  constructor() {
    
  }

  ngOnInit() {
  }

}
