import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-individual-information',
  templateUrl: './individual-information.page.html',
  styleUrls: ['./individual-information.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IndividualInformationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
