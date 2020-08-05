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
