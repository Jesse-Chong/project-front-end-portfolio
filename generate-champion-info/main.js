import axios from 'axios';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const championContainer = document.getElementById('championContainer');

searchButton.addEventListener('click', () => {
  const championId = parseInt(searchInput.value);
  if (isNaN(championId)) {
    console.error('Invalid champion ID');
    return;
  }

  const apiUrl = `http://localhost:3000/users/${championId}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const champion = response.data;
      renderChampionInfo(champion);
      searchInput.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function renderChampionInfo(champion) {
  championContainer.innerHTML = '';

  if (champion) {
    const championDiv = document.createElement('div');
    championDiv.classList.add('champion-info');

    const nameElement = document.createElement('h2');
    nameElement.textContent = champion.name;
    championDiv.appendChild(nameElement);
    const imageElement = document.createElement('img');
    imageElement.src = champion.image;
    championDiv.appendChild(imageElement);

    const loreElement = document.createElement('p');
    loreElement.textContent = champion.lore;
    championDiv.appendChild(loreElement);

    const attributeElement = document.createElement('p');
    attributeElement.textContent = champion.attributes;
    championDiv.appendChild(attributeElement);

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('skills-container');

    if (champion.skills && Array.isArray(champion.skills) && champion.skills.length > 0) {
      champion.skills.forEach((skill) => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');

        const skillNameElement = document.createElement('h3');
        skillNameElement.textContent = skill.name;
        skillElement.appendChild(skillNameElement);

        const skillDescriptionElement = document.createElement('p');
        skillDescriptionElement.textContent = skill.skillDescription;
        skillElement.appendChild(skillDescriptionElement);

        skillsContainer.appendChild(skillElement);
      });
    }

    championDiv.appendChild(skillsContainer);
    championContainer.appendChild(championDiv);
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Champion not found';
    championContainer.appendChild(errorMessage);
  }
}