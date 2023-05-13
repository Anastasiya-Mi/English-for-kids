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

export let statistic = JSON.parse(localStorage.getItem("statistic"));
console.log(statistic);
if (statistic === null) {
  createLocalStoragePack();
}

export function createLocalStoragePack() {
  let numberOfRepetitions = 0;
  let numberOfMistakes = 0;
  let numberOfGuessing = 0;
  let progress = 0;
  // let progress = (numberOfGuessing * 100) / (numberOfMistakes + numberOfGuessing);
  let statistic = {};

  for (let key in words) {
    let value = words[key];
    for (let i = 0; i < value.length; i++) {
      let wrap_name = value[i]["wrap_name"];
      if (!(wrap_name === "category_wrap")) {
        let title = value[i]["title"];
        let titleRu = value[i]["titleRu"];
        statistic[title] = {
          title: title,
          titleRu: titleRu,
          numberOfRepetitions: numberOfRepetitions,
          numberOfMistakes: numberOfMistakes,
          numberOfGuessing: numberOfGuessing,
          progress: 0,
        };
      }
    }
  }
  localStorage.setItem("statistic", JSON.stringify(statistic));
}

let numberOfReapet = statistis[name]["numberOfRepetitions"];
numberOfReapet++;
statistis[name]["numberOfRepetitions"] = numberOfReapet;
localStorage.setItem("statistis", JSON.stringify(statistis));
console.log(numberOfReapet);

let countCorrect = 0;
let countWrong = 0;
// let state = "";
statistis = JSON.parse(localStorage.getItem("statistis"));
// console.log(statistis);
function playSound(arr) {
  statistis = JSON.parse(localStorage.getItem("statistis"));
  console.log(statistis);
  let length = arr.length;
  let clickedValue = "";
  let index = 0;
  let name = playQue(index, length, arr, countCorrect, countWrong);
  let currentGame = document.querySelectorAll(".category");
  currentGame.forEach((element) => {
    element.removeEventListener("click", addAudio);
    element.removeEventListener("click", addButton);
    element.addEventListener("click", function chooseCard(event) {
      let target = event.currentTarget; // константа
      console.log(target);
      let targetID = event.currentTarget.dataset.id;
      console.log(targetID);
      clickedValue = targetID;
      let result = new Promise(function (resolve, reject) {
        let right = new Audio("/assets/audio/correct.mp3");
        let wrong = new Audio("/assets/audio/error.mp3");
        if (clickedValue === name) {
          console.log(clickedValue);
          let numberOfGues = statistis[clickedValue]["numberOfGuessing"];
          numberOfGues++;
          statistis[clickedValue]["numberOfGuessing"] = numberOfGues;
          console.log(statistis[clickedValue]);
          target.classList.add("correct");
          target.removeEventListener("click", chooseCard);
          countCorrect++;
          index++;
          let field = document.querySelector("#answers");
          let correctImg = createImg("right", "/assets/images/right.png");
          clip();
          console.log(field);
          field.append(correctImg);
          right.play();
          // localStorage.setItem("statistis", JSON.stringify(statistis));
          resolve();
        } else {
          if (clickedValue != name) {
            let numberOfMist = statistis[name]["numberOfMistakes"];
            numberOfMist++;
            statistis[name]["numberOfMistakes"] = numberOfMist;
            // localStorage.setItem("statistis", JSON.stringify(statistis));
          }
          countWrong++;
          let field = document.querySelector("#answers");
          console.log(field);
          let wrongImg = createImg("wrong", "/assets/images/wrong.png");
          clip();
          FRAGMENT.append(wrongImg);
          field.append(FRAGMENT);
          wrong.play();
          console.log("((((((");
          // localStorage.setItem("statistis", JSON.stringify(statistis));
          // console.log(statistis[name]);
        }
      });
      result
        .then(() => {
          name = playQue(index, length, arr, countCorrect, countWrong);
          localStorage.setItem("statistis", JSON.stringify(statistis));
        })
        .then(() => {
          if (countWrong === 0 && state === "end") {
            let content = document.querySelector(".content");
            content.innerHTML = "";
            let result = createImg("success", "/assets/images/success.jpg");
            content.append(result);
          }
        });
    });
  });
}

let repeatTrack = "";

function playQue(num, num1, arr, count, count1) {
  if (num === num1) {
    state = "end";
    if (countWrong === 0 && state === "end") {
      let content = document.querySelector(".content");
      let answers = document.querySelector("#answers");
      answers.classList.add("end");
      answers.innerHTML = "";
      content.innerHTML = "";
      let result = createImg("success", "/assets/images/success.jpg");
      let resultAudio = new Audio("/assets/audio/success.mp3");
      resultAudio.play();
      content.append(result);
      statsPage.removeEventListener("click", addButton);
      statsPage.addEventListener("click", (event) => {
        event.preventDefault();
      });
      statsPage.removeEventListener("click", createStatsPage);
      setTimeout(function () {
        document.location.href = "";
      }, 3000);
    } else {
      let content = document.querySelector(".content");
      let answers = document.querySelector("#answers");
      answers.classList.add("end");
      answers.innerHTML = "";
      content.innerHTML = "";
      let result = createImg("failure", "/assets/images/failure.jpg");
      let resultFailure = new Audio("/assets/audio/failure.mp3");
      resultFailure.play();
      content.append(result);
      let alert =
        "Правильно" + `${countCorrect}` + "неправильно" + `${countWrong}`;
      let h1 = createTitle("h2", alert);
      content.append(h1);
      statsPage.removeEventListener("click", addButton);
      statsPage.addEventListener("click", (event) => {
        event.preventDefault();
      });
      statsPage.removeEventListener("click", createStatsPage);
      setTimeout(function () {
        document.location.href = "";
      }, 3000);
    }
  } else {
    let btnRepeat = document.querySelector(".repeat");
    let element1 = arr[num];
    console.log(element1, num);
    let start = Object.entries(element1);
    let name = start[0][0];
    console.log(element1, name);
    let sound = Object.values(element1)[0];
    let track = new Audio(sound);
    console.log(track, "do igry");
    track.play();
    repeatTrack = track;
    console.log(repeatTrack);
    btnRepeat.addEventListener("click", (event) => {
      repeatTrack.play();
    });
    statsPage.removeEventListener("click", addButton);
    statsPage.addEventListener("click", (event) => {
      event.preventDefault();
    });
    return name;
  }
}
