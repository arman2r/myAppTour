import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonRow, IonCol, IonItem, IonSelect, IonSelectOption, IonInput, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonIcon, IonFooter, IonToggle, IonAlert, IonLabel, IonAvatar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-register-board',
  templateUrl: './register-board.page.html',
  styleUrls: ['./register-board.page.scss'],
  standalone: true,
  imports: [
    IonLabel, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonContent,
    HeaderComponent,
    IonText,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonModal,
    IonButton,
    IonIcon,
    IonFooter,
    IonAlert,
    IonAvatar
  ]
})
export class RegisterBoardPage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Board de registro',
    search: false
  }

  constructor() { }

  ngOnInit() {
  }

}
