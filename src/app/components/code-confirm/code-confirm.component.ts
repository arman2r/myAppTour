import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCol, IonInput, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-code-confirm',
  templateUrl: './code-confirm.component.html',
  styleUrls: ['./code-confirm.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, IonRow, IonCol, IonInput]
})
export class CodeConfirmComponent  implements OnInit {

  codeFormConfirm!: FormGroup;
  @Output() codeConfirmIsValid = new EventEmitter<boolean>();

  @ViewChild('firstField', { static: true }) firstField!: IonInput;
  @ViewChild('secondField', { static: true }) secondField!: IonInput;
  @ViewChild('thirdField', { static: true }) thirdField!: IonInput;
  @ViewChild('fourField', { static: true }) fourField!: IonInput;
  @ViewChild('fiveField', { static: true }) fiveField!: IonInput;
  @ViewChild('sixField', { static: true }) sixField!: IonInput;

  private lastKeyPressed: string = '';
  private elInput!: IonInput;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.codeFormConfirm = this.fb.group({ 
      firstField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      secondField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      thirdField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      fourField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      fiveField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
      sixField: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]] 
    })

    this.emitValidity();

    this.codeFormConfirm.statusChanges.subscribe(status => { 
      this.emitValidity();
    });
  }

  emitValidity() {
    this.codeConfirmIsValid.emit(this.codeFormConfirm.valid); 
  }

  codeVerify(event: Event, field?: IonInput) {
    //console.log(event, field)
    const input = event.target as HTMLInputElement;
    // Verificar si la última tecla presionada es "Backspace"
    const isBackspacePressed = this.lastKeyPressed === 'Backspace';
    if (input.value.length > 1) {
      input.value = input.value.charAt(0);  // Si hay más de un carácter, mantener solo el primero
    }
    //console.log('Backspace pressed:', isBackspacePressed);
    if (isBackspacePressed) {
      this.elInput.setFocus();
    } else {
      field?.setFocus()
    }

    // Reiniciar la última tecla presionada
    this.lastKeyPressed = '';
 

  }

  getKey(event: KeyboardEvent, field?: IonInput) {
    //console.log(event.target)

    const inputElement = event.target as HTMLInputElement;

    const inputValue = inputElement.value;

    const isEmpty = !inputValue || inputValue.trim() === '';


    const isBackspacePressed = event.key === 'Backspace';
    //console.log('Input is empty:', isEmpty, isBackspacePressed);
    if (isEmpty && isBackspacePressed) {
      field?.setFocus()
    }

    this.lastKeyPressed = event.key;
    this.elInput = field as IonInput
  }
 
   

}
