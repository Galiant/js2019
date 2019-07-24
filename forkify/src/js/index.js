import axios from 'axios';

async function getResults(query) {
  const key = 'f08150c5e65790c8b43918c25f0b32b8';
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults('pizza');
