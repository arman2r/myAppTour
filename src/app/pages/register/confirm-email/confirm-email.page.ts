import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonInput, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { CodeConfirmComponent } from 'src/app/components/code-confirm/code-confirm.component';
import { RouterLink } from '@angular/router';
import { CountDownComponent } from 'src/app/components/count-down/count-down.component';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.page.html',
  styleUrls: ['./confirm-email.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonFooter, 
    IonHeader, 
    IonTitle, 
    RouterLink, 
    IonToolbar, 
    IonRow, 
    IonCol, 
    IonButton, 
    CommonModule, 
    HeaderComponent, 
    IonText, 
    CodeConfirmComponent,
    CountDownComponent  
  ]
})
export class ConfirmEmailPage implements OnInit {

  isValidCode = false;
  
  headerProps: headerProperties = {
    pageTitle: 'Confirmar Correo',
    search: false
  }

  @ViewChild('countdown') countdown!: CountDownComponent;

  expiredTime = false;

  startTime = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

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
