## crud de Productos (HTML, CSS y JavaScript)

Proyecto front-end que implementa las operaciones básicas de un CRUD (Crear, Leer, Actualizar, Eliminar) para productos, con una interfaz sencilla y estilo responsivo.

## Estructura de archivos

/ (raíz del proyecto)
├── src
│ ├── script
│ │ └── gestion_de_datos.js
│ └── styles
│ └── styles.css
├── index.html
└── README.md
---

## Tecnologías usadas

- **HTML5** — Estructura semántica y accesible.
- **CSS3** — Diseño limpio, responsivo y efectos hover.
- **JavaScript** — CRUD completo sin dependencias externas.

---

## Funcionalidades

1. **Crear** productos (nombre + precio, ID único automático).
2. **Leer** y listar todos los productos en tiempo real.
3. **Actualizar** datos desde el mismo formulario.
4. **Eliminar** productos individualmente.
5. **Interfaz dinámica:** se actualiza al instante al interactuar.

---

## Cómo usar

1. Clona o descarga el proyecto:
   ```bash
   git clone https://github.com/SrLettuce/crud-entrenamiento-semana-2.git

## src/script/gestion_de_datos.js
Contiene toda la lógica CRUD:
- `createProduct(name, price)` – añade un producto con ID único.
- `getAllProduct()` – devuelve la lista completa.
- `getProductById(id)` – obtiene un producto por su ID.
- `updateProduct(id, name, price)` – modifica un producto existente.
- `removeProduct(id)` – elimina un producto por su ID.
- Función `render()` – dibuja la lista en el DOM y actualiza automáticamente.
- Manejadores de eventos para el formulario y botones.

## src/styles/styles.css
Estilos básicos pero dinámicos:
- Layout centrado y responsivo usando `flexbox`.
- Botones con efecto hover.
- Contenedor con esquinas redondeadas y sombra para mejor visual.

## index.html
Interfaz principal:
- Formulario con campos para nombre y precio.
- Lista `<ul id="product-list">` donde se muestran los productos.
- Referencias a CSS y JavaScript para funcionar correctamente.

##  Autor & Créditos
Nombre: Brandon Lechuga Benitez
correo: blechugabenitez@gmail.com
clan: Sierra.