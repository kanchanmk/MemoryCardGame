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
	{
		name: "card5",
		shape: "circle",
	},
	{
		name: "card6",
		shape: "circle",
	},
	{
		name: "card7",
		shape: "rhombus",
	},
	{
		name: "card8",
		shape: "rhombus",
	},
	{
		name: "card9",
		shape: "rectangle",
	},
	{
		name: "card10",
		shape: "rectangle",
	},
	{
		name: "card11",
		shape: "hexagon",
	},
	{
		name: "card12",
		shape: "hexagon",
	},
];

const shuffle = (array) => {
	//
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
		// console.log("i " + i + " j " + j);
		// swap elements array[i] and array[j]
		// we use "destructuring assignment" syntax to achieve that

		let t = array[i];
		array[i] = array[j];
		array[j] = t;
	}
};

shuffle(cardList);

// function to layout the cards. Reused in on reset
const layoutTheCards = () => {
	cardList.forEach((card) => {
		makeCard(card.name, card.shape);
	});
};
layoutTheCards();

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
		let shape2 = cardClicked.getAttribute("data-shape");
		let name2 = cardClicked.getAttribute("name");
		if (clickCount === 1) {
			firstClick = cardClicked;
		} else if (clickCount === 2) {
			let shape1 = firstClick.getAttribute("data-shape");
			let name1 = firstClick.getAttribute("name");
			clickCount = 0;
			if (shape1 === shape2 && name1 != name2) {
				cardClicked.classList.add("hidden");
				firstClick.classList.add("hidden");
			} else {
				console.log("try again");
			}
		}
	}
});

const startBtn = document.querySelector(".start");
// start button handler
startBtn.addEventListener("click", () => {
	// start the timer
});

const resetBtn = document.querySelector(".reset");

// reset button handler
resetBtn.addEventListener("click", () => {
	shuffle(cardList);
	// cardContainer.innerHTML = "";
	// layoutTheCards();
	location.reload(); // reload the page
});
