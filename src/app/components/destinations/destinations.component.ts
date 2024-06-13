import { Component, OnInit } from '@angular/core';
import { CarouselDestinationComponent } from '../carousel-destination/carousel-destination.component';
import { ListDestinationComponent } from '../list-destination/list-destination.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  standalone: true,
  imports: [ CarouselDestinationComponent, ListDestinationComponent ]
})
export class DestinationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
