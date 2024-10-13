
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 60) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }

});


document.addEventListener("scroll", function(){
    const luna = document.getElementById("luna");
    let posicionScroll = window.scrollY;
    let ejeY = Math.min(posicionScroll * 2, 300);
    let ejeX = Math.min(posicionScroll * 2, 300);

    luna.style.transform = `translate(${ejeX}px, ${ejeY}px)`;
});


document.addEventListener("scroll", function(){
    const frente = document.getElementById("frente");
    let posicionScroll = window.scrollY;
    let ejeY = Math.min(posicionScroll * 0.1, 200);

    frente.style.transform = `translateY(-${ejeY}px)`;
});

document.addEventListener("scroll", function(){
    const medio = document.getElementById("medio");
    let posicionScroll = window.scrollY;
    let ejeY = Math.min(posicionScroll * 0.3, 200);

    medio.style.transform = `translateY(${ejeY}px)`;
});



document.addEventListener("scroll", function(){
    const bienvenida = document.getElementById("bienvenida");
    let posicionScroll = window.scrollY;
    let ejeY = Math.min(posicionScroll * 2, 350);

    bienvenida.style.transform = `translateY(-${ejeY}px)`;
});


window.addEventListener('scroll', function() {
    const background = document.getElementById('banner-inicial');
    const scrollPosition = window.scrollY;

    const maxScroll = 400; // Ajusta este valor según cuándo quieres que la imagen sea completamente transparente
    const opacity = Math.max(1 - (scrollPosition / maxScroll), 0); // Asegura que no baje de 0
    background.style.opacity = opacity;

});


document.addEventListener("DOMContentLoaded", function(event) {

    const proyectos = document.querySelectorAll(".pro")
    

    // funcion para animar los circulos
    function animarCirculos(circulos){
        circulos.forEach(function(progress) {
            let degree = 0; // Start at 0 degrees
            let targetDegree = parseInt(progress.getAttribute("data-degree")); // Get the target degree
            let color = progress.getAttribute("data-color"); // Get the color for the gradient
            
            // Set up an interval to update the background
            let interval = setInterval(function() {
                degree += 1; // Increment the degree by 1
                // If the current degree exceeds the target, stop the interval
                if (degree > targetDegree) {
                    clearInterval(interval);
                    return;
                }
                // Update the background using a conic gradient
                progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
                }, 50); // Interval duration of 50 milliseconds
            });
    }


    //iterar sobre cada proyecto
    proyectos.forEach(function(proyecto){
        const circulos = proyecto.querySelectorAll(".circulo");
        const contenedorP = proyecto.querySelector(".contenedorP");
        const imagenP = proyecto.querySelector(".imagenP")
        // Evento para mostrar el contenedor y ejecutar la animación
        proyecto.addEventListener("mouseenter", function() {
            const capa = proyecto.querySelector(".capa");
            capa.style.visibility = "visible";
            capa.style.opacity = "1";
            animarCirculos(circulos);

            imagenP.style.rotate = "x 35deg";
            contenedorP.style.transform = "translateY(0)";
        });
        proyecto.addEventListener("mouseleave", function() {
            const capa = proyecto.querySelector(".capa");
            capa.style.opacity = "0"; // Hazla invisible
            imagenP.style.rotate = "x 0deg";
            contenedorP.style.transform = "translateY(70px)";
        });
    });
});

    
const btnSaberMas = document.getElementById("saberMas");

btnSaberMas.addEventListener("click", function(){
    const sobreMi = document.getElementById("sobreMi");
    const card = document.getElementById("card");
    const masSobreMi = document.querySelector(".masSobreMi");

    // Fade out effect
    sobreMi.style.opacity = "0";
    card.style.opacity = "0";

    // Wait for the fade-out to complete before changing visibility
    setTimeout(() => {
        sobreMi.style.visibility = "hidden";
        card.style.visibility = "hidden";
        
        masSobreMi.style.visibility = "visible";
        masSobreMi.style.opacity = "1";
    }, 500); // Adjust the timeout to match the CSS transition duration
});

const btnVolver = document.getElementById("volver");

btnVolver.addEventListener("click", function() {
    const sobreMi = document.getElementById("sobreMi");
    const card = document.getElementById("card");
    const masSobreMi = document.getElementById("masSobreMi");

    // ocultamos
    masSobreMi.style.opacity = "0";

    setTimeout(() => {
        masSobreMi.style.visibility = "hidden";

        sobreMi.style.visibility = "visible";
        card.style.visibility = "visible";

        sobreMi.style.opacity = "1";
        card.style.opacity = "1";
    }, 500);
});


const btnHabilidades = document.querySelector(".btnLado");
let banderaCambio = 0;

btnHabilidades.addEventListener("click", function (){
    const divTecnico = document.querySelector(".habi");
    const divBlandas = document.querySelector(".habilidadesOcultas");

    if (banderaCambio == 0){
        divTecnico.style.opacity = 0;

        setTimeout(() => {
            divTecnico.style.visibility = "hidden";
    
            divBlandas.style.visibility = "visible";
            divBlandas.style.opacity = "1";
        }, 500);
        banderaCambio = 1;
    }else{
        divBlandas.style.opacity = 0;

        setTimeout(() => {
            divBlandas.style.visibility = "hidden";
    
            divTecnico.style.visibility = "visible";
            divTecnico.style.opacity = "1";
        }, 500);
        banderaCambio = 0;
    }
});


const btnHabilidad = document.querySelector("#btnhabilidad");

btnHabilidad.addEventListener("click", function (){
    const divTecnico = document.querySelector(".habi");
    const divBlandas = document.querySelector(".habilidadesOcultas");

    if (banderaCambio == 0){
        divTecnico.style.opacity = 0;

        setTimeout(() => {
            divTecnico.style.visibility = "hidden";
    
            divBlandas.style.visibility = "visible";
            divBlandas.style.opacity = "1";
        }, 500);
        banderaCambio = 1;
    }else{
        divBlandas.style.opacity = 0;

        setTimeout(() => {
            divBlandas.style.visibility = "hidden";
    
            divTecnico.style.visibility = "visible";
            divTecnico.style.opacity = "1";
        }, 500);
        banderaCambio = 0;
    }
});