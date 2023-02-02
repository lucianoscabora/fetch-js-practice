import { Url } from "../variables.js";

async function getJobs(characterId) {
    const response = await fetch(`${Url}${characterId}`);
    const data = await response.json();

    const allJobs = [data.Character.ClassJobs]

     allJobs[0].forEach(jobs => {
        let jobsInfo = 
        `
        <li>Job: ${jobs.UnlockedState.Name} <br/> Level: ${jobs.Level}</li>
        `
        document.querySelector('.jobs-list').innerHTML += jobsInfo;
    }); 
}

export {getJobs}