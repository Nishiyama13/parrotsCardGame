//Declaração das variáveis globais
const imagesFront = [
  "./assets/image/araras.png",
  "./assets/image/araras_2.png",
  "./assets/image/araras_3.png",
  "./assets/image/araras_4.png",
  "./assets/image/araras_5.png",
  "./assets/image/araras_6.png",
  "./assets/image/araras_7.png",
];
let moves = 0;
const list = [];
let openCards = 0;
let firstCard, secondCard;
let numberCards = "";
//Iníco do programa
imputNumber();
//Conferir numero de cartas
function imputNumber() {
  numberCards = Number(
    prompt(
      `Insira um número par entre 4 e 14 para escolher a quantidade de cartas:`
    )
  );

  do {
    if (numberCards % 2 !== 0 || numberCards < 4 || numberCards > 14) {
      numberCards = alert(
        `ATENÇÃO! Informe um valor válido como 4, 6, 8, 10, 12 ou 14`
      );
      imputNumber();
    } else {
      addCards();
    }
  } while (numberCards % 2 !== 0 || numberCards < 4 || numberCards > 14);
}
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

//virar cartas
function turnCard(cardSelect) {
  cardSelect.classList.toggle("turn");
  list.push(cardSelect);
  moves++;

  if (list.length === 2) {
    setTimeout(comparator, 1000);
  }
}

//Comparador
function comparator() {
  const firstCard = list[0].innerHTML;
  const secondCard = list[1].innerHTML;

  if (firstCard !== secondCard) {
    while (list.length !== 0) {
      list[0].classList.remove("turn");
      list.shift();
    }
  }
  if (firstCard === secondCard) {
    openCards += 2;
    console.log(openCards);
    console.log(numberCards);
    console.log(moves);
    while (list.length !== 0) {
      list.shift();
    }

    checkEndGame();
  }
}

//Teste de fim de jogo
function checkEndGame() {
  if (openCards === numberCards) {
    alert(`Você ganhou em ${moves} jogadas.`);
  }
}
