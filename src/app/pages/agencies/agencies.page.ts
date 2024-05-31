import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AgenciesPage implements OnInit {
  headerProps: headerProperties = {
    pageTitle: 'Agencias',
    search: true
  }
  constructor() { }

  ngOnInit() {
  }

}
