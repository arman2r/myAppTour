import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-individual-information',
  templateUrl: './individual-information.page.html',
  styleUrls: ['./individual-information.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonText]
})
export class IndividualInformationPage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Información general',
    search: false
  }

  constructor() { }

  ngOnInit() {
  }

}
