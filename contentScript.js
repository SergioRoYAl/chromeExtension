
//BASICAMENGTE ESTOY IMPLEMENTANDO EL PROCESO DE LA ACTUAL REALIDAD PARA ENCVONTRAR SUCEESOS DE CASUALIDAD AQUÏ CADA VEZ QUE SE ENCUENTRE 
//ENTONCES SE AÑADIRÄ UNA ENTRADA EN EL CONTENEDOR DE LA EXTENSION
//EN ESTE CASO SE AÑADIRÄ UN DIV CON EL NUMERO ALEATORIO QUE SE GENERA CADA VEZ QUE SE HACE CLICK EN EL BOTON
function generateRandomNumber() {
    return Math.floor(Math.random() * 110000) + 1; // Genera un número aleatorio entre 1 y 100
}

//a esto le deberiamos pasar iteradas veces fragmentos de todo el codigo,abajo de esta funcion la implementamos
function loquemeenvian(cadn, ndac) {
    if(cadn == ndac){
        console
        if(cadn.split("").lowerCase() == ndac.split("").lowerCase()){
            //Now just get de numbers
             if(cadn.match(/\d+/g).map(Number) == ndac.match(/\d+/g).map(Number)){
                var div = document.createElement("div"); // Crea un elemento div
                div.textContent = "ESTABLECEMOS: " + cadn; // Asigna el texto con el número aleatorio al div
                document.getElementById("container").appendChild(div);
             
             }

        }

    } else {

    }
}

//funcion para pasar fragmentadamente un string a la funcion loqueeenvian
function fragmentar(cadn, ndac){
    console.log(cadn, ndac)
    for (let i = 0; i < cadn.length; i++) {
        for(let j = 0; j < cadn.length; j++){
            loquemeenvian(cadn[i], ndac[j]);
        }
        
    }
}

function clickElementByRoleAndClass(role, className) {
    var elements = document.querySelectorAll(`[role="${role}"].${className}`);
    if (elements.length > 0) {
        elements[0].click(); // Si hay múltiples elementos que coinciden con el selector, haz clic en el primero
    } else {
        console.error(`No se encontró ningún elemento con role="${role}" y clase "${className}"`);
    }
}

function clickElementByHref(href) {
    var elements = document.querySelectorAll(`a[href="${href}"]`);
    if (elements.length > 0) {
        elements[0].click();
        console.log("clickó") // Si hay múltiples elementos que coinciden con el selector, haz clic en el primero
    } else {
        console.error(`No se encontró ningún elemento <a> con href="${href}"`);
    }
}

// Agrega un listener al botón en la ventana de la extensión para que llame a la función appendRandomNumberDiv cuando se haga clic
document.addEventListener("DOMContentLoaded", function() {
    clickElementByHref("/items/new");
  
    
});
