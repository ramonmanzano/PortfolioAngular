TITLE: Portfolio Profesional en Angular
AUTHOR: Ramón Manzano
LANGUAGE: es

Descripción del proyecto

Este proyecto consiste en el desarrollo de un *portfolio profesional como aplicación web de una sola página (SPA)* utilizando *Angular*, como evolución de un portfolio previo desarrollado con tecnologías frontend básicas.

El objetivo es aplicar de forma práctica los conceptos fundamentales vistos en clase: componentización, enrutamiento, servicios, formularios, almacenamiento web y buenas prácticas en TypeScript, manteniendo una estructura clara y escalable.

Tecnologías utilizadas

- Angular
- TypeScript
- HTML5
- SCSS (CSS propio, sin frameworks externos)
- Angular Router
- Angular Forms (Reactive Forms)
- LocalStorage
- Git y GitHub

Estructura del proyecto

El proyecto sigue una arquitectura modular basada en componentes:

Home
Presentación personal
Información profesional y académica
Diseño estructurado tipo currículum vitae

Portfolio
Listado de proyectos realizados
Uso de componentes reutilizables para cada proyecto
Renderizado dinámico mediante *ngFor

Contacto
Formulario de contacto funcional
Implementado con Reactive Forms
Validaciones de campos obligatorios y formato de correo electrónico

Además, se incluyen componentes compartidos:
Navbar
Footer
Tarjeta de proyecto (Project Card)

Enrutamiento

La navegación entre las distintas secciones se realiza mediante *Angular Router*, configurando la aplicación como SPA.

Rutas principales:
- /home
- /portfolio
- /contact

Se utiliza *router-outlet* para la carga dinámica de vistas y *routerLink* para la navegación entre componentes.

Uso de almacenamiento web

Se implementa un servicio específico para la gestión de almacenamiento en el cliente utilizando *localStorage*.

Este almacenamiento se emplea para guardar preferencias del usuario (por ejemplo, el tema visual), siguiendo buenas prácticas y evitando el uso de datos sensibles.

Uso de TypeScript y buenas prácticas

Uso de tipado fuerte mediante interfaces y tipos.
- Evita el uso del tipo *any*.
- Separación de responsabilidades mediante servicios.
- Manejo controlado de errores en el acceso a almacenamiento.
- Código organizado, legible y mantenible.

Diseño y experiencia de usuario

- Diseño responsive adaptable a dispositivos móviles y escritorio.
- Estilos desarrollados con SCSS propio.
- Uso de CSS Grid y Flexbox.
- Interfaz limpia y orientada a un entorno profesional.
- No se utiliza Bootstrap ni frameworks CSS externos.

Pruebas unitarias

El proyecto incluye pruebas unitarias básicas generadas con Angular CLI para componentes y servicios (*.spec.ts*), verificando la correcta creación y configuración de los mismos.

La estructura queda preparada para la ampliación de pruebas más avanzadas.

Control de versiones

El código fuente se encuentra versionado en GitHub mediante commits progresivos que reflejan el desarrollo del proyecto.

Repositorio:
https://github.com/ramonmanzano/PortfolioAngular

Ejecución del proyecto

1. Instalar dependencias:
   #+begin_src bash
   npm install
   #+end_src

2. Ejecutar en entorno de desarrollo:
   #+begin_src bash
   ng serve
   #+end_src

3. Acceder desde el navegador:
   http://localhost:4200

Autor

Ramón Manzano  
Desarrollo de Aplicaciones Web (DAW)
