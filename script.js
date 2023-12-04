function harryPotterCharacters() {
    fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
            let charactersContainer = document.getElementById("container");
            charactersContainer.innerHTML = ""; // Clear existing data

            data.forEach(element => {
                let eachCharacter = document.createElement("div");
                eachCharacter.innerHTML = `<h3>Name: ${element.name}</h3>
                <img src="${element.image}" alt="Character Image">
                <p>House: ${element.house}</p>
                <p>Birth date: ${element.dateOfBirth}</p>`;
                
                charactersContainer.appendChild(eachCharacter); // Append each character to the container
            });
        })
        .catch((error) => console.log(error));
}
harryPotterCharacters();