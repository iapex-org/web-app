# Contribuir a IAPEX Web Portal

## Flujo de Trabajo (GitHub Flow)

1. Crea una **rama** desde `main`
2. Haz **commits** en inglés con [Conventional Commits](https://www.conventionalcommits.org/)
3. Abre un **Pull Request (PR)**
4. Obtén **aprobación** de un maintainer
5. **Mergea** solo vía PR

## Nomenclatura de Ramas

| Prefijo | Propósito | Ejemplo |
|---------|-----------|---------|
| `feat/` | Nuevas funcionalidades | `feat/facial-recognition` |
| `fix/` | Corrección de errores | `fix/search-validation` |
| `refactor/` | Mejoras de código | `refactor/patient-service` |
| `docs/` | Documentación | `docs/api-endpoints` |
| `test/` | Pruebas | `test/search-algorithm` |

## Convención de Commits

Usa formato `tipo: asunto` en inglés:

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat:` | Nueva funcionalidad | `feat: implement hybrid search` |
| `fix:` | Corrección de error | `fix: correct similarity calculation` |
| `refactor:` | Reestructuración | `refactor: modularize search logic` |
| `docs:` | Documentación | `docs: update installation guide` |
| `test:` | Pruebas | `test: add patient search tests` |

## Proceso de PR

1. Mantén `main` actualizado:
   ```bash
   git switch main
   git pull origin main
   ```
2. Crea tu rama:
   ```bash
   git switch -c feat/tu-funcionalidad
   ```
3. Haz commits pequeños y frecuentes
4. Sube y abre un PR:
   ```bash
   git push -u origin feat/tu-funcionalidad
   ```
5. En la descripción del PR, incluye:
   - **Qué** — resumen de cambios
   - **Por qué** — justificación
   - **Cómo probar** — pasos para el revisor
   - **Notas** — breaking changes, impacto en otros servicios

## Requisitos para Merge

- [ ] Aprobación de al menos un maintainer
- [ ] Sin conflictos con `main`
- [ ] Nomenclatura correcta de ramas/commits
- [ ] Documentación actualizada (si aplica)

## ¿Dudas?

Abre un [issue](https://github.com/iapex-org/web-app/issues) o contacta a cualquier maintainer.
