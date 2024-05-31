import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent } from '@ionic/angular/standalone'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonContent, IonButtons]
})
export class HomePage implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

}
