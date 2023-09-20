let btn = document.getElementById("btnMostrarPersonajes");
btn.addEventListener("click", MostrarPersonajes)

function MostrarPersonajes() {
  /* URL del API */
  const API_URL = "https://rickandmortyapi.com/api/character";

  /* Ocultar botón */
  btn.classList.add("ocultar");

  /* Petición al API */
  fetch(API_URL, { method: "GET" })
    .then((response) => response.json())
    .then((jsonResponse) => {
      const template = jsonResponse.results.map((character) => {
        return `
        <div class="card card-element">
          <img src=${character.image} class="card-img-top" alt=${character.name}>
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${character.species}</li>
            <li class="list-group-item">Género: ${character.gender}</li>
            <li class="list-group-item">Status: ${character.status}</li>
          </ul>
          <div class="card-body">
            <a href="${character.url}" class="card-link">Ver información del personaje</a>
          </div>
       </div>
      `;
      });

      let container = document.getElementById("container");

      for (let index = 0; index < template.length; index++) {
        container.innerHTML += template[index];
      }
    }
  );
}
