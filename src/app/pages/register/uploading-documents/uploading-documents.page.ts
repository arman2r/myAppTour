import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonRippleEffect, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LocalService } from 'src/app/services/local.service';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-uploading-documents',
  templateUrl: './uploading-documents.page.html',
  styleUrls: ['./uploading-documents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonText, IonFooter, IonButton, IonRippleEffect, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonRow, IonCol, IonIcon, RouterLink]
})
export class UploadingDocumentsPage implements OnInit {

  docUrlFront?: string | null = null;
  docUrlBack?: string | null = null;

  dataPrev: any;
  headerProps: headerProperties = {
    pageTitle: 'Sube el documento',
    search: false
  }

  constructor(private localService: LocalService, private router: Router) {
    addIcons({ camera });
  }

  ngOnInit() {
  }

  getPrevData() {
    const getDataPrev = JSON.parse(this.localService.getData('dataPrevUser'));
    if (getDataPrev) {
      this.dataPrev = getDataPrev;  
    } else {
      this.router.navigate(['register/general-information'])
    }
  }

  async takePicture(type: string) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      correctOrientation: true,
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    if(type === 'front'){
      this.docUrlFront = image.webPath;
    } else {
      this.docUrlBack = image.webPath;
    }
    
   
  };
  

}
