import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCol, IonContent, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LocalService } from 'src/app/services/local.service';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-uploading-documents',
  templateUrl: './uploading-documents.page.html',
  styleUrls: ['./uploading-documents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonRow, IonCol, IonIcon]
})
export class UploadingDocumentsPage implements OnInit {

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

}
