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

 const champForm = document.getElementById('champ-form');
 champForm.addEventListener('submit', submitChampion);

 function submitChampion(event) {
    event.preventDefault();

const champIdInput = document.getElementById('champ-id');
const champImgInput = document.getElementById('champ-img');
const champNameInput = document.getElementById('champ-name');
const champLoreInput = document.getElementById('champ-lore');
const champAttributeInput = document.getElementById('champ-attribute');
const champPassiveInput = document.getElementById('champ-passive');
const skillQNameInput = document.getElementById('skill-q-name');
const skillQDescriptionInput = document.getElementById('skill-q-description');
const skillQCooldownInput = document.getElementById('skill-q-cooldown');
const skillWNameInput = document.getElementById('skill-w-name');
const skillWDescriptionInput = document.getElementById('skill-w-description');
const skillWCooldownInput = document.getElementById('skill-w-cooldown');
const skillENameInput = document.getElementById('skill-e-name');
const skillEDescriptionInput = document.getElementById('skill-e-description');
const skillECooldownInput = document.getElementById('skill-e-cooldown');
const skillRNameInput = document.getElementById('skill-r-name');
const skillRDescriptionInput = document.getElementById('skill-r-description');
const skillRCooldownInput = document.getElementById('skill-r-cooldown');

const championData = {
    id: champIdInput.value,
    image: champImgInput.value,
    name: champNameInput.value,
    lore: champLoreInput.value,
    attribute: champAttributeInput.value,
    skills: {
        passive: champPassiveInput.value,
        q: {
            name: skillQNameInput.value,
            description: skillQDescriptionInput.value,
            cooldown: skillQCooldownInput.value
        },
        w: {
            name: skillWNameInput.value,
            description: skillWDescriptionInput.value,
            cooldown: skillWCooldownInput.value
        },
        e: {
            name: skillENameInput.value,
            description: skillEDescriptionInput.value,
            cooldown: skillECooldownInput.value
        },
        r: {
            name: skillRNameInput.value,
            description: skillRDescriptionInput.value,
            cooldown: skillRCooldownInput.value
        }
    }
}

console.log(championData);
champForm.reset();
}