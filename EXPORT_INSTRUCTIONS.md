# Exportar Ironsworn Lodestar App

Para exportar toda la aplicación a tu disco local, sigue estos pasos:

## Método 1: Descarga directa desde Replit
1. Ve a la pestaña "Files" en Replit
2. Haz clic derecho en la carpeta raíz del proyecto
3. Selecciona "Download as ZIP"

## Método 2: Clonar con Git (si tienes Git instalado)
```bash
git clone [URL_DEL_REPOSITORIO_REPLIT]
```

## Estructura de archivos de la aplicación:

### Archivos principales de configuración:
- `package.json` - Dependencias del proyecto
- `vite.config.ts` - Configuración de Vite
- `tailwind.config.ts` - Configuración de Tailwind CSS
- `tsconfig.json` - Configuración de TypeScript
- `drizzle.config.ts` - Configuración de base de datos
- `postcss.config.js` - Configuración de PostCSS

### Estructura del cliente (frontend):
- `client/index.html` - Archivo HTML principal
- `client/src/main.tsx` - Punto de entrada
- `client/src/App.tsx` - Componente principal
- `client/src/index.css` - Estilos globales

### Componentes principales:
- `client/src/components/character-sheet.tsx` - Hoja de personaje
- `client/src/components/dice-roller.tsx` - Sistema de dados
- `client/src/components/oracles.tsx` - Oráculos
- `client/src/components/moves.tsx` - Movimientos
- `client/src/components/journal.tsx` - Diario
- `client/src/components/data-manager.tsx` - Gestión de datos
- `client/src/components/progress-tracker.tsx` - Juramentos

### Lógica de datos:
- `client/src/lib/game-data.ts` - Datos del juego y oráculos
- `client/src/lib/storage.ts` - Sistema de almacenamiento
- `client/src/hooks/use-game-data.ts` - Hook principal de datos

### Servidor (backend):
- `server/index.ts` - Servidor principal
- `server/routes.ts` - Rutas de API
- `server/storage.ts` - Almacenamiento del servidor

## Para ejecutar localmente después de descargar:

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Para compilar para producción:
```bash
npm run build
```

## Características implementadas:
✅ Gestión completa de personajes
✅ Sistema de dados con cálculos automáticos  
✅ 19 oráculos completos según PDF Lodestar
✅ Referencia de movimientos
✅ Diario con soporte de imágenes
✅ Sistema de juramentos (progress trackers)
✅ Exportación/importación de datos locales
✅ Interfaz completamente en español
✅ Diseño responsive
✅ Almacenamiento local automático

¡Tu aplicación Ironsworn Lodestar está completamente funcional y lista para usar!