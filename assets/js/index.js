//Se importan las sub clases
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./Animals.js";

//Función asíncrona con async y await
(async () => {
  const animalData = await fetch("/animales.json");
  const { animales: Animales } = await animalData.json();

  //Usamos DOM para llevar los datos obtenidos
  const nombreAnimal = document.getElementById("animal");
  const edadAnimal = document.getElementById("edad");
  const comentariosAnimal = document.getElementById("comentarios");
  const imgAnimal = document.getElementById("preview");
  const btnRegistrar = document.getElementById("btnRegistrar");
  const tablaAnimales = document.getElementById("Animales");

  const animalCards = [];

  //Usamos change para llamar la imagen necesaria
  nombreAnimal.addEventListener("change", () => {
    const animalSelect = nombreAnimal.value;
    //metodo .find para buscar elementos en el array
    const animalSelected = Animales.find(
      (animal) => animal.name === animalSelect
    );
    imgAnimal.setAttribute("src", `/assets/imgs/${animalSelected.imagen}`);
  });

  //Se obtienen valores al hacer click
  btnRegistrar.addEventListener("click", () => {
    const animalName = nombreAnimal.value;
    const animalAge = edadAnimal.value;
    const animalComment = comentariosAnimal.value;
    const animalFound = Animales.find(
      (animal) => animal.name === animalName
    );

    switch (animalName) {
      case "Leon":
        {
          //Usando metodo .push se deja la tarjeta antigua al final
          animalCards.push(
            new Leon(
              animalName,
              animalAge,
              animalFound.imagen,
              animalComment,
              animalFound.sonido
            )
          );
        }
        break;
      case "Lobo":
        {
          animalCards.push(
            new Lobo(
              animalName,
              animalAge,
              animalFound.imagen,
              animalComment,
              animalFound.sonido
            )
          );
        }
        break;
      case "Oso":
        {
          animalCards.push(
            new Oso(
              animalName,
              animalAge,
              animalFound.imagen,
              animalComment,
              animalFound.sonido
            )
          );
        }
        break;
      case "Serpiente":
        {
          animalCards.push(
            new Serpiente(
              animalName,
              animalAge,
              animalFound.imagen,
              animalComment,
              animalFound.sonido
            )
          );
        }
        break;
      case "Aguila":
        {
          animalCards.push(
            new Aguila(
              animalName,
              animalAge,
              animalFound.imagen,
              animalComment,
              animalFound.sonido
            )
          );
        }
        break;
    }
    mostrarAnimal();
  });
  //Función para usar DOM con la tarjeta de cada animal
  function mostrarAnimal() {
    tablaAnimales.innerHTML = "";

    animalCards.forEach((animal) => {
      const newDiv = document.createElement("div");
      const newImg = document.createElement("img");
      const newButton = document.createElement("div");

      newDiv.appendChild(newImg);
      newDiv.appendChild(newButton);
      tablaAnimales.appendChild(newDiv);

      newDiv.classList.add("card");

      newImg.setAttribute("src", `/assets/imgs/${animal.img}`);
      newImg.classList.add("img-display");
       //Boton con sonidos
       newButton.classList.add("card-footer", "p-0");
       newButton.innerHTML = `<button class="btn btn-secondary btn-block">
     <img src="/assets/imgs/audio.svg" style="width: 10px">
     </button>`;

      //Modal para ampliar tarjeta
      newImg.addEventListener("click", () => {
        $("#Modal").modal("show");

        //Tarjeta ampliada
        const showModal = document.querySelector("#Modal .modal-body");
        showModal.innerHTML = `
          <img src="/assets/imgs/${animal.img}"class="mx-auto d-block card-display"/>
          <ul class="text-white list-unstyled">
            <li>Nombre: ${animal.nombre}</li>
            <li>Edad: ${animal.edad}</li>
            <li>Comentarios: ${animal.comentarios}</li>
          </ul>`;
      });

      //Se llama los metodos para los sonidos
      newButton.addEventListener("click", () => {
        switch (animal.nombre) {
          case "Leon":
            animal.Rugir();
            break;
          case "Lobo":
            animal.Aullar();
            break;
          case "Oso":
            animal.Gruñir();
            break;
          case "Serpiente":
            animal.Sisear();
            break;
          case "Aguila":
            animal.Chillar();
            break;
        }
      });
    });
  }
})();
