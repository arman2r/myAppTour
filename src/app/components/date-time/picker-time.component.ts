import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonDatetime, IonFooter, IonModal, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-picker-time',
  templateUrl: './picker-time.component.html',
  styleUrls: ['./picker-time.component.scss'],
  standalone: true,
  imports: [IonContent, IonFooter, IonModal, IonDatetime, IonButton],
  providers: [DatePipe]
})
export class PickerTimeComponent implements OnInit {

  @Input() maxToday?: any;
  @Input() minToday?: any;
  @Input() isWheel?: boolean;
  @ViewChild('dateTimeElem') dateTimeElem!: IonDatetime;

  constructor(private datePipe: DatePipe, private modal: ModalController) { }

  ngOnInit() {
    
  }

 

  dateConfirm() {
    const currentDay = new Date();
    const formattedDate = currentDay.toISOString().slice(0, 10); // Obtiene la fecha en formato "yyyy-MM-dd"
    
    if (!this.dateTimeElem.value) {
      this.dateTimeElem.value = formattedDate;
    }

    this.modal.dismiss(this.dateTimeElem.value, 'confirm');
    
  }

}
