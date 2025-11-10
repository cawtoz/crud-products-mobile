# CRUD Products - Mobile App

Aplicación móvil para visualizar productos desarrollada con React Native y Expo.

## 🚀 Tecnologías

- **React Native** con **TypeScript**
- **Expo** - Framework y tooling
- **Axios** - Cliente HTTP para API

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn
- **Expo Go** app instalada en tu dispositivo móvil (iOS/Android)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## ⚙️ Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar URL de la API (Opcional)

Si quieres conectarte a la API en lugar de usar datos estáticos, edita `src/api/productsApi.ts`:

```typescript
// Cambiar localhost por la IP de tu computadora en la red local
const API_URL = 'http://TU_IP_LOCAL:3000/api/products';
// Ejemplo: const API_URL = 'http://192.168.1.100:3000/api/products';
```

## 🎯 Ejecutar el Proyecto

### Iniciar el servidor de desarrollo

```bash
npm start
```

### Opciones para ejecutar:

1. **Escanear QR con Expo Go** (Recomendado)
   - Abre la app Expo Go en tu teléfono
   - Escanea el código QR que aparece en la terminal

2. **Android Emulator**
   ```bash
   npm run android
   ```

3. **iOS Simulator** (solo en Mac)
   ```bash
   npm run ios
   ```

## ✨ Funcionalidades

- ✅ Visualizar lista de productos
- ✅ Dos modos de visualización:
  - **Productos Estáticos**: Datos mock (sin conexión a API)
  - **Productos de API**: Consume la API REST (requiere backend)
- ✅ Diseño responsive y nativo
- ✅ Compatibilidad con iOS y Android

## 🗂️ Estructura del Proyecto

```
crud-products-mobile/
├── src/
│   ├── api/
│   │   ├── mockProducts.ts    # Datos estáticos
│   │   └── productsApi.ts     # Cliente API
│   ├── components/
│   │   └── product/
│   │       ├── ProductCard.tsx
│   │       ├── ProductListApi.tsx
│   │       └── ProductListStatic.tsx
│   └── types/
│       └── Product.ts
├── App.tsx
├── index.ts
├── app.json
└── package.json
```

## 📱 Componentes Principales

- **ProductListStatic**: Lista de productos con datos mock (modo offline)
- **ProductListApi**: Lista de productos consumiendo la API REST
- **ProductCard**: Tarjeta individual de producto

## 🔗 Conexión con Backend (Opcional)

Para conectar con la API:

1. Asegúrate de que la API esté ejecutándose
2. Obtén la IP local de tu computadora:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig` o `ip addr`
3. Actualiza la URL en `src/api/productsApi.ts`
4. Asegúrate de que tu teléfono esté en la misma red WiFi

**Nota**: Por defecto, la app muestra datos estáticos y no requiere conexión a la API.

## 📝 Notas

- La versión móvil cumple con el requisito de "lista de productos estática sin conexión a base de datos"
- Se incluye opcionalmente la integración con API para demostrar conectividad
- Compatible con iOS y Android mediante Expo
