import {
  words,
  content,
  link,
  category,
  FRAGMENT,
  btnRepeatImg,
} from "./variables.js";
import {
  createFrontCard,
  createCard,
  createBtn,
  createTitle,
  createImg,
  createDiv,
  createStartPage,
  createBackCard,
} from "./create-elements.js";
import {
  state,
  shadow,
  footer,
  header,
  headerWrap,
  aside,
  btn_aside,
  contentWrap,
  menu,
} from "./aside.js";
import {
  changeMode,
  closeSidebar,
  showSidebar,
  removeChecked,
} from "./aside.js";
import {
  createCardOnLink,
  CardsSoftCategories,
  createSoftCategoriesOnClick,
  Cards,
} from "./class.js";
import {
  playQueue,
//   chooseCard,
  createRepeatBtn,
  random,
  repeat,
  shake,
  createRandomQueue,
} from "./game-mode.js";

export function changeState(event) {
  let status = state.checked;
  console.log(status);
  if (status) {
    let firstChild = document.querySelector(
      ".content > div:nth-child(1)"
    ).className;
    if (firstChild === "category_wrap") {
      addBtnStartGame();
      removeEventListener();
      let btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", addPlayMode);
      btnStartsGame.addEventListener("click", playQueue);
    } else {
      addBtnStartGame();
      addPlayModeForCards();
      removeEventListener();
      let btnStartsGame = document.querySelector(".start_game");
      btnStartsGame.addEventListener("click", playQueue);
    }
  } else {
    let firstChild = document.querySelector(
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

export function addPlayMode(event) {
  let cards = random();
  let content = document.querySelector(".content");
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.hideFragment();
}

export function addPlayModeForCards() {
  let value = document.querySelector(
    ".content > div:nth-child(1) > div:nth-child(1)"
  ).className;
  let cards = words[value];
  let content = document.querySelector(".content");
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.hideFragment();
}

export function removePlayMode() {
  let content = document.querySelector(".content");
  let value = document.querySelector(
    ".content > div:nth-child(1)>div:nth-child(1)"
  ).className;
  let cards = words[value];
  console.log(value);
  content.innerHTML = "";
  let newCards = new CardsSoftCategories(cards);
  newCards.render();
  newCards.btnEvent();
  newCards.audioEvent();
  newCards.showFragment();
}

export function addBtnStartGame() {
  let content = document.querySelector(".content_wrap");
  let btnStart = document.querySelector(".start_game");
  if (btnStart) {
    return;
  } else {
    let btnStartGame = createBtn("button", "start_game");
    btnStartGame.innerText = "start game";
    content.append(btnStartGame);
  }
}

export function removeEventListener() {
  btn_aside.removeEventListener("click", showSidebar);
  btn_aside.setAttribute("disabled", "disabled");
  let categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.removeEventListener("click", createSoftCategoriesOnClick);
  });
}

export function returnEventListener() {
  btn_aside.addEventListener("click", showSidebar);
  btn_aside.removeAttribute("disabled", "disabled");
  let categoryMain = document.querySelectorAll(".category_wrap");
  categoryMain.forEach((element) => {
    element.addEventListener("click", createSoftCategoriesOnClick);
  });
  let btnStartGame = document.querySelector(".start_game");
  if (btnStartGame != null) {
    btnStartGame.remove();
  }
  let btnRepeat = document.querySelector(".repeat");
  if (btnRepeat != null) {
    btnRepeat.remove();
  }
}
