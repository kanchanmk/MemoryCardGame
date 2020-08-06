"use strict";

let gameBoard = document.querySelector(".gameboard");

let cardContainer = document.querySelector(".cardcontainer");

let startDiv = document.querySelector(".start-function");

const makeCard = (name, shape, image) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("name", name);
  card.setAttribute("data-shape", shape);
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", image);
  card.append(imgTag);
  console.log(card);
  cardContainer.append(card);
  return card;
};

let cardList = [
  {
    name: "card1",
    shape: "triangle",
    image: "/images/yoda.png",
  },
  {
    name: "card2",
    shape: "triangle",
    image: "yoda.png",
  },
  {
    name: "card3",
    shape: "square",
    // image:
  },
  {
    name: "card4",
    shape: "square",
    // image:
  },
  {
    name: "card5",
    shape: "circle",
    // image:
  },
  {
    name: "card6",
    shape: "circle",
    // image:
  },
  {
    name: "card7",
    shape: "rhombus",
    // image:
  },
  {
    name: "card8",
    shape: "rhombus",
    // image:
  },
  {
    name: "card9",
    shape: "rectangle",
    // image:
  },
  {
    name: "card10",
    shape: "rectangle",
    // image:
  },
  {
    name: "card11",
    shape: "hexagon",
    // image:
  },
  {
    name: "card12",
    shape: "hexagon",
    // image:
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
    makeCard(card.name, card.shape, card.image);
  });
};
layoutTheCards();
// const log = () => {
//   console.log("trying");
// };
let firstClick = null;
let clickCount = 0;
let pairs = 6;

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
        pairs--;
        if (pairs === 0) {
          // console.log("you win!!");
          // let youWin = document.querySelector(".youwin");
          let youwin = document.createElement("div");
          youwin.classList.add("youwin");
          youwin.innerText = "YOU WIN!!!";
          startDiv.append(youwin);
          gameBoard.append(startDiv);
        }
      } else {
        setTimeout(function () {
          firstClick.classList.remove("flipped");
          cardClicked.classList.remove("flipped");
          firstClick.innerText = "";
          cardClicked.innerText = "";
        }, 1000);
      }
    }
  }
});

const startBtn = document.querySelector(".start");
// start button handler
startBtn.addEventListener("click", () => {
  startDiv.remove();
  // start the timer
  let timeleft = 60;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.querySelector(".timer").innerText = "Game Over";
    } else {
      document.querySelector(".timer").innerText = timeleft;
    }
    timeleft -= 1;
  }, 1000);
});

const resetBtn = document.querySelector(".reset");

// reset button handler
resetBtn.addEventListener("click", () => {
  shuffle(cardList);
  // cardContainer.innerHTML = "";
  // layoutTheCards();
  location.reload(); // reload the page
});
