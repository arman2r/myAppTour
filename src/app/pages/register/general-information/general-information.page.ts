import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonItem, IonRow, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonToggle, IonCheckbox, CommonModule, FormsModule, HeaderComponent, IonText, IonInput, IonRow, IonCol, IonItem]
})
export class GeneralInformationPage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
