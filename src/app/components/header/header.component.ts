import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonMenu, IonMenuButton, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { albums, list, search } from 'ionicons/icons';
import { headerProperties } from 'src/app/interfaces/header.interface';
import { StatusBar, Style } from "@capacitor/status-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon,
    IonMenuButton, IonButton,
    IonMenu, IonHeader, IonTitle,
    IonToolbar, NgClass, IonSearchbar,
    FormsModule, IonBackButton
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input({ required: true }) headerProps!: headerProperties;
  previousRoute: string = '/';
  currentUrL!: string;
  onOpenSearch = true;
  isListView: boolean = true;
  @Output() isListViewToggle = new EventEmitter<boolean>()

  constructor(private router: Router) {
    addIcons({ search });
    addIcons({ 'list': list, 'albums': albums });

  }

  ngOnInit() {
    // Suscribirse al evento de cambio de ruta
    this.router.events.subscribe(event => {
      this.previousRoute = '';
      if (event instanceof NavigationEnd) {
        // Lógica para detectar cambio de ruta aquí
        //console.log('Ruta cambiada:', event.url);
        this.currentUrL = event.url;
        console.log('this.currentUrL', this.currentUrL)
        const getRout = event.url.substring(0, event.url.lastIndexOf('/'));
        if (event.url !== '/') {
          this.previousRoute = getRout
        } else {
          this.previousRoute = './'
        }
        console.log('Ruta cambiada 2:', this.previousRoute);
      }
    });
  }

  toggleSearch() {
    this.onOpenSearch = !this.onOpenSearch;
  }

  toggleView() {
    this.isListView = !this.isListView;
    this.isListViewToggle.emit(!this.isListView);
  }

  async ngAfterViewInit() {
    await this.setStatusBarStyle();
  }

  async setStatusBarStyle() {
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--ion-color-primary")
      .trim();

    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color: primaryColor }); // Color dinámico
    await StatusBar.setStyle({ style: Style.Dark }); // Estilo oscuro para los íconos
  }

}
