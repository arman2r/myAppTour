import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonHeader, IonIcon, IonRippleEffect, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LocalService } from 'src/app/services/local.service';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { camera, cloudUploadOutline, closeOutline, openOutline, documentAttachOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-uploading-documents',
  templateUrl: './uploading-documents.page.html',
  styleUrls: ['./uploading-documents.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, ReactiveFormsModule, IonFab, IonFabList, IonFabButton, IonText, IonFooter, IonButton, IonRippleEffect, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonRow, IonCol, IonIcon, RouterLink]
})
export class UploadingDocumentsPage implements OnInit {

  docUrlFront?: string | null = null;
  docUrlBack?: string | null = null;
  documentTypeToUpload = 1;
  uploadDocForm!: FormGroup;
  pdfSrc!: any;

  @ViewChild('fileInput') fileInput!: ElementRef;


  dataPrev: any;
  headerProps: headerProperties = {
    pageTitle: 'Sube el documento',
    search: false
  }

  constructor(private localService: LocalService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private fb: FormBuilder) {
    addIcons({
      'camera': camera,
      'cloud-upload-outline': cloudUploadOutline,
      'close-outline': closeOutline,
      'open-outline': openOutline,
      'document-attach-outline': documentAttachOutline
    });


    this.uploadDocForm = this.fb.group({
      document: ['', [Validators.required]]
    })

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.documentTypeToUpload = params['documentType']
        console.log(this.documentTypeToUpload);
      }
    );
  }

  uploadDoc() {
    this.fileInput.nativeElement.click();
  }

  /*getPrevData() {
    const getDataPrev = JSON.parse(this.localService.getData('dataPrevUser'));
    if (getDataPrev) {
      this.dataPrev = getDataPrev;  
    } else {
      this.router.navigate(['register/general-information'])
    }
  }*/



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
    if (type === 'front') {
      this.docUrlFront = image.webPath;
    } else {
      this.docUrlBack = image.webPath;
    }

  };

  async handleFileInput() {
    try {
      if (Capacitor.isNativePlatform()) {
        // En dispositivos móviles
        const result = await FilePicker.pickFiles({
          types: ['application/pdf'],
          readData: true
        });

        if (result.files.length > 0) {
          const file = result.files[0]; // de aqui se extrae el archivo que se va enviar al API
          this.pdfSrc = file.path; // Usar file.uri para dispositivos móviles
          console.log('Selected file:', file);
        }
      } else {
        // En web
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/pdf';
        input.style.display = 'none';
        document.body.appendChild(input);

        input.onchange = async (event: Event) => {
          const target = event.target as HTMLInputElement;
          const file = target.files?.[0];
          if (file) {
            const blob = new Blob([file], { type: 'application/pdf' });
            this.pdfSrc = URL.createObjectURL(blob);
            console.log('Selected file:', file);
          }
        };

        input.click();
      }
    } catch (error) {
      console.error('Error picking file', error);
    }
  }

  async previewPDF() {
    try {
      if (this.pdfSrc) {
        if (Capacitor.isNativePlatform()) {
          // En dispositivos móviles
          await FileOpener.openFile({ path: this.pdfSrc });
        } else {
          // En web
          window.open(this.pdfSrc, '_blank');
        }
      } else {
        console.error('No PDF file to preview');
      }
    } catch (error) {
      console.error('Error opening file', error);
    }
  }


}
