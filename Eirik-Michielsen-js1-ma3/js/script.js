const getRemainder = (a, b) => a % b;

const result = getRemainder(5, 2);
console.log(result);

//Question 2

const apiKey = "8383790591e3479bb1b8f74c859efc34";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

let gameContainer = document.querySelector(".gameList-container");

async function getData() {
  try {
    const response = await fetch(url);
    const fetchResults = await response.json();
    const gameList = fetchResults.results;

    gameContainer.innerHTML = "";

    for (let i = 0; i < gameList.length; i++) {
      /*console.log(gameList[i].name);
      console.log(gameList[i].rating);
      console.log(gameList[i].tags);*/

      gameContainer.innerHTML += `<div class="gameList-container">
                                        <h2>${gameList[i].name}</h2>
                                        <p>${gameList[i].rating}</p>
                                        <p>Tags:${gameList[i].tags.length}</p>
                                      </div>`;
      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    console.log("An error occurred when trying to get the API");
    gameContainer.innerHTML = "An error occurred when trying to get the API";
  }
}

getData();
