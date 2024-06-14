import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonCol, IonContent, IonHeader, IonInput, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { headerProperties } from 'src/app/interfaces/header.interface';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.page.html',
  styleUrls: ['./confirm-email.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonInput, CommonModule, FormsModule, HeaderComponent, IonText, FormsModule, ReactiveFormsModule]
})
export class ConfirmEmailPage implements OnInit {

  @ViewChild('firstField', { static: true }) firstField!: IonInput;
  @ViewChild('secondField', { static: true }) secondField!: IonInput;
  @ViewChild('thirdField', { static: true }) thirdField!: IonInput;
  @ViewChild('fourField', { static: true }) fourField!: IonInput;
  @ViewChild('fiveField', { static: true }) fiveField!: IonInput;
  @ViewChild('sixField', { static: true }) sixField!: IonInput;

  private lastKeyPressed: string = '';
  private elInput!: IonInput;

  headerProps: headerProperties = {
    pageTitle: 'Confirmar Correo',
    search: false
  }

  constructor() { }

  ngOnInit() {
  }

  codeVerify(event: Event, field?: IonInput) {
    console.log(event, field)

    // Verificar si la última tecla presionada es "Backspace"
    const isBackspacePressed = this.lastKeyPressed === 'Backspace';
    console.log('Backspace pressed:', isBackspacePressed);
    if (isBackspacePressed) {
      this.elInput.setFocus();
    } else {
      field?.setFocus()
    }

    // Reiniciar la última tecla presionada
    this.lastKeyPressed = '';


  }

  getKey(event: KeyboardEvent, field?: IonInput) {
    console.log(event.target)

    const inputElement = event.target as HTMLInputElement;

    const inputValue = inputElement.value;

    const isEmpty = !inputValue || inputValue.trim() === '';
    

    const isBackspacePressed = event.key === 'Backspace';
    console.log('Input is empty:', isEmpty, isBackspacePressed);
    if (isEmpty && isBackspacePressed) {
      field?.setFocus()
    }

    this.lastKeyPressed = event.key;
    this.elInput = field as IonInput
  }

}
