import { getJobs } from "./src/scripts/jobs.js";
import { getProfile } from "./src/scripts/character.js";
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () =>  {
    const characterId = document.getElementById('search-input').value
    getProfile(characterId);
    getJobs(characterId);
})




