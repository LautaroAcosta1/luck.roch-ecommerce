# Luck Roch - Ecommerce (https://luckroch.netlify.app/)

Este es un proyecto de e-commerce de ropa desarrollado con **React** en el frontend y un backend con **Node.js, Express y MongoDB Atlas**. El frontend está alojado en **Netlify** y el backend en **Vercel**.

## 🚀 Tecnologías Utilizadas

### Frontend

- **React**
- **Axios** (para consumir la API)
- Styled Components / Bootstrap (en algunos casos)
- **Netlify** (para el hosting del frontend)

### Backend

- **Node.js** con **Express.js**
- **MongoDB Atlas** (base de datos en la nube)
- **Mongoose** (ORM para MongoDB)
- **Vercel** (para el hosting del backend)

## 📂 Estructura del Proyecto

```
📦 luck-roch
 ┣ 📂 frontend  (React)
 ┃ ┣ 📂 public
 ┃ ┃ ┣ 📂 assets
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┗ index.js
 ┃ ┗ package.json
 ┣ 📂 backend  (Node.js + Express)
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ index.js
 ┃ ┗ package.json
 ┣ 📂 database (MongoDB Atlas)
 ┗ README.md
```

## 🌍 Despliegue

### 1️⃣ **Frontend en Netlify**

1. Subir el código a un repositorio en **GitHub**.
2. Ir a [Netlify](https://www.netlify.com/), conectar el repo y configurar el **build command**:
   ```bash
   npm run build
   ```
3. Definir la variable de entorno con la URL del backend alojado en Vercel.
4. Publicar.

### 2️⃣ **Backend en Vercel**

1. Subir el backend a un repositorio en **GitHub**.
2. Instalar la CLI de Vercel e iniciar sesión:
   ```bash
   npm i -g vercel
   vercel login
   ```
3. Desde la carpeta del backend, ejecutar:
   ```bash
   vercel
   ```
4. Configurar variables de entorno (MongoDB URI, PORT, etc.).
5. Desplegar.

## 🛠️ Uso de la API con Postman

Para probar la API puedes usar **Postman**:

1. **Obtener productos**: GET [https://luck-roch-ecommerce-back.onrender.com/api/products](https://luck-roch-ecommerce-back.onrender.com/api/products)
2. **Agregar producto**: POST [https://luck-roch-ecommerce-back.onrender.com/api/products](https://luck-roch-ecommerce-back.onrender.com/api/products)
   ```json
   {
     "name": "Remera Negra",
     "price": 4999,
     "category": "Remeras",
     "quantity": 10,
     "imageUrl": "https://imagen.com/remera.jpg"
   }
   ```
3. **Actualizar producto**: PATH  [https://luck-roch-ecommerce-back.onrender.com/api/products\:id](https://luck-roch-ecommerce-back.onrender.com/api/products\:id)
4. **Eliminar producto**: DELETE [https://luck-roch-ecommerce-back.onrender.com/api/products\:id](https://luck-roch-ecommerce-back.onrender.com/api/products\:id)

## 📌 Notas Importantes

- La base de datos **MongoDB Atlas** debe permitir conexiones desde todas las IPs (o configurar la IP correcta en la whitelist).
- Al hacer cambios en el backend, hay que redeploy en **Vercel** para que se reflejen en la API.
- Si el frontend no refleja cambios, probar limpiar caché en Netlify.

## ✨ Mejoras Futuras

- Implementación de autenticación con JWT.
- Mejoras en la interfaz del usuario.
- Métodos de pago integrados (ej: Stripe o MercadoPago).

---

