// utils/validation.ts

// Función para validar coordenadas
export const isValidCoordinate = (coordinate: number): boolean => {
    return (
      coordinate !== null &&
      coordinate !== undefined &&
      !isNaN(coordinate) &&
      isFinite(coordinate)
    );
  };
  
  // Función para validar latitud
  export const isValidLatitude = (latitude: number): boolean => {
    return isValidCoordinate(latitude) && latitude >= -90 && latitude <= 90;
  };
  
  // Función para validar longitud
  export const isValidLongitude = (longitude: number): boolean => {
    return isValidCoordinate(longitude) && longitude >= -180 && longitude <= 180;
  };