import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonAlert, IonButton, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonModal, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToggle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LocalService } from 'src/app/services/local.service'; 
import { addIcons } from 'ionicons';
import { calendar } from 'ionicons/icons';
import { PickerTimeComponent } from 'src/app/components/date-time/picker-time.component';
import { ActivatedRoute, Params, Router } from '@angular/router';  

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
    ReactiveFormsModule,
    IonToggle,
    IonAlert
  ] 
})
export class IndividualInformationPage implements OnInit { 

  isAgency? = false;
  isAgreeDocs = false;
  isAlertOpen = false;
  alertButtons = ['Sí, entiendo'];

  headerProps: headerProperties = {
    pageTitle: 'Información Personal',
    search: false
  }

  individualDataForm!: FormGroup;

  today: any;
  selectedDate!: any;
  dataPrev: any;

  constructor(private localService: LocalService, private route: ActivatedRoute, private dialogCtrl: ModalController, private fb: FormBuilder, private localStore: LocalService, private router: Router) {
    addIcons({ calendar });
  }

  ngOnInit() { 
    this.individualDataForm = this.fb.group({
      agreeDocs: [false],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      documentExpedition: ['', [Validators.required]],
      birthDate: ['', [Validators.required]]
    })

    this.route.params.subscribe(
      (params: Params) => { 
        console.log(params['agency']) 
        if(params['agency']) {
          this.isAgency = true
        }
        if(!this.isAgency){
          this.individualDataForm.get('documentType')?.clearValidators();
          this.individualDataForm.get('documentType')?.updateValueAndValidity();
          this.individualDataForm.get('documentNumber')?.clearValidators();
          this.individualDataForm.get('documentNumber')?.updateValueAndValidity();
          this.individualDataForm.get('documentExpedition')?.clearValidators();
          this.individualDataForm.get('documentExpedition')?.updateValueAndValidity(); 
        }
      }
    ); 
    this.getPrevData();
    this.getDate()
  }

  ctrlIsAgreeDocs(){
    const isOpen = !this.individualDataForm.get('agreeDocs')?.value
    this.isAgreeDocs = this.individualDataForm.get('agreeDocs')?.value
    this.isAlertOpen = !isOpen; 
  }

  validateNumber(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const key = event.key;
    if (!allowedChars.test(key)) {
      event.preventDefault();
    }
  }

  getDate(applyDate?: any) {
    if(!applyDate) {
      const date = new Date();
      this.today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      console.log(this.today);
    } else {
      const date = new Date();
      date.setFullYear(date.getFullYear() - applyDate); // Restar 18 años a la fecha actual
      
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // Añadir ceros a la izquierda si es necesario
      const day = ('0' + date.getDate()).slice(-2); // Añadir ceros a la izquierda si es necesario
      
      this.today = year + '-' + month + '-' + day;
      console.log(this.today);
    } 
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

  async openDateTime(field: string) { 

    if(field === 'birthDate'){
      this.getDate(18)
    }

    const dialogTime = await this.dialogCtrl.create({
      component: PickerTimeComponent,
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.5],
      componentProps: {
        maxToday: this.today,
        minToday: null,
        isWheel: true
      }
    });
    dialogTime.present();

    const { data, role } = await dialogTime.onWillDismiss();
    console.log(role, data)
    if (role === 'confirm') {
      this.selectedDate = data;
      this.individualDataForm.controls[field].setValue(data.split('T')[0])
    }
  }

  documentTypeSelect(value: any) {
    console.log(value)
    if(value !== '1') {
      this.individualDataForm.get('birthDate')?.clearValidators();
      this.individualDataForm.get('birthDate')?.updateValueAndValidity(); 
    } else {
      console.log('es cedula')
      this.individualDataForm.get('birthDate')?.addValidators(Validators.required);
      this.individualDataForm.get('birthDate')?.updateValueAndValidity(); 
    }
  }

  submit() {
    const valueForm = this.individualDataForm.value;
    console.log([{ ...valueForm }])
    this.localStore.saveData('dataPrevUser', JSON.stringify({...this.dataPrev, valueForm}));
    if(this.isAgreeDocs){
      this.router.navigate(['register/confirm-email'])
    } else {
      this.router.navigate(['register/uploading-documents', this.individualDataForm.get('documentType')?.value])
    }
    
  }

}
