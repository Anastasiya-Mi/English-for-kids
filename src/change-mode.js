import { words } from "./variables.js";
import { createBtn } from "./create-elements.js";
import { state, btn_aside } from "./aside.js";
import { showSidebar } from "./aside.js";
import {
  CardsSoftCategories,
  createSoftCategoriesOnClick,
  playAudio,
} from "./class.js";
import { playQueue, random } from "./game-mode.js";
import { setNumberOfRepeats } from "./localstorage.js";

export function changeState(event) {
  const status = state.checked;  
  if (status) {
    const firstChild = document.querySelector(
      ".content > div:nth-child(1)"
    ).className;
    if (firstChild === "category_wrap") {
      addBtnStartGame();
      deleteEventListener();
      const btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", addPlayMode);
      btnStartsGame.addEventListener("click", playQueue);
    } else {
      addBtnStartGame();
      addPlayModeForCards();
      deleteEventListener();
      const category = document.querySelectorAll(".front");
      category.forEach((element) => {
        element.removeEventListener("click", playAudio);
        element.removeEventListener("click", setNumberOfRepeats);
      });
      const btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", playQueue);
    }
  } else {
    const answers = document.querySelector("#answers");
    if (answers.childNodes.length != 0) {
      answers.classList.remove("show");
    }
    const firstChild = document.querySelector(
      ".content > div:nth-child(1)"
    ).className;
    if (firstChild === "category_wrap") {
      returnEventListener();
    } else {
      returnEventListener();
      removePlayMode();
    }
  }
}

export function createNewCards(value){
  const content = document.querySelector(".content");
  content.innerHTML = "";
  const newCards = new CardsSoftCategories(cards);
  newCards.render();
}

export function addPlayMode(event) {
  const cards = random();
  createNewCards(cards);
  ////////////////////
  // let content = document.querySelector(".content");
  // content.innerHTML = "";
  // let newCards = new CardsSoftCategories(cards);
  // newCards.render();
  //////////////
  newCards.hideFragment();
}

export function addPlayModeForCards() {
  const value = document.querySelector(
    ".content > div:nth-child(1) > div:nth-child(1)"
  ).className;
  const cards = words[value];
  ///////////////
  createNewCards(cards);
  // let content = document.querySelector(".content");
  // content.innerHTML = "";
  // let newCards = new CardsSoftCategories(cards);
  // newCards.render();
  /////////////
  newCards.hideFragment();
}

export function removePlayMode() {
  
  const value = document.querySelector(
    ".content > div:nth-child(1)>div:nth-child(1)"
  ).className;
  const cards = words[value];  
  createNewCards(cards);
  //////////
  // let content = document.querySelector(".content");
  // content.innerHTML = "";
  // let newCards = new CardsSoftCategories(cards);
  // newCards.render();
  //////////////
  newCards.btnEvent();
  newCards.audioEvent();
  newCards.showFragment();
}

export function addBtnStartGame() {
  const content = document.querySelector(".content_wrap");
  const btnStart = document.querySelector(".start_game");
  if (!btnStart) {
    const btnStartGame = createBtn("button", "start_game");
    btnStartGame.innerText = "start game";
    content.append(btnStartGame);
  }
  // } else {
  //   const btnStartGame = createBtn("button", "start_game");
  //   btnStartGame.innerText = "start game";
  //   content.append(btnStartGame);
  // }
}

export function deleteEventListener() {
  btn_aside.removeEventListener("click", showSidebar);
  btn_aside.setAttribute("disabled", "disabled");
  const categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.removeEventListener("click", createSoftCategoriesOnClick);
  });
}

export function returnEventListener() {
  btn_aside.addEventListener("click", showSidebar);
  btn_aside.removeAttribute("disabled", "disabled");
  const categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.addEventListener("click", createSoftCategoriesOnClick);
  });
  const btnStartGame = document.querySelector(".start_game");
  if (btnStartGame != null) {
    btnStartGame.remove();
  }
  const btnRepeat = document.querySelector(".repeat");
  if (btnRepeat != null) {
    btnRepeat.remove();
  }
}
