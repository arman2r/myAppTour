import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonText, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { SanitizeService } from 'src/app/services/sanitize.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonModal, IonButtons, IonText]
})
export class ModalConfirmComponent implements OnInit {

  presentingElement: any = undefined;
  value = environment.politics

  constructor(private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController, private sanitizeService: SanitizeService) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  getSanitizedHtml(): string {
    return this.sanitizeService.sanitizeHtml(this.value.description) as string;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(true, 'confirm');
  }

}
