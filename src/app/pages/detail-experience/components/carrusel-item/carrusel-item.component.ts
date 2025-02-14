import { IonCard } from '@ionic/angular/standalone';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-item',
  templateUrl: './carrusel-item.component.html',
  styleUrls: ['./carrusel-item.component.scss'],
  standalone: true,
  imports: [IonCard]
})
export class CarruselItemComponent {
  @Input() slide: any;
  constructor() { }
}
