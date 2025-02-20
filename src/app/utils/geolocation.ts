// utils/geolocation.ts
import { Geolocation } from '@capacitor/geolocation';
import { isValidLatitude, isValidLongitude } from './validateCoords';

// Función para obtener la posición actual y devolver solo las coordenadas válidas
export const printCurrentPosition = async (): Promise<{ latitude: number; longitude: number } | null> => {
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    
    // Extrae las coordenadas
    const { latitude, longitude } = coordinates.coords;
    
    // Valida las coordenadas
    if (isValidLatitude(latitude) && isValidLongitude(longitude)) {
      return { latitude, longitude };
    } else {
      console.error('Coordenadas inválidas:', { latitude, longitude });
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la posición:', error);
    return null;
  }
};