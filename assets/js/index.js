import { Leon, Lobo, Oso, Serpiente, Aguila } from "../modulo/hijas.js";
import Animal from "../modulo/animal.js";
//Consultar la lista de animales

const getAnimales = (async () => {
    let respuesta = await fetch("/animales.json");
    let { animales } = await respuesta.json();
    return animales;
})();

let animal = document.getElementById("animal");
let edadSelect = document.getElementById("edad");
let comentariosSelect = document.getElementById("comentarios");
let btnRegistrar = document.getElementById("btnRegistrar");
let preview = document.getElementById("preview");

 //Para limpiar los inputs
        // document.getElementById("animal") = '';
        // document.getElementById("edad") = '';
        // document.getElementById("comentarios") = '';
animal.addEventListener("change", async () => {
    let animalSeleccionado = animal.value;
    let animales = await getAnimales;

    let animalResult = animales.find(
        (animal) => animal.name == animalSeleccionado
    );

    preview.style.backgroundImage = `url(./assets/imgs/${animalResult.imagen})`;


    btnRegistrar.addEventListener("click", async () => {
        let nombre = animal.value;
        let edad = edadSelect.value;
        let animalSeleccionado = animal.value;
        let animales = await getAnimales;
        let Animales = document.getElementById('Animales')
        let imagenResult = animales.find(
            (animal) => animal.name == animalSeleccionado
        );
        console.log(imagenResult.imagen);
        let comentarios = comentariosSelect.value;
        let img = `.assets/imgs/${imagenResult.imagen}`;
        let sonido = `.assets/sounds/${imagenResult.sonido}`;
        
        if (animal && edad && comentarios) {
            if (animal.value == "Leon") {
                let LeonObjeto = new Leon(nombre, edad, img, comentarios, sonido);
            } else if (animal.value == "Lobo") {
                let LoboObjeto = new Lobo(nombre, edad, img, comentarios, sonido);
            } else if (animal.value == "Oso") {
                let OsoObjeto = new Oso(nombre, edad, img, comentarios, sonido);
            } else if (animal.value == "Serpiente") {
                let SerpienteObjeto = new Serpiente(nombre, edad, img, comentarios, sonido);
            } else if (animal.value == "Aguila") {
                let AguilaObjeto = new Aguila(nombre, edad, img, comentarios, sonido);
            };
    
            
            // Recorre la lista de animales y crea una tarjeta para cada uno
animales.forEach(animal => {
    const card = `
        <div class="card px-3 pb-3" style="width: 22rem;">
        <img src="./assets/imgs/${animal.imagen}" alt="${animal.nombre}" class="card-img-top">
        <div class="card-body">
            <audio class="card-text" src="./assets/sounds/${animal.sonido}" controls></audio>
        </div>
        </div>
    `;
  // Agrega la tarjeta al contenedor
    Animales.innerHTML += card;
});

            
        } else {
            alert("Por favor, ingresar los datos solicitados");
        };

    })
    
});
    

