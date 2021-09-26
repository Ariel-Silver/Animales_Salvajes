// Clase Animal con sus herencias
export class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;
  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }
  get img() {
    return this.#img;
  }
  get comentarios() {
    return this.#comentarios;
  }
  set comentarios(nuevoComentario) {
    this.#comentarios = nuevoComentario;
  }
  get sonido() {
    return this.#sonido;
  }

  //Con este metodo podemos obtener los sonidos
  soundEffect() {
    const player = document.getElementById("player");
    player.setAttribute("src", `/assets/sounds/${this.sonido}`);
    player.load();
    player.play();
  }
}
