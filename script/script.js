//Global
const imagesFront = [
  "./assets/image/araras.png",
  "./assets/image/araras_2.png",
  "./assets/image/araras_3.png",
  "./assets/image/araras_4.png",
  "./assets/image/araras_5.png",
  "./assets/image/araras_6.png",
  "./assets/image/araras_7.png",
];
let count = 0;

//Conferir numero de cartas
let numberCards = Number(
  prompt(
    `Insira um número par entre 4 e 14 para escolher a quantidade de cartas:`
  )
);

do {
  if (numberCards % 2 !== 0 || numberCards < 4 || numberCards > 14) {
    numberCards = prompt(
      `ATENÇÃO! Informe um valor válido como 4, 6, 8, 10, 12 ou 14`
    );
  } else {
    addCards();
  }
} while (numberCards % 2 !== 0 || numberCards < 4 || numberCards > 14);

//functions

function addCards() {
  const boardGame = document.querySelector(".containerGame");
  const numberImages = numberCards / 2;

  const newImages = imagesFront
    .slice(0, numberImages)
    .concat(imagesFront.slice(0, numberImages));
  const randomImages = newImages.sort(() => shuffleCards());

  for (let i = 0; i < numberCards; i++) {
    boardGame.innerHTML += `
    <div class="card" onclick="turnCard(this)">
      <div class="card-back face">
        <img src="./assets/image/back.png" alt="desenho de um papagaio">
      </div>
      <div class="card-front face">
      <img src="${randomImages[i]}" alt="duas araras">
      </div>
    </div>
  `;
  }
}

//Embaralhar cartas
function shuffleCards() {
  return Math.random() - 0.5;
}

//virar carta
function turnCard(cardSelect) {
  cardSelect.classList.toggle("turn");
  count++;

  if (count == 2) {
    count = 0;
    // se as cartas forem diferentes
    setTimeout(untapCard, 2000);
  }
}

//desvirar carta automaticamente
function untapCard() {
  const cards = document.querySelectorAll(".turn");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("turn");
  }
}
