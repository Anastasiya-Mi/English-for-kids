import { words, content, link, category, FRAGMENT } from "./variables.js";
import { createCard, createStartPage } from "./create-elements.js";

import { createActiveLink } from "./aside.js";
import { setNumberOfRepeats } from "./localstorage.js";

export class Cards {
  constructor(value) {
    this.value = value;
  }
  render() {
    this.value.forEach(
      ({ wrap_name, title, attribute_name, imageLink, alt }) => {
        let fragment = createStartPage(
          wrap_name,
          title,
          attribute_name,
          imageLink,
          alt
        );
        content.append(fragment);
      }
    );
  }

  createCard() {
    let categoryMain = document.querySelectorAll(".category_wrap");
    categoryMain.forEach((element) => {
      element.addEventListener("click", createSoftCategoriesOnClick);
    });
  }
}
export function createSoftCategoriesOnClick(event) {
  let target = event.currentTarget;
  if (target.dataset.id != null) {
    target = event.currentTarget.dataset.id;
  } else {
    target = event.target.textContent;
  }
  let value = words[target];
  let content = document.querySelector(".content");
  content.innerHTML = "";
  let category = new CardsSoftCategories(value);
  category.render();
  category.btnEvent();
  category.audioEvent();
}

export class CardsSoftCategories {
  constructor(value) {
    this.value = value;
  }
  render() {
    this.value.forEach(
      ({
        wrap_name,
        attribute_name,
        title,
        imageLink,
        alt,
        titleRu,
        btnRotate,
      }) => {
        let fragment = createCard(
          wrap_name,
          attribute_name,
          title,
          imageLink,
          alt,
          titleRu,
          btnRotate
        );

        content.append(fragment);
      }
    );
  }
  btnEvent() {
    let btn = document.querySelectorAll(".push");
    btn.forEach((element) => {
      element.firstChild.classList.add("btn");
      element.addEventListener("click", goFlip);
    });
    function goFlip(event) {
      let target = event.currentTarget;
      let element = target.parentElement.parentElement;
      let parent = element.parentElement.parentElement;
      parent.classList.add("flip");
      let back = element.nextElementSibling;
      back.addEventListener("mouseleave", (event) => {
        parent.classList.remove("flip");
      });
    }
  }
  audioEvent() {
    let category = document.querySelectorAll(".front");
    category.forEach((element) => {
      element.addEventListener("click", playAudio);
      element.addEventListener("click", setNumberOfRepeats);
    });
  }
  hideFragment() {
    let back = document.querySelectorAll(".back");
    back.forEach((element) => {
      element.classList.add("hide");
    });
    let titleWrap = document.querySelectorAll(".title_wrap");
    titleWrap.forEach((element) => {
      element.classList.add("hide");
    });
    let flip = document.querySelectorAll(".flip-card");
    flip.forEach((element) => {
      element.classList.add("hide");
    });
    let front = document.querySelectorAll(".front");
    front.forEach((element) => {
      element.classList.add("hide");
    });
    let imgWrap = document.querySelectorAll(".img_wrap");
    imgWrap.forEach((element) => {
      element.classList.add("hide");
    });
  }
  showFragment() {
    let back = document.querySelectorAll(".back");
    back.forEach((element) => {
      element.classList.remove("hide");
    });
    let titleWrap = document.querySelectorAll(".title_wrap");
    titleWrap.forEach((element) => {
      element.classList.remove("hide");
    });
    let flip = document.querySelectorAll(".flip-card");
    flip.forEach((element) => {
      element.classList.remove("hide");
    });
    let front = document.querySelectorAll(".front");
    front.forEach((element) => {
      element.classList.remove("hide");
    });
    let imgWrap = document.querySelectorAll(".img_wrap");
    imgWrap.forEach((element) => {
      element.classList.remove("hide");
    });
  }
}

export function createCardOnLink(event) {
  createActiveLink(event);
  createSoftCategoriesOnClick(event);
}

export function playAudio(event) {
  let target = event.currentTarget.parentElement.classList[0];
  let cardTarget = event.target.parentElement.parentElement.className;
  let ID = event.currentTarget.parentElement.dataset.id;
  let audioUrl = words[target].find((elem) => elem.title === ID).audio;
  let audio = new Audio(audioUrl);
  if (cardTarget != "push") {
    audio.play();
    event.stopPropagation();
    audio.addEventListener("playing", (event) => {
      let category = document.querySelectorAll(".front");
      category.forEach((element) => {
        element.removeEventListener("click", playAudio);
        element.removeEventListener("click", setNumberOfRepeats);
      });
    });
    audio.addEventListener("ended", (event) => {
      let category = document.querySelectorAll(".front");
      category.forEach((element) => {
        element.addEventListener("click", playAudio);
        element.addEventListener("click", setNumberOfRepeats);
      });
    });
  } else if (cardTarget === "push") {
    let btn = document.querySelectorAll(".push");
    btn.forEach((element) => {
      element.removeEventListener("click", playAudio);
      element.removeEventListener("click", setNumberOfRepeats);
    });
  }
}
