// Clase Personaje
class Personaje {
    constructor(nombre, clase, nivel, experiencia) {
        this.nombre = nombre;
        this.clase = clase;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }

    atacar(enemigo) {
        // Lógica de combate
    }

    ganarExperiencia(experienciaGanada) {
        this.experiencia += experienciaGanada;
        // Lógica para subir de nivel si es necesario
    }
}

// Clase Enemigo
class Enemigo {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }

    recibirAtaque(ataque) {
        // Lógica para recibir daño
    }
}

// Clase Jugador (extiende de Personaje)
class Jugador extends Personaje {
    constructor(nombre, clase) {
        super(nombre, clase, 1, 0);
    }
}

class Guerrero extends Jugador {
    constructor(nombre) {
        super(nombre, "Guerrero", 1, 0);
        this.ataque = 15; // Puntos de ataque para el Guerrero
    }

    atacar(enemigo) {
        // Lógica de ataque específica para el Mago
        const danio = this.ataque + Math.floor(Math.random() * 5); // Daño mágico para Mago
        enemigo.recibirAtaque();
    }
}

// Clase Mago (hereda de Personaje)
class Mago extends Jugador {
    constructor(nombre) {
        super(nombre, "Mago", 1, 0);
        this.magia = 20; // Puntos de magia para el Mago
    }

    atacar(enemigo) {
        // Lógica de ataque específica para el Mago
        const danio = this.magia + Math.floor(Math.random() * 5); // Daño mágico para Mago
        enemigo.recibirAtaque();
    }
}

// Clase Arquero (hereda de Personaje)
class Arquero extends Jugador {
    constructor(nombre) {
        super(nombre, "Arquero", 1, 0);
        this.precision = 10; // Puntos de precisión para el Arquero
    }

    atacar(enemigo) {
        // Lógica de ataque específica para el Arquero
        const danio = this.precision + Math.floor(Math.random() * 5); // Daño a distancia para Arquero
        enemigo.recibirAtaque();
    }
}
// Aquí puedes agregar más clases de personajes, habilidades, etc.

// Evento de carga de página
document.addEventListener("DOMContentLoaded", () => {
    // Aquí puedes escribir el código para crear y gestionar personajes
});

// Evento de carga de página
document.addEventListener("DOMContentLoaded", () => {
    const formCrearPersonaje = document.getElementById("form-crear-personaje");
    const infoPersonaje = document.getElementById("info-personaje");

    formCrearPersonaje.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById("nombre").value;
        const clase = document.getElementById("clase").value;

        if (nombre && clase) {
            // Crear una instancia de la clase correspondiente
            let nuevoPersonaje;
            switch (clase) {
                case "Guerrero":
                    nuevoPersonaje = new Guerrero(nombre);
                    break;
                case "Mago":
                    nuevoPersonaje = new Mago(nombre);
                    break;
                case "Arquero":
                    nuevoPersonaje = new Arquero(nombre);
                    break;
                default:
                    alert("Clase no válida");
                    return;
            }

            // Mostrar información del personaje
            let caracteristicasEspecificas = "";
            if (clase === "Guerrero") {
                caracteristicasEspecificas = `Ataque: ${nuevoPersonaje.ataque}`;
            } else if (clase === "Mago") {
                caracteristicasEspecificas = `Magia: ${nuevoPersonaje.magia}`;
            } else if (clase === "Arquero") {
                caracteristicasEspecificas = `Precisión: ${nuevoPersonaje.precision}`;
            }

            infoPersonaje.innerHTML = `
                <p>Nombre: ${nuevoPersonaje.nombre}</p>
                <p>Clase: ${nuevoPersonaje.clase}</p>
                <p>Nivel: ${nuevoPersonaje.nivel}</p>
                <p>Experiencia: ${nuevoPersonaje.experiencia}</p>
                <p>Características específicas:</p>
                <p>${caracteristicasEspecificas}</p>
            `;
        } else {
            alert("Por favor, ingresa un nombre y una clase.");
        }
    });
});