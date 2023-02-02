const url = "https://kitsu.io/api/edge/anime/"

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

// get all animes



async function getAllAnimes() {

    const response = await fetch(url);
    console.log(response);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    /*
    
    for (let i = 0; i < data.data.length; i++) {
        const titles = document.createElement("h2");
        const status = document.createElement("p");
        const description = document.createElement("p");
        status.innerText = data.data[i].attributes.status;
        description.innerText = data.data[i].attributes.description;
        titles.innerText = data.data[i].attributes.titles?.en_jp;

        
        const div = document.createElement("div");
        

        div.appendChild(titles);
        div.appendChild(description);
        div.appendChild(status);
        postsContainer.appendChild(div);
    }
    */


    
    
        data.data.map((anime, idx, array) => {
        console.log(array[idx].attributes);
         
        const titles = document.createElement("h2");
        const div = document.createElement("div");
        const status = document.createElement("p");
        const description = document.createElement("p");
        const type = document.createElement("p");

        
        type.innerText = anime.type;
        titles.innerText = array[idx].attributes.titles?.en_jp;
        status.innerText = array[idx].attributes.status;
        description.innerText = array[idx].attributes.description;


        div.appendChild(status);
        div.appendChild(type);
        div.appendChild(description);

        postsContainer.appendChild(div); 

    })

    
}
    




getAllAnimes();