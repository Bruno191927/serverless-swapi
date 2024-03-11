# Descripción del Proyecto

Este proyecto, implementado con el framework Serverless, consta de cuatro endpoints:

- **/getPeople** (GET): Obtiene información sobre personas.
- **/getSpecies** (GET): Obtiene información sobre especies.
- **/skill** (GET): Obtiene habilidades.
- **/skill** (POST): Crea una nueva habilidad.

Se ha seguido una arquitectura hexagonal para garantizar las mejores prácticas de programación y adherencia a los principios SOLID. La estructura del proyecto se divide en:

- **Core**: Contiene archivos y configuraciones globales.
- **Functions**: Contiene las funciones Lambda organizadas en módulos.
    - **Modulo**
        - **domain**: Contiene entidades y repositorios.
        - **application**: Contiene los casos de uso del módulo.
        - **infraestructura**: Contiene los controladores y adaptadores de respuesta.

Este enfoque arquitectónico permite una separación clara de las preocupaciones y facilita el mantenimiento y la escalabilidad del proyecto.
    
## Instalaciones y Recomendaciones Necesarias

### Antes de Iniciar
Antes de comenzar, asegúrate de tener lo siguiente:
- Node.js versión 16 o superior instalado en tu sistema.
- NPM (Node Package Manager) instalado en tu sistema.

### Instalaciones del Proyecto
Para instalar las dependencias del proyecto, sigue estos pasos:
1. Abre una terminal.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las bibliotecas necesarias:
    ```bash
    npm install
    ```
4. Iniciar el Proyecto en Desarrollo
 - Para ejecutar el proyecto en modo de desarrollo, sigue estos pasos:
    ```bash
    npm run sls:dev
    ```
## Deploy en aws
 - Asegurate de tener configurado tu aws settings
 - Ejecutar cualquiera de los siguientes comandos
    - para ver los logs
    ```bash
        serverless deploy --verbose
    ```
    - para deployar sin ver los logs
    ```bash
        serverless deploy
    ```

## Checklist 
- [x] Implementación de una API en Node.js utilizando el framework Serverless para su despliegue en AWS.
- [x] Adaptación y transformación de los modelos de la API de SWAPI a español
- [x] Diseño y creación de un modelo personalizado a través de endpoints para la insercion y lectura de la base de datos.

## Puntos
- [x] Mínimo 2 endpoints
- [x] Integración con un DynamoDB
- [x] Integración con SWAPI
- [x] Traducción de atributos de inglés a español
- [x] Uso de Serverless Framework
- [x] Uso de Node.js
- [x] Respeto de las buenas prácticas de desarrollo

## Bonus
- [] Pruebas Unitarias
- [x] Uso de TypeScript
- [x] Deploy sin errores
- [x] Trabajar en capas y por dominio