
// Seleccionamos el contenedor del menú desplegable de categorías.
// Se utiliza 'let' porque en el futuro podríamos necesitar reasignar la variable, 
// aunque en este caso 'const' sería también adecuado si no va a cambiar.
let categorias = document.querySelector('.categorias-modal');

/**
 * Función encargada de alternar (mostrar/ocultar) el modal de categorías.
 * Funciona verificando si la clase 'active' está presente en el elemento.
 */
function mostrarCategorias() {
    // Verificamos si el elemento ya tiene la clase 'active'
    if (categorias.classList.contains('active')) {
        // Si la tiene, se la quitamos para ocultar el menú
        categorias.classList.remove('active');
    } else {
        // Si no la tiene, se la añadimos para mostrar el menú
        categorias.classList.add('active');
    }
}

// ----------------------------------------------------------------------------
// LÓGICA PARA EL MENÚ HAMBURGUESA 
// ----------------------------------------------------------------------------

// Seleccionamos el botón de menú hamburguesa usando su ID
const menuToggle = document.getElementById('menuToggle');

// Seleccionamos el contenedor de los enlaces de navegación inferiores
const navbarMenu = document.getElementById('navbarMenu');

/**
 * Añadimos un 'event listener' (escuchador de eventos) al botón del menú.
 * Cuando el usuario hace 'click', se ejecuta la función de callback.
 * Esta lógica es esencial para la responsividad en dispositivos móviles.
 */
if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
        // La función toggle() añade la clase 'active' si no existe, o la quita si existe.
        // Esto permite abrir y cerrar el menú móvil con un solo botón.
        navbarMenu.classList.toggle('active');
    });
}


let btnfiltro = document.getElementById("btn-filtros")
let filtros = document.querySelector('.filtros')


    btnfiltro.addEventListener('click', () => {
        if (filtros.classList.contains("active")) {
            
            filtros.classList.remove('active')
            
        } else {
            filtros.classList.add('active')
            console.log(filtros)
        }
    })