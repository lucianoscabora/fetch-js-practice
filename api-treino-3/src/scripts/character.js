import { Url } from "../variables.js";

async function getProfile(characterId) {
    const response = await fetch(`${Url}${characterId}`);
    const data = await response.json();
    console.log(data);
    const avatar = data.Character.Portrait;
    const fc = data.Character.FreeCompanyName;
    const name = data.Character.Name;
    const currentJob = [data.Character.ActiveClassJob.UnlockedState.Name]

    let userImage = 
    `
    <img src="${avatar}" class="image-info" alt="imagem x" /> 
    `
    document.querySelector('.character-container').innerHTML += userImage;
    
    let userInfo = `    
                        <h1>Character Name: ${name}</h1>
                        <h2>Active Job: ${currentJob}</h2>   
                        <h3>Free Company: ${fc}</h3>
                        
    `
    document.querySelector('.main-container').innerHTML += userInfo;
}

export {getProfile}