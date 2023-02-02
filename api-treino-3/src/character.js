 import { Url } from "./variables";

async function getCharacter() {
    const response = await fetch(`${Url}${characterId}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
}

export { getCharacter } 