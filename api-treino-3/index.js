import { Url } from "./src/variables.js";
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

async function getProfile(characterId) {
    const response = await fetch(`${Url}${characterId}`);
    const data = await response.json();
    console.log(data);
    const avatar = data.Character.Portrait;
    const fc = data.Character.FreeCompanyName;
    const name = data.Character.Name;
    const classes = [data.Character.ActiveClassJob.UnlockedState.Name]

    let userInfo = `    <img src="${avatar}" class="image-info" alt="imagem x" /> 
                        <h1>Nome do personagem: ${name}</h1>
                        <h2>Classe ativa: ${classes}</h2>  
                        <div class="fc-information"> 
                        <h3>Free Company: ${fc}</h3>
                        </div>
    `
    console.log(userInfo)
    document.querySelector('.main-container').innerHTML += userInfo;
}

searchBtn.addEventListener('click', () =>  {
    const characterId = document.getElementById('search-input').value
    getProfile(characterId); 
})


/* function buildProfile(characterId) {
    getProfile(characterId).then(userData => {
        let userInfo = 
        
        `
        <img src="${userData.Character.Avatar}" alt="imagem x">
        `
        console.log(userInfo)
        document.querySelector('.image-info').innerHTML = userInfo;
    })
}

buildProfile(); */


