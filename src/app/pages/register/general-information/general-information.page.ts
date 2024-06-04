import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonItem, IonRow, IonText, IonTitle, IonToggle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component'; 

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
  standalone: true,
  imports: [IonContent, ReactiveFormsModule, IonHeader, IonTitle, IonToolbar, IonToggle, IonCheckbox, IonButton, CommonModule, FormsModule, HeaderComponent, IonText, IonInput, IonRow, IonCol, IonItem]
})
export class GeneralInformationPage implements OnInit {

  myGeneralFormUser!: FormGroup;

  headerProps: headerProperties = {
    pageTitle: 'Información general',
    search: false
  }

  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev:any) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.myGeneralFormUser = this.formBuilder.group({
      firstName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      email: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.email, Validators.required]],
      phone: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.required]],
      isAgency: [false],
      politics: ['', [Validators.required]],
      infoProcessing: ['', [Validators.required]],
    })
  }

}
