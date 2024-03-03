import Animal from "./animal.js";
let audioPlayer = document.getElementById('player')

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    rugir() {
        audioPlayer.src = `./assets/sounds/${this._sonido}`;
        audioPlayer.play();
    }
};
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    aullar() {
        audioPlayer.src = `./assets/sounds/${this._sonido}`;
        audioPlayer.play();
    }
};
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    grunir() {
        audioPlayer.src = `./assets/sounds/${this._sonido}`;
        audioPlayer.play();
    }
};
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    sisear() {
        audioPlayer.src = `./assets/sounds/${this._sonido}`;
        audioPlayer.play();
    }
};
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    chillar() {
        audioPlayer.src = `./assets/sounds/${this._sonido}`;
        audioPlayer.play();
    }
};

export { Leon, Lobo, Oso, Serpiente, Aguila}
