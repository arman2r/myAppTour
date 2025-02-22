# Proyecto Xperyz con Ionic 8, Angular 17 y Capacitor v7

## Requisitos del entorno

Este proyecto requiere las siguientes versiones de software:
- **Node.js**: 20.10.0
- **Java Development Kit (JDK)**: 21
- **Ionic**: 8
- **Angular**: 17
- **Capacitor**: 7

## Configuración de Gradle

Para compilar correctamente el proyecto en Android, es necesario agregar las siguientes dependencias en `variables.gradle`:

```gradle
googleMapsPlayServicesVersion = '18.2.0'
googleMapsUtilsVersion = '3.8.2'
googleMapsKtxVersion = '5.0.0'
googleMapsUtilsKtxVersion = '5.0.0'
kotlinxCoroutinesVersion = '1.7.3'
androidxCoreKTXVersion = '1.12.0'
kotlin_version = '1.9.20'
```

### Configuración del JDK en Gradle Properties

Agregar la siguiente línea en `gradle.properties` para indicar la ubicación del JDK 21:

```properties
org.gradle.java.home=C:/Users/arman/.jdks/corretto-21.0.6
```

### Configuración del archivo `build.gradle` a nivel de Android

```gradle
buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.4.0'
        classpath 'com.google.gms:google-services:4.4.2'
        // NOTA: No colocar dependencias de la aplicación aquí, sino en el build.gradle del módulo específico
    }
}
```

### Configuración de `gradle-wrapper.properties`

Actualizar la versión de Gradle en `gradle-wrapper.properties`:

```properties
distributionUrl=https\://services.gradle.org/distributions/gradle-8.6-bin.zip
```

### Configuración de `capacitor.build.gradle` a nivel de `android/app/`

```gradle
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_21
        targetCompatibility JavaVersion.VERSION_21
    }
}
```

## Permisos en Android Manifest

El archivo `AndroidManifest.xml` debe incluir los siguientes permisos:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" tools:ignore="QueryAllPackagesPermission" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
<uses-sdk tools:overrideLibrary="io.ionic.libs.iongeolocation-android" />
```

Además, se debe agregar la siguiente meta-data dentro de la etiqueta `<application>`:

```xml
<meta-data android:name="com.google.android.geo.API_KEY" android:value="xxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
```

Ejemplo de la estructura correcta de `<application>`:

```xml
<application
    android:allowBackup="true"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:supportsRtl="true"
    android:theme="@style/AppTheme"
    android:usesCleartextTraffic="true">
```

Despues de cada cambios en necesario ejecutar npx cap sync android y seguidamente syncronizar gradle en android studio
revisar que no arroje fallos e ir al menu superior seleccionar build, build app and bundle y Build APKs

Con esta configuración, el proyecto estará listo para compilar y ejecutar en dispositivos Android sin problemas de compatibilidad con las versiones de Node.js, JDK, Ionic, Angular y Capacitor especificadas.

