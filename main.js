import './style.css'

document.getElementById('app').innerHTML = `
  <h1 class="title"> Rick and Morty App </h1>
  <section id="character-container" class="container"></section>

`
// Rick and Morty API
const endpoint = 'https://rickandmortyapi.com/api/character'

// ASYNC - AWAIT

const getCharacter = async() => {
  try{
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data.results)
    const characters = data.results
    const container = document.getElementById('character-container')

    characters.map(character => {
      container.innerHTML += `
        <div class="card">
          <img src="${character.image}" alt="${character.name}" class="card-image">
          <h2 class="card-title">${character.name}</h2>
          <p class="card-species">${character.species}</p>
          <p class="card-status">${character.status}</p>
        </div>
      `
    })
  }catch(error){
    console.log(error)
  }
}

getCharacter()