import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-detail-experience',
  templateUrl: './detail-experience.page.html',
  styleUrls: ['./detail-experience.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class DetailExperiencePage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Prado de en sueño',
    search: false
  }

  constructor() { }

  ngOnInit() {
  }

}
