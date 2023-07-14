fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    console.log(data.results);
})
.catch(error => {
    console.log('Error', errors)
})

 const characterContainer = document.getElementById('characterContainer')

 function renderCharacterInfo(character) {
    const card = document.createElement('div');
    card.classList.add('character-card');

 const name = document.createElement('h2');
 name.textContent = character.name;
 card.appendChild(name);

 const status = document.createElement('p')
 status.textContent = `Status: ${character.status}`;
 card.appendChild(status)

 const species = document.createElement('p');
 species.textContent = `Species: ${character.species}`;
 card.appendChild(species);

 const type = document.createElement('p');
 type.textContent = `Type: ${character.type}`;
 card.appendChild(type);

 const gender = document.createElement('p');
 gender.textContent = `Gender: ${character.gender}`;
 card.appendChild(gender);

const origin = document.createElement('p');
origin.textContent = `Origin: ${character.origin.name}`
card.appendChild(origin)

const location = document.createElement('p');
location.textContent = `Location: ${character.location.name}`;
card.appendChild(location);

const image = document.createElement('img');
image.src = character.image;
card.appendChild(image)

 console.log(characterContainer)
 characterContainer.appendChild(card);
}

fetch('https://rickandmortyapi.com/api/character/2')
.then(response => response.json())
.then(character => {
    renderCharacterInfo(character)
    console.log(character);
})
.catch(error => {
    console.log('Error:', error);
 })