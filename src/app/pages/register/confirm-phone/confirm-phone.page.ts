import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CodeConfirmComponent } from 'src/app/components/code-confirm/code-confirm.component';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { RouterLink } from '@angular/router';
import { CountDownComponent } from 'src/app/components/count-down/count-down.component';

@Component({
  selector: 'app-confirm-phone',
  templateUrl: './confirm-phone.page.html',
  styleUrls: ['./confirm-phone.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    HeaderComponent, 
    IonRow, 
    IonCol, 
    IonText, 
    IonButton,
    IonFooter,
    CodeConfirmComponent,
    RouterLink,
    CountDownComponent
  ]
})
export class ConfirmPhonePage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Confirmar Teléfono',
    search: false
  }

  @ViewChild('countdown') countdown!: CountDownComponent;


  expiredTime = false;

  startTime = 1;

  isValidCode = false; 

  constructor() { }

  ngOnInit() { }

  isValidConfirm(isValid: boolean){
    console.log('desde el padre',isValid)
    this.isValidCode = isValid;
  } 

  handleTimeExpired() {
    console.log('The countdown has finished.');
    this.expiredTime = true
    // Aquí puedes manejar la lógica cuando el tiempo se agote
  }

  resetCountdown() {
    this.countdown.resetTimer();
  }
}
