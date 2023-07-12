import axios from 'axios';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const championId = parseInt(searchInput.value);
    if(isNaN(championId)) {
        console.error('Invalid champion ID');
        return;
    }
const apiUrl = `http://localhost:3000/users/${championId}`;

axios.get(apiUrl)
.then(response => {   
    const champion = response.data;
    renderChampionInfo(champion);
})
    .catch(error => {
        console.error('Error', error)
    });
});

function renderChampionInfo(champion) {
    const championContainer = document.getElementById('championContainer');
    championContainer.innerHTML = '';

    if (champion) {
        const championDiv = document.createElement('div');
        const nameElement = document.createElement('h2');
        const imageElement = document.createElement('img');
        const loreElement = document.createElement('p');
        const attributeElement = document.createElement('p');

        nameElement.textContent = champion.name;
        imageElement.src = champion.image;
        loreElement.textContent = champion.lore;
        attributeElement.textContent = champion.attributes;

        championDiv.appendChild(imageElement);
        championDiv.appendChild(nameElement);
        championDiv.appendChild(loreElement);
        championDiv.appendChild(attributeElement);

        const skillsContainer = document.createElement('div');
        skillsContainer.classList.add('skills-container');

        champion.skills.forEach(skill => {
            const skillPassive = document.createElement('p');
            skillPassive.textContent = skill.skills_passive;
            const skillQ = document.createElement('p');
            skillQ.textContent = skill.skills_q;
            const skillW = document.createElement('p');
            skillW.textContent = skill.skills_w;
            const skillE = document.createElement('p');
            skillE.textContent = skill.skills_e;
            const skillR = document.createElement('p');
            skillR.textContent = skill.skills_r;

            skillsContainer.appendChild(skillPassive);
            skillsContainer.appendChild(skillQ);
            skillsContainer.appendChild(skillW);
            skillsContainer.appendChild(skillE);
            skillsContainer.appendChild(skillR);
        })

        championDiv.appendChild(skillsContainer);
        championContainer.appendChild(championDiv);
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Champion not found';
        championContainer.appendChild(errorMessage)
    }
}


