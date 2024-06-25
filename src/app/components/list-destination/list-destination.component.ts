import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCard,
  IonCardContent, 
  IonCardHeader,
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList
 } from '@ionic/angular/standalone';

 interface Item {
  imgSrc: string;
  title: string;
  oldPrice: string;
  newPrice: string;
}

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonCardContent, 
    IonCardSubtitle, IonCardTitle, IonCardHeader,
    IonInfiniteScroll,  IonInfiniteScrollContent, 
    IonList, NgFor, IonItem
    ],
})
export class ListDestinationComponent  implements OnInit {
  items: Item[] = [];
  itemsPerPage = 10;


  constructor() { }

  ngOnInit() {
    this.loadInitialData();
  }

  createItem() {
    return {
      imgSrc: '../../../assets/images/1.jpg',
      title: 'Distrito de Knazawa',
      oldPrice: '$23.000.000',
      newPrice: '$19.990.000 USD'
    };
  }

  loadInitialData() {
    for (let i = 0; i < this.itemsPerPage; i++) {
      this.items.push(this.createItem());
    }
    console.log('todos los items', this.items);
  }

  loadData(event: CustomEvent) {
    setTimeout(() => {
      for (let i = 0; i < this.itemsPerPage; i++) {
        this.items.push(this.createItem());
      }
      console.log('Items after load more:', this.items); // Debug: Verifica que se estén añadiendo más items
      (event.target as HTMLIonInfiniteScrollElement).complete();

      // Disable infinite scroll if you reach the end of your data
      if (this.items.length >= 100) { // example condition
        (event.target as HTMLIonInfiniteScrollElement).disabled = true;
      }
    }, 500);
  }

}
