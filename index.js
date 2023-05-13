import { words, content, link, category, FRAGMENT } from "./variables.js";
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
  changeState,
  addPlayMode,
  addPlayModeForCards,
  removePlayMode,
  addBtnStartGame,
  removeEventListener,
  returnEventListener,
} from "./change-mode.js";


let startPage = new Cards(words.category);
startPage.render();
startPage.createCard();

link.forEach((element) => {
  element.addEventListener("click", createCardOnLink);
});

state.addEventListener('click',changeState);