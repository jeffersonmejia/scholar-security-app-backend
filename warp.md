# Scholar Security - Warp Configuration

## 📋 Descripción del Proyecto

**Scholar Security** es una aplicación de seguridad comunitaria diseñada para entornos educativos (universidades y unidades educativas). Permite a los usuarios reportar incidentes de seguridad en tiempo real, visualizar alertas en mapas interactivos y comunicarse mediante chats y notificaciones push.

### Componentes Principales

- **Backend**: API REST con Node.js/Express
- **Frontend**: Aplicación móvil Flutter
- **Base de Datos**: MongoDB
- **Tiempo Real**: Socket.io
- **Notificaciones**: Firebase Cloud Messaging

---

## 🏗️ Estructura del Proyecto

```
scholar-security/
├── backend/
│   └── RESP_API_NODE/
│       ├── src/
│       │   ├── app.js                          # Configuración principal de Express
│       │   ├── index.js                        # Punto de entrada
│       │   ├── config.js                       # Configuraciones
│       │   ├── databaseMongo.js                # Conexión MongoDB
│       │   ├── seguridad-espe-tesis/           # Módulo principal de seguridad (tesis)
│       │   ├── seguridad-espe-vinculacion/     # Módulo de vinculación
│       │   ├── GecSurvey_srv/                  # Sistema de encuestas
│       │   ├── MIES_APP/                       # Aplicación MIES (adulto mayor)
│       │   └── encuestas/                      # Sistema de encuestas adicional
│       ├── uploads/                            # Archivos subidos
│       │   ├── publicaciones/                  # PDFs de publicaciones
│       │   └── usuarios/                       # Imágenes de usuarios
│       ├── package.json
│       ├── .env                                # Variables de entorno
│       └── ecosystem.config.js                 # Configuración PM2
└── frontend/
    └── scholar-security-app/
        ├── lib/
        │   ├── main.dart                       # Punto de entrada Flutter
        │   ├── blocs/                          # Lógica de negocio (BLoC)
        │   ├── models/                         # Modelos de datos
        │   ├── resources/                      # Servicios y recursos
        │   ├── routes/                         # Rutas de navegación
        │   └── screens/                        # Pantallas de la app
        ├── assets/                             # Recursos estáticos (iconos, SVGs)
        ├── android/                            # Configuración Android
        ├── ios/                                # Configuración iOS
        └── pubspec.yaml                        # Dependencias Flutter
```

---

## 🔧 Backend (Node.js + Express)

### Tecnologías

- **Runtime**: Node.js con Babel (ES6+)
- **Framework**: Express 4.18.2
- **Base de Datos**: MongoDB (Mongoose 6.6.5)
- **Autenticación**: JWT (jsonwebtoken)
- **Encriptación**: bcryptjs
- **Tiempo Real**: Socket.io 4.7.1
- **Subida de Archivos**: express-fileupload
- **Email**: nodemailer
- **PDFs**: pdfmake, html-pdf

### Módulos del Backend

#### 1. **seguridad-espe-tesis** (Módulo Principal)
Sistema de seguridad para la comunidad universitaria ESPE
- Gestión de publicaciones/incidentes
- Sistema de chat y notificaciones
- Mapas y geolocalización
- Autenticación con Google

#### 2. **seguridad-espe-vinculacion** (Vinculación)
Sistema para unidades educativas (colegios)
- Similar al módulo de tesis pero orientado a colegios
- Gestión de alertas escolares
- Sistema de comunicación padres-institución

#### 3. **GecSurvey_srv** (Encuestas)
Sistema de encuestas y formularios
- Gestión de usuarios encuestadores
- Creación y administración de encuestas
- Visualización de estadísticas

#### 4. **MIES_APP** (Adulto Mayor)
Aplicación para evaluación de adultos mayores
- Escalas de evaluación: Lawton-Brody, Yesavage, Mini-Mental, Barthel
- Gestión de técnicos y supervisores
- Reportes y estadísticas

#### 5. **encuestas**
Sistema adicional de encuestas

### Configuración del Backend

**Puerto**: 3000

**Variables de Entorno** (`.env`):
```env
MONGODB_URI_VIN=mongodb://10.3.1.203:27017/vinculacion_fase_2
MONGODB_URI_ENC=mongodb://10.3.1.203:27017/appexacta
DB_CNN=mongodb://10.3.1.203:27017/Community-Safe
DB_CNN_VINCULACION=mongodb://localhost:27017/unidad_educativa_fase2
JWT_KEY=haJSHdjksh!!1i27@askjdhm2nasa21
TOKEN_NOTIFICAIONES=AAAAfVCwzbI:APA91bHNroyK7rstC92X4n-WYSyuFNTwXtiUiDlzuzulXlWpk35qHvnyokKKGyWBLBVulGpuW59OAUH3dDOTsKirFDcWjexy1KhE1gj3qX_YwaUmtHXhxyapfJ-OP2FL9zqjjMjSl6xl
SMTPSERVER=smtp.gmail.com
SMTPUSER=schlrscrt@gmail.com
SMTPPASSWORD=muuvxhakzhmkbwid
```

### Comandos del Backend

```bash
# Instalar dependencias
npm install

# Modo desarrollo (con Nodemon + Babel)
npm start

# Producción (con PM2)
pm2 start ecosystem.config.js
```

### APIs Disponibles

#### Seguridad ESPE (Tesis/Vinculación)
Cada módulo tiene sus propias rutas en:
- `/seguridad-espe-tesis/routes/`
- `/seguridad-espe-vinculacion/routes/`

#### GecSurvey
- `/loginGec` - Autenticación
- `/usuarioGec` - Gestión de usuarios
- `/encuestaGec` - Gestión de encuestas
- `/graficaGec` - Estadísticas

#### MIES APP
- `/tecnico` - Gestión de técnicos
- `/adultoMayor` - Gestión de adultos mayores
- `/supervisor` - Gestión de supervisores
- `/escalaLawtonBrody` - Evaluación Lawton-Brody
- `/escalaYesavage` - Evaluación Yesavage
- `/mini_mental` - Mini Mental Test
- `/indiceBarthel` - Índice de Barthel
- `/reportes` - Generación de reportes

#### Encuestas
- `/encuesta1` - Encuesta tipo 1
- `/encuesta2` - Encuesta tipo 2
- `/encuestador` - Gestión de encuestadores

---

## 📱 Frontend (Flutter)

### Tecnologías

- **Framework**: Flutter 3.0+
- **Lenguaje**: Dart
- **Gestión de Estado**: flutter_bloc (BLoC pattern)
- **Mapas**: Google Maps, Flutter Map
- **Firebase**: Analytics, Messaging (FCM)
- **Notificaciones Push**: firebase_messaging
- **Almacenamiento**: flutter_secure_storage, shared_preferences
- **HTTP**: http, socket_io_client
- **Geolocalización**: geolocator, geocoding

### Dependencias Principales

```yaml
dependencies:
  flutter_bloc: ^8.1.6              # Gestión de estado
  google_maps_flutter: ^2.6.0       # Mapas Google
  flutter_map: ^7.0.2               # Mapas alternativos
  firebase_core: ^3.8.1             # Firebase
  firebase_messaging: ^15.1.9       # Notificaciones push
  firebase_analytics: ^11.3.5       # Analytics
  socket_io_client: ^2.0.3+1        # WebSockets
  geolocator: ^13.0.1               # GPS
  image_picker: ^1.1.2              # Cámara/Galería
  flutter_secure_storage: ^9.2.2    # Almacenamiento seguro
  http: ^1.2.2                      # Peticiones HTTP
  cached_network_image: ^3.2.3      # Caché de imágenes
  google_sign_in: ^6.2.1            # Login con Google
```

### Arquitectura BLoC

El proyecto utiliza el patrón BLoC para separar la lógica de negocio de la UI:

- `AuthBloc` - Autenticación y sesión
- `GpsBloc` - Permisos GPS
- `LocationBloc` - Geolocalización
- `PublicationBloc` - Publicaciones/Incidentes
- `MembersBloc` - Gestión de miembros
- `RoomBloc` - Salas de chat
- `NotificationBloc` - Notificaciones
- `NavigatorBloc` - Navegación
- `SearchBloc` - Búsquedas
- `MapBloc` - Gestión de mapas

### Comandos del Frontend

```bash
# Instalar dependencias
flutter pub get

# Ejecutar en modo debug
flutter run

# Generar iconos de launcher
flutter pub run flutter_launcher_icons:main

# Build para Android
flutter build apk --release

# Build para iOS
flutter build ios --release
```

### Configuración Firebase

Los scripts de configuración están en `scripts/`:
- `firebase.ps1` (Windows PowerShell)
- `firebase.sh` (Linux/macOS)

---

## 🔐 Seguridad

### Autenticación
- JWT para autenticación de API
- Google Sign-In integrado
- Almacenamiento seguro de tokens (flutter_secure_storage)

### Datos Sensibles
- Variables de entorno en `.env`
- Tokens JWT con clave secreta
- Contraseñas hasheadas con bcryptjs

---

## 🗄️ Base de Datos (MongoDB)

### Bases de Datos

1. **Community-Safe** - Sistema principal de seguridad universitaria
2. **vinculacion_fase_2** - Sistema de vinculación (colegios)
3. **unidad_educativa_fase2** - Unidades educativas locales
4. **appexacta** - Sistema de encuestas

### Servidor MongoDB

- **Host**: 10.3.1.203 (servidor principal)
- **Puerto**: 27017 (default)
- **Local**: localhost:27017 (vinculación)

---

## 🚀 Deployment

### Backend (PM2)

```bash
# Iniciar con PM2
pm2 start ecosystem.config.js

# Ver logs
pm2 logs

# Reiniciar
pm2 restart all

# Detener
pm2 stop all
```

### Frontend

#### Android
```bash
flutter build apk --release
# APK en: build/app/outputs/flutter-apk/app-release.apk
```

#### iOS
```bash
flutter build ios --release
# Requiere Xcode y certificados de Apple Developer
```

---

## 🔔 Sistema de Notificaciones

### Push Notifications (Firebase Cloud Messaging)

El sistema maneja diferentes tipos de notificaciones:

1. **SOS**: Alertas de emergencia
   - Navega automáticamente a pantalla de SOS
   - Datos: `{type: 'sos', ...}`

2. **Publicaciones**: Nuevos reportes/incidentes
   - Primer plano: Actualiza badge
   - Segundo plano: Abre detalle de publicación
   - Datos: `{type: 'publication', primerPlano: boolean, ...}`

3. **Salas de Chat**: Nuevos mensajes
   - Actualiza lista de salas
   - Datos: `{type: 'sala', ...}`

### Socket.io (Tiempo Real)

- Mensajería instantánea
- Actualizaciones de publicaciones en tiempo real
- Ubicaciones en vivo

---

## 📊 Características Principales

### 1. Sistema de Reportes/Publicaciones
- Crear reportes de incidentes con fotos
- Categorías: Accidente, Robo, Bullying, Drogas, Emergencias, etc.
- Geolocalización automática
- Visualización en mapa

### 2. Mapas Interactivos
- Google Maps integrado
- Marcadores de incidentes
- Rutas y navegación
- Clustering de reportes

### 3. Chat en Tiempo Real
- Salas de chat
- Mensajería instantánea con Socket.io
- Notificaciones push

### 4. Sistema de Encuestas
- Creación de encuestas personalizadas
- Recolección de respuestas
- Visualización de estadísticas

### 5. Evaluación Adulto Mayor (MIES)
- Escalas de evaluación geriátrica
- Generación de reportes PDF
- Seguimiento de casos

---

## 🛠️ Desarrollo

### Requisitos

#### Backend
- Node.js 14+ 
- MongoDB 4+
- NPM o Yarn

#### Frontend
- Flutter 3.0+
- Dart SDK
- Android Studio / Xcode
- Firebase CLI

### Variables de Entorno

Asegúrate de configurar el archivo `.env` en el backend con:
- Conexiones MongoDB
- Claves JWT
- Credenciales SMTP
- Tokens de Firebase

### Testing

```bash
# Backend
npm test

# Frontend
flutter test
```

---

## 📝 Notas Adicionales

### Assets Frontend
- **Iconos SVG**: `assets/alertas/` - Iconos de categorías de alertas
- **Imágenes**: `assets/info/` - Recursos informativos
- **Vinculación**: `assets/vinculacionalertas/` - Alertas para colegios

### Uploads Backend
- **Publicaciones**: `uploads/publicaciones/` - PDFs y documentos
- **Usuarios**: `uploads/usuarios/` - Fotos de perfil (UUID.jpg/png/webp)

### URLs Importantes
- Backend API: `http://localhost:3000`
- Encuestas Web: `/schoolarSecurityEncuestas`

---

## 👥 Equipo

Proyecto desarrollado para la Universidad de las Fuerzas Armadas ESPE - Santo Domingo

### Administradores del Sistema
- Josue Velasquez
- Monica Jara
- Brandon Bermello
- Melany Caicedo
- Lesly Gaibor
- Brayan Ponce

---

## 📄 Licencia

ISC
