# Proyecto Node.js - Clase 3

## 📌 Descripción
Este proyecto es una aplicación básica en **Node.js** con conexión a **MongoDB**, que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos.  
Se desarrolló como parte de la unidad de **Full Stack Developer (React, Angular, Node.js)**.

---

## 🚀 Instrucciones de instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/fedeavila/Clase_3_NodeJS.git 
cd Clase_3_NodeJS
```
### 2. Instalar dependencias
```bash
npm install
```
### 3. Ejecutar el servidor
```bash
npm run dev  
o bien:  
node index.js
```
El servidor se ejecutará en:  
```bash
http://localhost:3000
```
---

## 📬 Ejemplos de uso de las rutas

### 🔹 Obtener todos los productos (GET)
```bash
GET http://localhost:3000/api/products
```

### 🔹 Crear un producto (POST)
```bash
POST http://localhost:3000/api/products
```

Body (JSON):  
```bash
{
  "name": "Tablet Samsung",
  "price": 400,
  "stock": 15,
  "description": "Tablet Samsung Galaxy Tab A7"
}
```

### 🔹 Actualizar un producto (PUT)
```bash
PUT http://localhost:3000/api/products/:id
```
Body (JSON):  
```bash
{
  "price": 450,
  "stock": 20
}
```

### 🔹 Eliminar un producto (DELETE)
```bash
DELETE http://localhost:3000/api/products/:id
```

---

## 📸 Capturas de Postman
Ver PDF dentro de la carpeta Public del proyecto.

- **GET productos** → captura mostrando listado de productos.  
- **POST producto** → captura mostrando creación exitosa.  
- **PUT producto** → captura mostrando actualización.  
- **DELETE producto** → captura mostrando eliminación.  

---

## 👨‍💻 Créditos
- **Autor:** Federico Ávila  
- **Curso:** Full Stack Developer (React, Angular, Node.js)  
- **Unidad:** Clase 3 - CRUD con MongoDB  

---

## 📚 Fuentes y documentación utilizada
- [Documentación oficial de Node.js](https://nodejs.org/en/docs/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/docs/)  
- [Mongoose](https://mongoosejs.com/docs/)  
- Apuntes y material del curso de **Full Stack Developer**  
