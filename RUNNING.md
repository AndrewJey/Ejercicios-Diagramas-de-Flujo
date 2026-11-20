

<!-- local-development:start -->
# Desarrollo local

Puedes abrir este repositorio en VS Code, Antigravity o Sublime Text. El compilador y los servicios necesarios dependen del componente indicado abajo.

## Archivos ignorados

`.gitignore` excluye credenciales locales, estado del editor y salidas de las herramientas detectadas. No deja de versionar archivos que ya estaban en Git. Los manifiestos, archivos de bloqueo, recursos fuente y scripts de esquema forman parte del código.
<!-- local-development:end -->


<!-- improvements-20261120:start -->
## Mejoras y verificación — 2026-11-20 (Simulador interactivo de ejercicios de diagramas de flujo)

- **Cambios:** Implementado motor `web-app/algorithms.js` e interfaz `web-app/index.html` con visualización de nodos y traza paso a paso para 6 algoritmos clásicos (Par/Impar, Mayor de 3, Factorial, Fibonacci, Primos y Promedio/Aprobación) más tema claro/oscuro.
- **Validación:** Node 24 `node --test web-app/tests/algorithms.test.mjs` (6/6 algoritmos verificados).
<!-- improvements-20261120:end -->
