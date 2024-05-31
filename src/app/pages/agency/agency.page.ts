import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AgencyPage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Agencia en particular',
    search: false
  }

  constructor() { }

  ngOnInit() {
  }

}
