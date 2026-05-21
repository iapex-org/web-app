# IAPEX — Institutional Web Portal

<p align="center">
  <img src="https://img.shields.io/badge/Angular-19.x-DD0031?logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite">
</p>

<p align="center">
  <em>Secure web portal for hospital staff to register, search, and manage unidentified patients using hybrid AI matching.</em>
</p>

<p align="center">
  <a href="https://github.com/iapex-org/web-app">Repository</a>
  ·
  <a href="https://github.com/iapex-org/web-app/issues">Report Bug</a>
  ·
  <a href="https://virtual.cuautitlan.unam.mx/intar/wp-content/uploads/sites/19/2025/12/166-A-Hybrid-Artificial-Intelligent-System-for-Missing-JORGE-CHRISTIAN-SERRANO-PUERTOS.pdf">Research Paper</a>
</p>

---

## About IAPEX

**IAPEX** (Hybrid AI for Missing Patient Identification) is a validated system that helps healthcare institutions identify and manage unidentified or missing patients through a fusion of facial recognition and textual analysis.

This repository contains the **Institutional Web Portal** — a secure Angular application for medical staff to:

- Register unidentified patients with morphological traits and photographs
- Manage patient records, institutions, and memberships
- Search and view potential matches with similarity scores
- Process contact requests from families
- Send institutional notifications
- Upload and manage media files

### Ecosystem

| Component | Repository | Stack |
|-----------|-----------|-------|
| **Web Portal** (this) | [iapex-org/web-app](https://github.com/iapex-org/web-app) | Angular 19, Bootstrap, TypeScript |
| **Mobile App** | [iapex-org/mobile-app](https://github.com/iapex-org/mobile-app) | React 18, Ionic 8, Capacitor |
| **Core API** | [iapex-org/core-api](https://github.com/iapex-org/core-api) | Spring Boot 3, PostgreSQL, MongoDB |

## Features

- **Patient Management** — Register, update, and search unidentified patients
- **Institution Management** — Manage healthcare institution profiles
- **Hybrid Search** — Facial recognition + textual description matching
- **RBAC Security** — Role-Based Access Control with JWT authentication
- **Notifications** — Institutional email notifications
- **Media Upload** — Image and file management with FilePond
- **QR Codes** — Patient QR generation for quick referencing
- **Interactive Dashboard** — Charts and statistics with amCharts

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
git clone https://github.com/iapex-org/web-app.git
cd web-app
npm install
```

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Configure your environment variables:

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

Run the development server:

```bash
npm start
```

The app will be available at `http://localhost:4200`

## Architecture

```
┌─────────────────────────────────────────────┐
│              Web Portal (Angular)            │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐ │
│  │  Auth   │ │ Patients │ │ Institutions │ │
│  │ Module  │ │  Module  │ │   Module     │ │
│  └────┬────┘ └────┬─────┘ └──────┬───────┘ │
│       │           │              │          │
│  ┌────▼───────────▼──────────────▼───────┐  │
│  │         HTTP Services (Axios)         │  │
│  └────────────────┬──────────────────────┘  │
└───────────────────┼────────────────────────┘
                    │ JWT Auth
┌───────────────────┼────────────────────────┐
│      Core API (Spring Boot)                │
│   /api/v1/users, /api/v1/patients, ...     │
└────────────────────────────────────────────┘
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for our branch naming, commit conventions, and PR workflow.

## License

This project is licensed under the GNU General Public License v3.0 — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

**Authors:**
- Florentino Altamirano Misrael
- Ortiz Pérez Alejandro
- Serrano Puertos Jorge Christian

**Advisor:**
- Escobar García Arturo

**Academic Support:**
- Universidad Tecnológica del Centro de Veracruz
- UNAM Cuautitlán
