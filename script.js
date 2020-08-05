"use strict";

let gameBoard = document.querySelector(".gameboard");

let cardContainer = document.querySelector(".cardcontainer");

const makeCard = (name, shape) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("name", name);
  card.setAttribute("data-shape", shape);
  console.log(card);
  cardContainer.append(card);
  return card;
};

let cardList = [
  {
    name: "card1",
    shape: "triangle",
  },
  {
    name: "card2",
    shape: "triangle",
  },
  {
    name: "card3",
    shape: "square",
  },
  {
    name: "card4",
    shape: "square",
  },
];

cardList.forEach((card) => {
  makeCard(card.name, card.shape);
});

let firstClick = null;
let clickCount = 0;
cardContainer.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  let cardClicked = e.target;
  if (cardClicked.classList.contains("card")) {
    cardClicked.classList.add("flipped");
    cardClicked.innerText = cardClicked.getAttribute("data-shape");
    clickCount++;
    let shape1 = cardClicked.getAttribute("data-shape");
    if (clickCount === 1) {
      firstClick = cardClicked;
    } else if (clickCount === 2) {
      let shape2 = firstClick.getAttribute("data-shape");
      if (shape1 === shape2) {
        console.log("found match");
      } else {
        console.log("try again");
      }
    }
  }
});
