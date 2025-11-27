# IAPEX - Aplicación web institucional

Aplicación web para la gestión y localización de pacientes extraviados en instituciones de salud, integrando búsqueda híbrida con inteligencia artificial.

<p align="center">
  <img src="https://img.shields.io/badge/Angular-18.x-DD0031?logo=angular" alt="Angular version">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript version">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite" alt="Vite version">
</p>

## 🏥 ¿Qué es IAPEX?

**IAPEX** (_Inteligencia Artificial para la Localización de Pacientes Extraviados en Instituciones de Salud_) es un sistema validado y robusto para la identificación y gestión de pacientes no localizados o no identificados en instituciones de salud.

### Componentes del ecosistema

- **App web** (este repositorio): gestión institucional y para personal de salud
- **App móvil**: búsqueda rápida de pacientes desde dispositivos móviles
- **API REST (Spring Boot)**: backend principal, autenticación y seguridad
- **API de búsqueda (FastAPI)**: motor de IA y búsqueda híbrida

La app web permite la gestión de usuarios, pacientes, instituciones, membresías, notificaciones y solicitudes de contacto, integrando la búsqueda híbrida y el reconocimiento facial.

---

## ✨ Funcionalidades

- 🏥 **Gestión de pacientes e instituciones**
- 🔍 **Búsqueda híbrida**: combina reconocimiento facial y análisis textual
- 📧 **Notificaciones institucionales**
- 📦 **Carga y gestión de archivos**
- 🔒 **Autenticación y autorización** (JWT, roles, usuarios)
- 📊 **Resultados ordenados** por porcentaje de similitud
- 📝 **Documentación interactiva** y ayuda en línea

---

## 🛠 Tecnologías

- **Angular** (v18+)
- **TypeScript** (v5+)
- **Vite** como build tool
- **Bootstrap** para UI
- **RxJS** para manejo reactivo
- **Jest/Karma** para pruebas

---

## ⚡ Instalación rápida

### Prerrequisitos

- **Node.js** (v18 o superior)
- **npm** o **yarn**

### Pasos

1. **Clonar repositorio**

```bash
git clone https://github.com/aescobar80/IAPEX_APP-WEB.git
cd IAPEX_APP-WEB
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

⚠️ **IMPORTANTE:** Las variables de entorno son **OBLIGATORIAS**. La aplicación no funcionará sin ellas.

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Configura tus valores en .env:

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

4. **Ejecutar en modo desarrollo**

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

---

## 🏗 Ecosistema IAPEX: arquitectura de microservicios

IAPEX está compuesto por múltiples repositorios especializados que conforman una arquitectura moderna y escalable:

| Repositorio                                                            | Propósito                 | Tecnología                | Estado       |
| ---------------------------------------------------------------------- | ------------------------- | ------------------------- | ------------ |
| **[IAPEX-MOBILE-APP](https://github.com/aescobar80/IAPEX-MOBILE-APP)** | App móvil para búsqueda   | React + Ionic + Capacitor | ✅ Operativo |
| **[IAPEX_APP-WEB](https://github.com/aescobar80/IAPEX_APP-WEB)**       | App web institucional     | Angular + Vite            | ✅ Operativo |
| **[API-REST-IAPEX](https://github.com/aescobar80/API-REST-IAPEX)**     | API principal y seguridad | Spring Boot + PostgreSQL  | ✅ Operativo |
| **[API-SEARCH-IAPEX](https://github.com/misraelDev/API-SEARCH-IAPEX)** | Motor de IA y búsqueda    | FastAPI + dlib + MongoDB  | ✅ Operativo |

---

## 🤝 Colaboración interna

Seguimos convenciones específicas para mantener consistencia - consulta CONTRIBUTING.MD.

## 🤝 Reconocimientos

Este proyecto fue desarrollado por el equipo de autores:

- Florentino Altamirano Misrael
- Ortiz Pérez Alejandro
- Serrano Puertos Jorge Christian

Con la asesoría y guía conceptual de:

- Escobar García Arturo

Y con el apoyo académico de la

- Universidad Tecnológica del Centro de Veracruz
