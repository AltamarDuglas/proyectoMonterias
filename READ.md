# Montería Vende - Carrusel (Documentación de Interfaz)

¡Hola! Este repositorio contiene la interfaz de navegación (Navbar) y sección de filtros principal para la plataforma **Montería Vende**. Todo está construido desde cero priorizando la ligereza, el diseño responsivo y la mantenibilidad del código bajo principios SOLID.

## 🚀 Tecnologías y Enfoque

- **HTML5 Semántico**: Para estructurar el documento con etiquetas claras (`<header>`, `<nav>`, `<article>`, `<section>`), lo cual mejora la accesibilidad y el SEO.
- **CSS3 Puro (Vanilla CSS)**: Sin frameworks externos. Todo el sistema está basado en **Flexbox** para la alineación.
- **JavaScript Vanilla**: Pequeños scripts sin dependencias para manejar la interactividad de menús.
- **Enfoque Desktop-First**: El estilo principal está enfocado en pantallas de escritorio. A través del uso de la regla `@media (max-width: 768px)`, la interfaz se reconfigura para dispositivos móviles.

---

## 🏗️ Arquitectura y Clases CSS Utilizadas

Para facilitar el mantenimiento y seguir el principio de Responsabilidad Única (Single Responsibility), cada clase se enfoca en controlar un área específica o componente de la barra de navegación:

### 1. Clases de la Barra de Navegación (Navbar)
* `.navbar`: Contenedor padre de la barra de navegación. Utiliza `display: flex; flex-direction: column;` para separar la barra superior de los enlaces inferiores. Posee fondo oscuro (`black`).
* `.header-top`: Agrupa todos los elementos de la parte superior (Logo, buscador, perfil). En escritorio se usa `justify-content: space-between` para distribuir el espacio horizontalmente, y en móvil se apila verticalmente.
* `.desktop-only`: Elemento (como la línea separadora `<hr>`) que se muestra exclusivamente en vista de escritorio y desaparece en la vista móvil.
* `.header-bottom`: Contiene la ubicación actual y la botonera principal del catálogo. Oculto por defecto en la versión móvil hasta que el usuario interactúa.

### 2. Clases de Elementos Interactivos
* `.menu-toggle`: Botón tipo hamburguesa (☰). Permanece `display: none` en resoluciones de PC. En dispositivos móviles (`max-width: 768px`) se activa y permite desplegar el menú inferior.
* `.modal` y `.categorias-wrapper`: Diferentes contenedores alternativos para seleccionar las categorías de la tienda. En móvil permanecen ocultos por temas de espacio.
* `.btn-categorias`: Botón estilizado transparente para desplegar el modal de categorías en vista PC.
* `.categorias-modal`: Lista de enlaces oculta (`display: none; position: absolute;`) que funciona como un menú desplegable "Dropdown". Al hacer clic, JavaScript le inserta la clase `.active` para volverlo visible (`display: block`).

### 3. Clases de Formularios y Acciones
* `.busqueda-container`: Un contenedor de tipo *flex-grow* que hace que el campo de texto ocupe todo el espacio sobrante posible, manteniendo un ancho máximo definido.
* `#input-busqueda`: El campo real donde el usuario escribe.
* `.user-actions`: Contenedor para el carrito de compras, favoritos, inicio de sesión y ayuda. Agrupa los ítems lateralmente en PC, y los apila en móviles.

### 4. Clases del Menú Inferior (Catálogo)
* `.ubicacion-container`: Caja pequeña con icono y texto para saber la tienda actual (ej: *Montería*).
* `.items-menu`: Lista (`<ul>`) que remueve los viñetas tradicionales. En escritorio, ubica los enlaces uno al lado del otro. En celular, los agrupa en forma de columna ocupando el 100% de la pantalla para facilitar los toques.

### 5. Clases de la Sección de Filtros
* `.filtros`: Contenedor principal estilo tarjeta (`border-radius`, `background: white`) que ubica los filtros a un lado.
* `.listas-tiendas`: Organización de casillas de verificación (checkboxes) mediante Flexbox vertical (`flex-direction: column`) con su respectivo espaciado entre opciones (`gap`).

---

## ⚙️ Interactividad JavaScript (`code.js`)

Se integraron dos flujos principales, siempre chequeando la existencia de los elementos para no generar errores de consola:

1. **Menú Desplegable de Categorías (Escritorio):** 
   A través de la función `mostrarCategorias()`, detectamos si el panel modal tiene la clase `.active`. De no tenerla, se la agregamos para abrirlo; si ya la tiene, se la quitamos para cerrarlo (comportamiento de "toggle").
2. **Menú Hamburguesa (Móviles):**
   Al hacer clic en el botón con ID `menuToggle`, activamos la clase `.active` sobre el contenedor `navbarMenu`. Al hacerlo, en la vista móvil el contenedor deja de estar oculto para desplegarse como un recuadro oscuro sobre la pantalla (`position: absolute`, `background-color: black`).

---

> **Nota para los Devs:** Cualquier nuevo bloque que desees agregar a la navbar debe añadirse dentro de las divisiones ya existentes (`.header-top` o `.header-bottom`) y asignarle clases exclusivas. Recuerda probar cómo reacciona bajando la ventana del navegador a menos de 768px.
