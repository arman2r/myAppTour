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
      const result = await FilePicker.pickFiles({
        types: ['application/pdf'],
        //multiple: false,
        readData: true
      });
      console.log('resultado', result)
      console.log('antes',this.pdfSrc)
      result && (this.pdfSrc = result.files[0].path)
      console.log('despues',this.pdfSrc)
      /*if (result.files.length > 0) {
        const file = result.files[0];
        console.log('Selected file:', file);
        this.previewPDF(file);
      }*/
    } catch (e) {
      console.error('Error picking file', e);
    }
  }

  async previewPDF() {
    try {
      await FileOpener.openFile({
        path: this.pdfSrc,
      });
    } catch (e) {
      console.error('Error reading file', e);
    }
  }


}
