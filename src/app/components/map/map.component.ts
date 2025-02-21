/// <reference types="google.maps" />
import { AfterViewInit, Component, ElementRef, Input, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { GoogleMap, Polyline } from '@capacitor/google-maps';
import { printCurrentPosition } from 'src/app/utils/geolocation';

export interface pointsMap {
  lat?: number,
  lng?: number,
  title?: string,
  icon?: string,
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapComponent implements AfterViewInit {

  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  newMap!: GoogleMap;
  @Input() zoom?: number = 12;
  @Input() points?: pointsMap[] = [];
  
  private apiKey = 'AIzaSyDFJ0cpwr1wHdktxm9lzKBAp7AcYdy8Yag'; // Reemplaza con tu API Key de Google Maps

  constructor(private cdr: ChangeDetectorRef) { }

  async ngAfterViewInit() {
    requestAnimationFrame(async () => {
      this.cdr.detectChanges();
      await this.initializeMap();
    });
  }

  async loadGoogleMaps() {
    if (typeof google === 'undefined' || !google.maps) {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = (error) => reject(error);
        document.body.appendChild(script);
      });
    }
  }

  async initializeMap() {
    if (this.newMap) {
      await this.newMap.destroy();
      this.newMap = null!;
    }

    // Obtiene las coordenadas actuales
    const coordinates = await printCurrentPosition();

    // Verifica si las coordenadas son válidas
    if (coordinates) {
      console.log('Coordenadas válidas obtenidas:', coordinates);

      // Crea el mapa con las coordenadas actuales
      this.newMap = await GoogleMap.create({
        id: 'my-map', // Identificador único para esta instancia del mapa
        element: this.mapContainer.nativeElement, // Referencia al contenedor del mapa
        apiKey: this.apiKey, // Tu API Key de Google Maps
        config: {
          center: {
            lat: coordinates.latitude, // Usa la latitud obtenida
            lng: coordinates.longitude, // Usa la longitud obtenida
          },
          zoom: this.zoom as number, // Nivel de zoom inicial 
          disableDefaultUI: true,
          fullscreenControl: true,
        },
      });
 

      // Agrega un marcador en las coordenadas actuales
      await this.newMap.addMarker({
        coordinate: {
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        },
        title: 'Mi ubicación', // Título del marcador
        snippet: 'Estoy aquí', // Descripción del marcador (opcional)
        iconUrl: 'assets/images/pin-here-map-color.png', // 🎯 URL del icono personalizado
        iconSize: { width: 32, height: 32 },
        iconAnchor: { x: 16, y: 32 }
      });

      // Agrega marcadores para cada punto
      for (const point of this.points as any) {
        await this.newMap.addMarker({
          coordinate: {
            lat: point.lat,
            lng: point.lng,
          },
          title: point.title,
          snippet: `Coordenadas: ${point.lat}, ${point.lng}`,
          iconUrl: point.icon, // 🎯 URL del icono personalizado
          iconSize: { width: 32, height: 32 },
          iconAnchor: { x: 16, y: 32 }
        });
      }

      console.log(this.points);

      await this.addPolylines(coordinates);

    } else {
      console.error('No se pudieron obtener coordenadas válidas.');

      // Crea el mapa con una ubicación por defecto
      this.newMap = await GoogleMap.create({
        id: 'my-map', // Identificador único para esta instancia del mapa
        element: this.mapContainer.nativeElement, // Referencia al contenedor del mapa
        apiKey: this.apiKey, // Tu API Key de Google Maps
        config: {
          center: {
            lat: 4.4399926, // Latitud por defecto
            lng: -75.1595164, // Longitud por defecto
          },
          zoom: 12, // Nivel de zoom inicial
        },
      });
    }
  }

  async addPolylines(coordinates: { latitude: number; longitude: number }) {
    if (!this.points || !Array.isArray(this.points) || this.points.length < 2) {
      console.error('Error: this.points no es válido o tiene menos de 2 puntos');
      return;
    }


    // Modificar el primer punto con las coordenadas actuales
    const updatedPoints = [
      { lat: coordinates.latitude, lng: coordinates.longitude },
      ...this.points
    ];

    // Obtener la ruta desde Google Maps Directions API
    const route = await this.getRoute(updatedPoints as { lat: number; lng: number }[]);
    if (!route) {
      console.error('No se pudo obtener la ruta.');
      return;
    }

    // Crear la Polyline con los puntos de la ruta
    const lines = [
      {
        path: route, // 🟢 Ruta optimizada por Google Maps
        strokeColor: '#47176d',
        strokeWeight: 3,
        geodesic: true,
      }
    ];    

    if (this.newMap) {
      await this.newMap.addPolylines(lines);
    }
  }


  async getRoute(points: { lat: number; lng: number }[]): Promise<{ lat: number; lng: number }[] | null> {
    return new Promise((resolve, reject) => {

      if (typeof google === 'undefined' || !google.maps) {
        console.error('Google Maps API no está disponible.');
        reject(null);
        return;
      }

      const directionsService = new google.maps.DirectionsService();

      const waypoints = points.slice(1, -1).map(point => ({
        location: new google.maps.LatLng(point.lat, point.lng),
        stopover: true
      }));

      const request = {
        origin: new google.maps.LatLng(points[0].lat, points[0].lng),
        destination: new google.maps.LatLng(points[points.length - 1].lat, points[points.length - 1].lng),
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING // 🚗 Usa carreteras
      };

      directionsService.route(request, (result: any, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          const routePath = result.routes[0].overview_path.map((point: any) => ({
            lat: point.lat(),
            lng: point.lng()
          }));
          resolve(routePath);
        } else {
          console.error('Error obteniendo la ruta:', status);
          reject(null);
        }
      });
    });
  }
  
}
