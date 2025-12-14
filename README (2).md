# Arqui Limpia - API de Gestión de Tareas

Una API REST para la gestión de tareas implementada con arquitectura limpia en Node.js.

## Descripción

Esta aplicación permite crear, listar y completar tareas a través de una API REST. Está estructurada siguiendo los principios de arquitectura limpia, separando las responsabilidades en capas: entidades, casos de uso, infraestructura e interfaz.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express.js**: Framework web para la API REST
- **Nodemon**: Herramienta para desarrollo (reinicio automático)

## Instalación

1. Clona el repositorio o navega al directorio del proyecto.
2. Instala las dependencias:

```bash
npm install
```

## Uso

### Desarrollo

Para ejecutar la aplicación en modo desarrollo (con reinicio automático):

```bash
npm run dev
```

### Producción

Para ejecutar la aplicación en producción:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000` (o el puerto configurado).

## API Endpoints

### Crear una Tarea
- **POST** `/tareas`
- **Body**: `{ "titulo": "Título de la tarea" }`
- **Respuesta**: Objeto de tarea creado

### Listar Tareas
- **GET** `/tareas`
- **Respuesta**: Array de tareas

### Completar una Tarea
- **PATCH** `/tareas/:id`
- **Respuesta**: Objeto de tarea actualizado

## Estructura del Proyecto

```
Arqui_limpia/
├── casos-de-usos/          # Casos de uso de la aplicación
│   ├── CompletarTarea.js
│   ├── CrearTarea.js
│   └── ListarTarea.js
├── entidades/              # Entidades del dominio
│   └── Tarea.js
├── infraestructura/        # Capa de infraestructura
│   └── RepoMemoria.js
├── interfaz/               # Capa de interfaz (API REST)
│   └── app.js
└── package.json
```

## Arquitectura

El proyecto sigue los principios de **Arquitectura Limpia**:

- **Entidades**: Representan los objetos del dominio (Tarea)
- **Casos de Uso**: Contienen la lógica de negocio
- **Infraestructura**: Maneja la persistencia de datos (en memoria)
- **Interfaz**: Expone la API REST

## Pruebas

Actualmente no hay pruebas configuradas. Para agregar pruebas:

```bash
npm test
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

ISC