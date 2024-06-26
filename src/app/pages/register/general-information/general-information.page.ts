import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCheckbox, IonCol, IonContent, IonHeader, IonInput, IonItem, IonRow, IonText, IonTitle, IonToggle, IonToolbar, IonButton, ModalController, CheckboxCustomEvent } from '@ionic/angular/standalone';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LocalService } from 'src/app/services/local.service';
import { ModalConfirmComponent } from 'src/app/components/modal-confirm/modal-confirm.component';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { legacyApp } from 'src/assets/politics/legal';
import { generalInformationUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
  standalone: true,
  imports: [IonContent, ReactiveFormsModule, IonHeader, IonTitle, IonToolbar, IonToggle, IonCheckbox, IonButton, CommonModule, FormsModule, HeaderComponent, IonText, IonInput, IonRow, IonCol, IonItem]
})
export class GeneralInformationPage implements OnInit {

  myGeneralFormUser!: FormGroup;
  confirm = false;
  isInfo = false;
  politics = legacyApp[0].politics
  handlingInformation = legacyApp[1].managementInformation

  headerProps: headerProperties = {
    pageTitle: 'Información general',
    search: false
  }

  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: any) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }

  constructor(private formBuilder: FormBuilder, private localStore: LocalService, private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.buildForm() 
  }

  getInfoStorage() {
    const getGralInfo = this.localStore.getData('dataPrevUser') as any;
    console.log('existe info en storage', getGralInfo)
    if(getGralInfo.length !== 0){
      this.setValuesForm(JSON.parse(getGralInfo))
    }

  }

  buildForm() {
    this.myGeneralFormUser = this.formBuilder.group({
      firstName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      email: ['', [Validators.minLength(5), Validators.maxLength(50), Validators.email, Validators.required]],
      phone: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.required]],
      isTourist: [false],
      isAgency: [false],
      politics: [false, [Validators.required]],
      infoProcessing: [false, [Validators.required]],
    })

    this.getInfoStorage()
  }

  setValuesForm(value: any) {
    const userObject = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phone,
      isTourist: value.isTourist, 
      isAgency: value.isAgency,
      politics: value.politics,
      infoProcessing: value.infoProcessing
    };

    console.log(value.firstName)
    // Establecer los valores en el formulario
    this.myGeneralFormUser.patchValue(userObject);

    if(userObject.isTourist){
      this.ctrlIsAgency(userObject.isTourist);
    } else {
      this.ctrlIsAgency(userObject.isAgency);
    }

    if(userObject.politics){
      this.confirm = true;
    } 
    
    if(userObject.infoProcessing) {
      this.isInfo = true
    }
    
  }

  async openModal(event: any, selfData: any, type: string) {
    console.log(selfData)
    console.log(event.target.checked)
    const modal = await this.modalCtrl.create({
      component: ModalConfirmComponent,
      componentProps: {
        data: selfData
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role)
    console.log('confirm', this.confirm)
    if (role !== 'cancel') {
      console.log('entro 1')
      if (data !== null) {
        if (type === 'politics') {
          this.confirm = true;
        } else {
          this.isInfo = true
        }
        event.target.checked = true
        console.log('entro 1-1', this.confirm, this.isInfo)
      } else {

        if (type === 'politics') {
          this.confirm = false;
        } else {
          this.isInfo = false
        }
        event.target.checked = false
        console.log('entro 1-2', this.confirm, this.isInfo)
      }
    } else {

      if (type === 'politics') {
        this.confirm = false;
      } else {
        this.isInfo = false
      }
      event.target.checked = false
      console.log('entro 2', this.confirm, this.isInfo)
    }

    console.log('que llega', this.myGeneralFormUser.controls['politics'].value, this.myGeneralFormUser.controls['infoProcessing'].value)
  }

  ctrlIsAgency(userType: string) {
    console.log(this.myGeneralFormUser.get('isTourist')?.value)
    console.log(this.myGeneralFormUser.get('isAgency')?.value)

    if (userType === 'isTourist') {
      if (this.myGeneralFormUser.get('isTourist')?.value) { 
        this.myGeneralFormUser.get('isAgency')?.disable();
      } else {
        this.myGeneralFormUser.get('isTourist')?.enable();
        this.myGeneralFormUser.get('isAgency')?.enable();
      }
    } else {
      if (this.myGeneralFormUser.get('isAgency')?.value) { 
        this.myGeneralFormUser.get('isTourist')?.disable();
      } else {
        this.myGeneralFormUser.get('isTourist')?.enable();
        this.myGeneralFormUser.get('isAgency')?.enable();
      }
    }
  }

  submit() {
    const valueForm = this.myGeneralFormUser.value;
    console.log([{ ...valueForm }])
    this.localStore.saveData('dataPrevUser', JSON.stringify(valueForm));
    console.log(valueForm.isAgency)
    if (valueForm.isAgency) {
      this.router.navigate(['register/individual-information/', valueForm.isAgency && 'isAgency'])
    } else {
      this.router.navigate(['register/individual-information/'])
    }

  }

}
