import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonRow, IonGrid, IonCol, IonText, IonIcon, IonPopover, IonRefresher, IonRefresherContent, ToastController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons' 

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.page.html',
  styleUrls: ['./waiting-room.page.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonPopover, IonRow, IonContent, IonGrid, IonRow, IonCol, CommonModule, IonRefresher, IonRefresherContent]
})
export class waitingRoomPage {

  constructor(private toastController: ToastController) {
     
    addIcons({ informationCircleOutline });
  }  

  handleRefresh(event: CustomEvent) {
    setTimeout(async () => {
      // Any calls to load data go here
      (event.target as HTMLIonRefresherElement).complete();

      const toast = await this.toastController.create({
        message: 'Aun nos falta validar tus documentos',
        duration: 3000,
        position: 'bottom',
        color: 'primary',
        positionAnchor: "footer",
        swipeGesture: "vertical",
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
  
      await toast.present();
    }, 2000);
  }
 

}
