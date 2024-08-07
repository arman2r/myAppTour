import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent } from '@ionic/angular/standalone'; 
import { DestinationsComponent } from 'src/app/components/destinations/destinations.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonContent, IonButtons, HeaderComponent, DestinationsComponent]
})
export class HomePage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Experiencias',
    search: true,
    toggleView: true
  }
  sharedValue: boolean = true;

  constructor() {
    
  }

  ngOnInit() {
  }  

  onValueChanged(value: boolean): void {
    this.sharedValue = !value;
  }

}
