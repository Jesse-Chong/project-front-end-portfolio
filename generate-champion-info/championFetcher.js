import axios from 'axios';
const championId = 1;
const apiUrl = `http://localhost:3000/users/${championId}`;

axios.get(apiUrl)
  .then(response => {
    const champion = response.data;
    console.log(response.data)
    console.log(champion);
  })
  .catch(error => {
    console.error('Error:', error);
  });
