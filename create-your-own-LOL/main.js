import { getCharacter } from "rickmortyapi";

getCharacter()
    .then(response => {
        const characters = response.data.results
        renderCharacters(characters);
    })
    .catch(error => {
        console.error('Error:', error)
    });

    function renderCharacters(characters) {
        const characterContainer = document.getElementById('characterContainer');
        characterContainer.innerHTML = '';
      
        characters.forEach(character => {
          const characterDiv = document.createElement('div');
          characterDiv.classList.add('character');
      
          const nameElement = document.createElement('h2');
          nameElement.textContent = character.name;
          characterDiv.appendChild(nameElement);
      
          const imageElement = document.createElement('img');
          imageElement.src = character.image;
          characterDiv.appendChild(imageElement);

      
          characterContainer.appendChild(characterDiv);
        });
      }