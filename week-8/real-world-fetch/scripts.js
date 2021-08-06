const form = document.querySelector("form");
const output = document.querySelector("output");
const mimeCheck = (pokemon) => pokemon.split("-").join(" ");
const unMime = (pokemon) => pokemon.split(" ").join("-");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataLookup = new FormData(form);
  const name = unMime(dataLookup.get("name"));

  fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    .then((response) => {
      output.innerHTML = "";
      if (!response.ok) {
        const error = new Error(response.status);
        throw error;
      } else {
        return response.json();
      }
    })

    .then((pokemon) => {
      console.log(pokemon);
      const pokeName = document.createElement("h2");

      const checkName = mimeCheck(pokemon.name);
      pokeName.innerText =
        checkName.charAt(0).toUpperCase() + checkName.slice(1) + "!";

      output.append(pokeName);
      const pokeImage = document.createElement("img");
      pokeImage.src = Object.values(
        pokemon.sprites.other["official-artwork"]
      )[0];
      output.append(pokeImage);
      form.reset();
    })
    .catch((error) => {
      if (error.message === "404") {
        output.textContent = "That's not a pokemon! Try the number?";
      } else output.textContent = "something else went wrong idk";
    });
});
