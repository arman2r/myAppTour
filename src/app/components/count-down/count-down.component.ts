import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
  standalone: true
})
export class CountDownComponent  implements OnInit, OnDestroy {

  minutes!: number;
  seconds!: number;
  private timer: any;

  @Input() startTimeInMinutes!: number; // Tiempo de inicio en minutos, configurable desde el componente padre
  @Output() timeExpired = new EventEmitter<void>(); // Evento que se emite cuando el tiempo se agota

  constructor() { }

  ngOnInit() {
    this.startTimer(this.startTimeInMinutes); // Iniciar el contador con 5 minutos
  }

  startTimer(durationInMinutes: number) {
    this.clearTimer();
    let timer = durationInMinutes * 60;
    this.updateTime(timer);

    this.timer = setInterval(() => {
      timer--;
      this.updateTime(timer);

      if (timer <= 0) {
        this.clearTimer();
        this.timeExpired.emit(); // Emitir el evento cuando el tiempo se agote
      }
    }, 1000);
  }

  private updateTime(totalSeconds: number) { 
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  }

  private clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  resetTimer() {
    this.startTimer(this.startTimeInMinutes);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // Limpiar el intervalo cuando el componente se destruya
    }
  }

}
