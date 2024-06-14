import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonModal, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LocalService } from 'src/app/services/local.service';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calendar } from 'ionicons/icons';
import { PickerTimeComponent } from 'src/app/components/date-time/picker-time.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-information',
  templateUrl: './individual-information.page.html',
  styleUrls: ['./individual-information.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonText,
    IonRow,
    IonCol,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonInput,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonButton,
    IonIcon,
    IonFooter,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndividualInformationPage implements OnInit {

  headerProps: headerProperties = {
    pageTitle: 'Información Personal',
    search: false
  }

  individualDataForm!: FormGroup;

  today: any;
  selectedDate!: any;
  dataPrev: any;

  constructor(private localService: LocalService, private modalCtrl: ModalController, private fb: FormBuilder, private localStore: LocalService, private router: Router) {
    addIcons({ calendar });
  }

  ngOnInit() {

    this.individualDataForm = this.fb.group({
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.minLength(8), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      documentExpedition: ['', [Validators.required]]
    })

    this.getPrevData();
    this.getDate()
  }

  validateNumber(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const key = event.key;
    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }

  getDate() {
    const date = new Date();
    this.today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    console.log(this.today);
  }


  getPrevData() {
    const getDataPrev = this.localService.getData('dataPrevUser');
    if (getDataPrev) {
      this.dataPrev = JSON.parse(getDataPrev);
      if (JSON.parse(getDataPrev).isAgency) {
        this.headerProps.pageTitle = 'Información Corporativa';
      }
    } else {
      this.router.navigate(['register/general-information'])
    }

  }

  async openDateTime() {
    const modalTime = await this.modalCtrl.create({
      component: PickerTimeComponent,
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.5],
      componentProps: {
        maxToday: this.today,
        minToday: null,
        isWheel: true
      }
    });
    modalTime.present();

    const { data, role } = await modalTime.onWillDismiss();
    console.log(role, data)
    if (role === 'confirm') {
      this.selectedDate = data;
      this.individualDataForm.controls['documentExpedition'].setValue(data.split('T')[0])
    }
  }

  submit() {
    const valueForm = this.individualDataForm.value;
    console.log([{ ...valueForm }])
    this.localStore.saveData('dataPrevUser', JSON.stringify({...this.dataPrev, valueForm}));
    this.router.navigate(['register/uploading-documents'])
  }

}
