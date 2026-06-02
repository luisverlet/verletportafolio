# Portafolio Profesional - Luis Vergel

Este proyecto es la base estructurada para el portafolio profesional de **Luis Vergel**, Desarrollador Full Stack. Está construido utilizando **Astro**, con **Yarn** como gestor de paquetes y listo para su despliegue en **Vercel**.

## 🚀 Arquitectura y Estructura

El proyecto sigue una estructura limpia, escalable y modular:

```text
src/
  assets/            # Recursos estáticos importables en componentes (imágenes, SVGs, etc.)
  components/
    common/          # Componentes globales y de diseño común (Navbar, Footer, Button, etc.)
    layout/          # Diseños base globales (BaseLayout)
    sections/        # Secciones principales de la landing page (Hero, Proyectos, Sobre mí, Contacto)
    ui/              # Componentes de interfaz reutilizables o interactivos (EmailCat, ProjectCard)
  data/              # Datos del sitio separados de la vista (Proyectos, Configuración general)
  pages/             # Páginas/Rutas del sitio (index.astro)
  styles/            # Estilos CSS globales, variables de diseño y utilidades
public/
  animations/        # Animaciones (como cat.json de Lottie)
  images/            # Imágenes de libre acceso público (proyectos, perfil)
```

## 🛠️ Tecnologías Principales

- **Framework**: [Astro](https://astro.build/) - Para un rendimiento óptimo de carga con la mínima carga de JS.
- **Estilos**: CSS nativo con variables de diseño, utilidades y animaciones optimizadas.
- **Animaciones**: `lottie-web` preparado para microinteracciones interactivas.
- **Despliegue**: Optimizado para [Vercel](https://vercel.com/) mediante integración oficial.

---

## 💻 Desarrollo Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Instalar Dependencias
Asegúrate de estar utilizando Yarn para instalar todos los paquetes necesarios:
```bash
yarn install
```

### 2. Iniciar el Servidor de Desarrollo
Para levantar el servidor local interactivo:
```bash
yarn dev
```
La aplicación estará disponible en `http://localhost:4321`.

### 3. Compilar para Producción
Para compilar y optimizar el portafolio para producción:
```bash
yarn build
```

### 4. Vista Previa de Producción
Para probar localmente el build de producción antes del despliegue:
```bash
yarn preview
```

---

## ☁️ Despliegue en Vercel

El proyecto incluye el adaptador `@astrojs/vercel` para facilitar un despliegue automático y óptimo en Vercel.

### Método 1: Git Integration (Recomendado)
1. Sube este repositorio a tu cuenta de GitHub (u otra plataforma Git compatible).
2. Entra a tu dashboard en [Vercel](https://vercel.com/) y crea un nuevo proyecto.
3. Importa el repositorio de tu portafolio.
4. Vercel detectará automáticamente que es un proyecto de **Astro** y configurará los comandos de build (`astro build`) y el directorio de salida de forma automática.
5. Haz clic en **Deploy**.

### Método 2: Vercel CLI
Si prefieres desplegar desde la terminal:
1. Instala el CLI de Vercel globalmente (si no lo tienes):
   ```bash
   npm install -g vercel
   ```
2. Ejecuta el comando de login e inicializa el despliegue en la raíz del proyecto:
   ```bash
   vercel
   ```
3. Para desplegar en producción:
   ```bash
   vercel --prod
   ```

---

## 🎨 Personalización Futura

- **Animación del Gato**: Coloca el archivo Lottie exportado de After Effects en `public/animations/cat.json`. El componente `EmailCat.astro` lo cargará automáticamente al estar en hover sobre la caja del correo electrónico. Si el archivo no se encuentra, se mostrará un fallback estático (SVG del gato).
- **Proyectos**: Agrega, edita o remueve proyectos modificando la lista en `src/data/projects.ts`.
- **Información General**: Actualiza tu correo, enlaces de redes sociales y secciones modificando `src/data/site.ts`.
