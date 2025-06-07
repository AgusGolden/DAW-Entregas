// OBJETO CON FUNCIONES DE VALIDACIÓN
// Cada propiedad es el ID de un campo y su valor es una función que valida ese campo

const validators = {

    // Validación para el campo nombre completo
    nombreCompleto: (value) => {
        // Verificar que tenga más de 6 caracteres
        if (value.length <= 6) {
            return "El nombre debe tener más de 6 caracteres";
        }
        // Verificar que tenga al menos un espacio (para separar nombre y apellido)
        if (!value.includes(' ')) {
            return "El nombre debe tener al menos un espacio";
        }
        // Separar por espacios y verificar que realmente haya nombre y apellido
        const words = value.trim().split(' ');
        if (words.length < 2 || words.some(word => word.length === 0)) {
            return "Debe incluir nombre y apellido separados por espacio";
        }
        // Si llegamos aquí, no hay errores
        return null;
    },

    // Validación para el campo email
    email: (value) => {
        // Expresión regular para validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Ingresa un email válido";
        }
        return null; // Sin errores
    },

    contraseña: (value) => {
        // Al menos 8 caracteres
        if (value.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres";
        }
        // Al menos un número
        if (!/\d/.test(value)) {
            return "La contraseña debe contener al menos un número";
        }
        // Al menos una letra
        if (!/[a-zA-Z]/.test(value)) {
            return "La contraseña debe contener al menos una letra";
        }
        return null;
    },

    contraseña2: (value) => {
        // Al menos 8 caracteres
        if (value.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres";
        }
        // Al menos un número
        if (!/\d/.test(value)) {
            return "La contraseña debe contener al menos un número";
        }
        // Al menos una letra
        if (!/[a-zA-Z]/.test(value)) {
            return "La contraseña debe contener al menos una letra";
        }
        if (value !== document.getElementById('contraseña').value) {
            return "Las contraseñas no coinciden";
        }
        return null;
    },

    edad: (value) => {
        // Al menos 18 años
        if (value < 18) {
            return "Debe tener 18 años o más";
        }
        // Menos de 150 años
        if (value >= 150) {
            return "Debe tener menos de 150 años";
        }
        // Numero entero
        if (!Number.isInteger(Number(value))) {
            return "Debe ser un número entero";
        }
        return null;
    },

    telefono: (value) => {
        // Formato de teléfono
        const phoneRegex = /^\d{7,}$/; 
        if (!phoneRegex.test(value)) {
            return "El teléfono debe tener al menos 7 dígitos sin espacios ni caracteres especiales";
        }
        return null;
    },

    direccion: (value) => {
        // Al menos 5 caracteres
        if (value.length < 5) {
            return "La dirección debe tener al menos 5 caracteres";
        } 
        // Al menos una letra
        if (!/[a-zA-Z]/.test(value)) {
            return "La dirección debe contener letras";
        }
        // Al menos un número
        if (!/\d/.test(value)) {
            return "La dirección debe contener al menos un número";
        }
        // Al menos un espacio
        if ((value.indexOf(' ') <= 0 || value.indexOf(' ') === value.length - 1)) {
            return "La dirección debe contener al menos un espacio";
        }
        return null;
    },

    ciudad: (value) => {
        // Al menos 3 caracteres
        if (value.length < 3) {
            return "La ciudad debe tener al menos 3 caracteres";
        }
        return null;
    },

    codigoPostal: (value) => {
        // Al menos 3 caracteres
        if (value.length < 3) {
            return "El código postal debe tener al menos 3 caracteres";
        }
        // Formato del código postal
        const codigoPostalRegex = /^[a-zA-Z0-9\s-]+$/;
        if (!codigoPostalRegex.test(value)) {
            return "El código postal solo puede contener letras, números, espacios y guiones";
        }
        return null;
    },

    dni: (value) => {
        // Entre 7 y 8 dígitos
        if (value.length < 7 || value.length > 8) {
            return "El dni debe tener entre 7 y 8 dígitos";
        }
        return null;
    }
};

// FUNCIÓN PARA MOSTRAR MENSAJES DE ERROR
// Recibe el ID del campo y el mensaje de error a mostrar
function showError(fieldId, message) {
    const field = document.getElementById(fieldId); // Obtener el input
    const errorDiv = document.getElementById(`error-${fieldId}`); // Obtener el div del mensaje
    
    field.classList.add('error'); // Agregar clase CSS para estilo de error
    errorDiv.textContent = message; // Establecer el texto del error
    errorDiv.classList.add('show'); // Agregar clase para mostrar con animación
}

// FUNCIÓN PARA LIMPIAR MENSAJES DE ERROR
// Recibe el ID del campo del cual limpiar el error
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(`error-${fieldId}`);
    
    field.classList.remove('error'); // Quitar clase de error del input
    errorDiv.textContent = ''; // Limpiar texto del mensaje
    errorDiv.classList.remove('show'); // Ocultar mensaje con animación
}

// FUNCIÓN PRINCIPAL DE VALIDACIÓN
// Valida un campo específico y muestra/oculta errores según corresponda
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim(); // Obtener valor sin espacios al inicio/final
    
    // Verificar si el campo está vacío
    if (!value) {
        showError(fieldId, 'Este campo es obligatorio');
        return false; // Validación falló
    }

    // Buscar la función de validación específica para este campo
    const validator = validators[fieldId];
    if (validator) {
        const error = validator(value); // Ejecutar validación
        if (error) {
            showError(fieldId, error); // Mostrar error si existe
            return false;
        } else {
            clearError(fieldId); // Limpiar error si validación pasó
            return true;
        }
    }
    return true; // Si no hay validador específico, considerar válido
}

// ARRAY CON LOS IDs DE TODOS LOS CAMPOS A VALIDAR
const fields = ['nombreCompleto', 'email', 'contraseña', 'contraseña2', 'edad', 'telefono', 'direccion', 'ciudad', 'codigoPostal', 'dni'];

// CONFIGURAR EVENT LISTENERS PARA CADA CAMPO
fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    
    // Evento 'blur': se ejecuta cuando el usuario sale del campo (pierde el foco)
    field.addEventListener('blur', () => {
        validateField(fieldId); // Validar cuando el usuario termine de editar
    });
    
    // Evento 'focus': se ejecuta cuando el usuario entra al campo (obtiene el foco)
    field.addEventListener('focus', () => {
        clearError(fieldId); // Limpiar error para que el usuario pueda corregir
    });
});

// FUNCIONALIDAD BONUS: TÍTULO DINÁMICO
const nombreField = document.getElementById('nombreCompleto');
const titleElement = document.getElementById('dynamicTitle');

// Función que actualiza el título basándose en el nombre ingresado
function updateTitle() {
    const nombre = nombreField.value.trim();
    if (nombre) {
        // Si hay texto, mostrar "HOLA [NOMBRE]" en mayúsculas
        titleElement.textContent = `HOLA ${nombre.toUpperCase()}`;
    } else {
        // Si no hay texto, mostrar solo "HOLA"
        titleElement.textContent = 'HOLA';
    }
}

// Agregar event listeners para actualizar el título en tiempo real
nombreField.addEventListener('keydown', updateTitle); // Al presionar teclas
nombreField.addEventListener('focus', updateTitle);   // Al enfocar el campo
nombreField.addEventListener('input', updateTitle);   // Al cambiar el contenido

// CONFIGURACIÓN DEL MODAL (VENTANA EMERGENTE)
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

// Cerrar modal cuando se hace clic en la X
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar modal cuando se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// MANEJO DEL ENVÍO DEL FORMULARIO
document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir envío normal del formulario
    
    let hasErrors = false; // Flag para saber si hay errores
    const errors = []; // Array para recopilar errores
    
    // VALIDAR TODOS LOS CAMPOS
    fields.forEach(fieldId => {
        if (!validateField(fieldId)) {
            hasErrors = true;
            // Recopilar información del error para el modal
            const field = document.getElementById(fieldId);
            const label = field.previousElementSibling.textContent; // Obtener texto del label
            const errorMsg = document.getElementById(`error-${fieldId}`).textContent;
            errors.push(`${label}: ${errorMsg}`);
        }
    });

    // PREPARAR Y MOSTRAR EL MODAL
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (hasErrors) {
        // Si hay errores, mostrar lista de errores
        modalTitle.textContent = 'Errores en el Formulario';
        modalBody.innerHTML = `
            <div class="error-list">
                <h3>Por favor, corrige los siguientes errores:</h3>
                <ul>
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        // Si no hay errores, mostrar datos del formulario
        modalTitle.textContent = 'Formulario Enviado Correctamente';
        const formData = new FormData(this); // Obtener datos del formulario
        let dataHtml = '';
        
        // Generar HTML para mostrar cada campo y su valor
        for (let [key, value] of formData.entries()) {
            const label = document.querySelector(`label[for="${key}"]`).textContent;
            dataHtml += `
                <div class="data-item">
                    <div class="data-label">${label}:</div>
                    <div>${value}</div>
                </div>
            `;
        }
        
        modalBody.innerHTML = dataHtml;
    }
    
    // Mostrar el modal
    modal.style.display = 'block';
});
