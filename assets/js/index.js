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
let player = document.getElementById("player");

//Array de objetos vacio para guardar la lista de animales a mostrar

let animalitos = [];

//Evento change para cambia la imagen de animal para mostrarlo

animal.addEventListener("change", async () => {
    let animalSeleccionado = animal.value;
    let animales = await getAnimales;

    //Validación de la imagen del animal cuando se seleccione el animal
    let animalResult = animales.find(
        (animal) => animal.name == animalSeleccionado
    );

    preview.style.backgroundImage = `url(./assets/imgs/${animalResult.imagen})`;

//Evento de click para agregar la imagen y sonido
    btnRegistrar.addEventListener("click", async () => {
        let nombre = animal.value;
        let edad = edadSelect.value;
        let animalSeleccionado = animal.value;
        let animales = await getAnimales;

//Validación de la imagen seleccionada por el usuario
        let imagenResult = animales.find(
            (animal) => animal.name == animalSeleccionado
        );
        let comentarios = comentariosSelect.value;
        //Datos que va a mostrar en la card
        let imagen = `${imagenResult.imagen}`;
        let sonido = `${imagenResult.sonido}`;
        

        if (animal && edad && comentarios) {
            let selectedAnimal; 
            
            if (nombre == "Leon") {
                selectedAnimal = new Leon(nombre, edad, imagen, comentarios, sonido);
            } else if (nombre == "Lobo") {
                selectedAnimal = new Lobo(nombre, edad, imagen, comentarios, sonido);
            } else if (nombre == "Oso") {
                selectedAnimal = new Oso(nombre, edad, imagen, comentarios, sonido);
            } else if (nombre == "Serpiente") {
                selectedAnimal = new Serpiente(nombre, edad, imagen, comentarios, sonido);
            } else {
                selectedAnimal = new Aguila(nombre, edad, imagen, comentarios, sonido);
            };
            console.log(selectedAnimal)
            animalitos.push(selectedAnimal)
            mostrarCard()

            //Para limpiar los inputs
        let selector = document.getElementById("animal");
        let selectorEdad = document.getElementById("edad");
        let comentariosSelect = document.getElementById("comentarios");
        selector.selectedIndex = 0;
        selectorEdad.selectedIndex = 0;
        comentariosSelect.value = '';
        preview.style.backgroundImage = '';
            
        } else {
            alert("Por favor, ingresar los datos solicitados");
        };

    })
    
});
    
 // Recorre la lista de animales y crea una tarjeta para cada uno
function mostrarCard() {
    
    let animalesContainer = document.getElementById('Animales');
    animalesContainer.innerHTML = "";
    console.log(animalitos)
    animalitos.forEach((a, i) => {
        console.log(a.nombre)
        animalesContainer.innerHTML += `
            <div class="px-3 pb-2">
                <div class="bg-dark text-white">
                    <img
                        height="200"
                        width="200"
                        src="./assets/imgs/${a.img}"
                        data-toggle="modal" data-target="#exampleModal"
                        onclick="modalDetails('${i}')"
                    />
                <div>
                    <button
                        onclick="playSound('${a.nombre}')"
                        class="btn btn-secondary w-100"> 
                        <img height="30" src="assets/imgs/audio.svg" /> 
                    </button>
            </div>
                    `;
            });
};

//Validación de animales para emitir sonido
window.playSound = (name) => {
    let animal = animalitos.find((a) => a.nombre === name)
    if (animal.nombre == 'Leon') {
        console.log(name)
        animal.rugir()
    } else if (animal.nombre == 'Lobo') {
        console.log(name)
        animal.aullar()
    } else if (animal.nombre == 'Oso') {
        console.log(name)
        animal.grunir()
    } else if (animal.nombre == 'Serpiente') {
        console.log(name)
        animal.sisear()
    } else {
        animal.chillar()
    }
};

//Diseño de modal
window.modalDetails = (i) => {
    const modalBody = document.getElementsByClassName("modal-body")[0];
    const animal = animalitos[i];
    comentarios.innerHTML = "";
    console.log(animalitos)
    modalBody.innerHTML = `
    <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0">
            <img
            src="./assets/imgs/${animal._img}"
            class="d-block m-auto w-100"
            />
        <div class="card-body text-center">
            <h6 class="card-text ">${animal._edad}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal._comentarios}</p>
        </div>
    </div>
    </div>
    `;

};