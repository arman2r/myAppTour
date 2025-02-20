import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { MapComponent, pointsMap } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-detail-map-modal',
  templateUrl: './detail-map-modal.component.html',
  styleUrls: ['./detail-map-modal.component.scss'],
  standalone: true,
  imports: [IonContent, MapComponent],
})
export class DetailMapModalComponent {
 
  @Input() data!: pointsMap[]; // 🔹 Recibe datos

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('que llega aquiii', this.data)

    setTimeout(() => {
      this.cdr.detectChanges();
      this.forceMapRender();
    }, 500);
  }
  forceMapRender() {
    const mapContainer = document.querySelector('app-map');
    if (mapContainer) {
      mapContainer.dispatchEvent(new Event('resize')); // Forzar redibujado
    }
  }

}
