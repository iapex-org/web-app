# IAPEX — Portal Web Institucional

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19.x-DD0031?logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite">
</p>

<p align="center">
  <em>Portal web seguro para que el personal hospitalario registre, busque y gestione pacientes no identificados utilizando búsqueda híbrida con IA.</em>
</p>

<p align="center">
  <a href="https://github.com/iapex-org/web-app">Repositorio</a>
  ·
  <a href="https://github.com/iapex-org/web-app/issues">Reportar Bug</a>
  ·
  <a href="https://virtual.cuautitlan.unam.mx/intar/wp-content/uploads/sites/19/2025/12/166-A-Hybrid-Artificial-Intelligent-System-for-Missing-JORGE-CHRISTIAN-SERRANO-PUERTOS.pdf">Artículo de Investigación</a>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## Acerca de IAPEX

**IAPEX** (Inteligencia Artificial para la Localización de Pacientes Extraviados en Instituciones de Salud) es un sistema validado que ayuda a instituciones de salud a identificar y gestionar pacientes no localizados mediante una fusión de reconocimiento facial y análisis textual.

Este repositorio contiene el **Portal Web Institucional** — una aplicación Angular segura para que el personal médico pueda:

- Registrar pacientes no identificados con rasgos morfológicos y fotografías
- Gestionar registros de pacientes, instituciones y membresías
- Buscar y ver coincidencias potenciales con puntajes de similitud
- Procesar solicitudes de contacto de familias
- Enviar notificaciones institucionales
- Cargar y gestionar archivos multimedia

### Ecosistema

| Componente | Repositorio | Stack |
|-----------|-----------|-------|
| **Portal Web** (este) | [iapex-org/web-app](https://github.com/iapex-org/web-app) | Angular 19, Bootstrap, TypeScript |
| **App Móvil** | [iapex-org/mobile-app](https://github.com/iapex-org/mobile-app) | React 18, Ionic 8, Capacitor |
| **Core API** | [iapex-org/core-api](https://github.com/iapex-org/core-api) | Spring Boot 3, PostgreSQL, MongoDB |

## Funcionalidades

- **Gestión de Pacientes** — Registrar, actualizar y buscar pacientes no identificados
- **Gestión de Instituciones** — Administrar perfiles de instituciones de salud
- **Búsqueda Híbrida** — Coincidencia por reconocimiento facial + descripción textual
- **Seguridad RBAC** — Control de Acceso Basado en Roles con autenticación JWT
- **Notificaciones** — Notificaciones institucionales por correo electrónico
- **Carga Multimedia** — Gestión de imágenes y archivos con FilePond
- **Códigos QR** — Generación de QR para referencia rápida de pacientes
- **Dashboard Interactivo** — Gráficos y estadísticas con amCharts

## Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
git clone https://github.com/iapex-org/web-app.git
cd web-app
npm install
```

Crea un archivo `.env` desde el ejemplo:

```bash
cp .env.example .env
```

Configura tus variables de entorno:

```env
API_URL_USERS_WEB=http://localhost:8080/api/v1/users/web
API_URL_PATIENTS=http://localhost:8080/api/v1/patients
API_URL_INSTITUTIONS=http://localhost:8080/api/v1/institutions
API_URL_CONTACT_REQUESTS=http://localhost:8080/api/v1/contact-requests
API_URL_MEMBERSHIPS=http://localhost:8080/api/v1/memberships
API_URL_NOTIFICATIONS=http://localhost:8080/api/v1/notifications
TOKEN_DURATION=600000
AUTH_KEY=auth_user
```

Ejecuta el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Contribuciones

Por favor lee [CONTRIBUTING.md](CONTRIBUTING.md) para nuestras convenciones de ramas, commits y flujo de PRs.

## Licencia

Este proyecto está licenciado bajo GNU General Public License v3.0 — consulta el archivo [LICENSE](LICENSE) para más detalles.

## Reconocimientos

**Autores:**
- Serrano Puertos Jorge Christian — christian.serrano.puertos@gmail.com
- Florentino Altamirano Misrael — misraelaltamirano@gmail.com
- Ortiz Pérez Alejandro — alex03ortizperez@gmail.com

**Colaboradores:**
- Chávez Moreno Jose Eduardo
- Fernández López Kevin Noé

**Asesor:**
- Escobar García Arturo

**Interesados (Stakeholders):**
- Guarneros Nolasco Luis Rolando
- Cruz Ramos Nancy Aracely

**Apoyo Académico:**
- Universidad Tecnológica del Centro de Veracruz
