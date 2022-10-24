let count = 0;
function turnCard(cardSelect) {
  cardSelect.classList.toggle("turn");
  count++;

  if (count == 2) {
    count = 0;
    // se as cartas forem diferentes
    setTimeout(untapCard, 2000);
  }
}

function untapCard() {
  const cards = document.querySelectorAll(".turn");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("turn");
  }
}
