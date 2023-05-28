import { words, content, FRAGMENT, heading } from "./variables.js";
import {
  createBtn,
  createTitle,
  createImg,
  createDiv,
} from "./create-elements.js";

import { createActiveLink, state } from "./aside.js";
import { CardsSoftCategories } from "./class.js";

export function createStatsPage(event) {
  content.classList.add("table");
  event.preventDefault();
  createActiveLink(event);
  let answers = document.querySelector("#answers");
  if (answers.childNodes.length != 0) {
    answers.classList.remove("show");
  }
  state.setAttribute("disabled", "disabled");
  let data = JSON.parse(localStorage.getItem("statistic"));
  content.innerHTML = "";
  createTable(heading, data);
  let table = document.querySelector("table");
  sortTable(table);
  let btnWrap = createDiv("div", "btn_wrap");
  let btnReset = createBtn("button", "reset");
  btnReset.innerText = "reset";
  btnWrap.append(btnReset);
  let btnRepeat = createBtn("button", "repeat_word");
  btnRepeat.innerText = "repeat difficult word";
  btnWrap.prepend(btnRepeat);
  FRAGMENT.append(btnWrap);
  content.prepend(FRAGMENT);

  btnReset.addEventListener("click", resetData);
  btnRepeat.addEventListener("click", createCardsForRepeat);
}

export function resetData(event) {
  let statistic = JSON.parse(localStorage.getItem("statistic"));
  for (let key in statistic) {
    let zero = 0;
    statistic[key]["numberOfRepetitions"] = zero;
    statistic[key]["numberOfMistakes"] = zero;
    statistic[key]["numberOfGuessing"] = zero;
    statistic[key]["progress"] = zero;
  }
  localStorage.setItem("statistic", JSON.stringify(statistic));
  statistic = JSON.parse(localStorage.getItem("statistic"));
  content.lastChild.remove();
  createTable(heading, statistic);
}

export function createTable(heading, arr) {
  let table_wrap = document.createElement("table");
  let tableHead = document.createElement("thead");
  for (let i = 0; i < heading.length; i++) {
    let tableHeadTh = document.createElement("th");
    tableHeadTh.setAttribute("scope", "col");
    tableHeadTh.innerText = heading[i];
    tableHead.append(tableHeadTh);
  }
  let tableBody = document.createElement("tbody");

  for (let key in arr) {
    let value = arr[key];
    let tr = createTr(value);
    tableBody.append(tr);
  }
  table_wrap.append(tableHead);
  table_wrap.append(tableBody);
  FRAGMENT.append(table_wrap);
  content.append(FRAGMENT);
}

export function getPercent(num1, num2) {
  const percent = 100;
  let sum = num1 + num2;
  let partOfCorrect = num1 * percent;
  if (!(sum === 0)) {
    let result = partOfCorrect / sum;
    return result.toFixed(2);
  } else {
    let result = 0;
    return result;
  }
}

export function createTr(value) {
  let arrEmpty = [];
  let title = value["title"];
  let titleRu = value["titleRu"];
  let numberOfRepetitions = value["numberOfRepetitions"];
  let numberOfGuessing = value["numberOfGuessing"];
  let numberOfMistakes = value["numberOfMistakes"];
  let progress = getPercent(numberOfGuessing, numberOfMistakes);
  arrEmpty.push(
    title,
    titleRu,
    numberOfRepetitions,
    numberOfGuessing,
    numberOfMistakes,
    progress
  );
  let tableTr = document.createElement("tr");
  for (let i = 0; i < arrEmpty.length; i++) {
    let tableTd = document.createElement("td");
    tableTd.innerText = arrEmpty[i];
    tableTr.append(tableTd);
  }
  return tableTr;
}

function createCardsForRepeat(event) {
  let head = document.querySelector("thead");
  let body = document.querySelector("tbody");
  let column_marks = head.children[5];
  let rows = body.children;
  let result = [];
  for (let i = 0; i < [...rows].length; i++) {
    let a = Number([...rows][i].lastChild.innerText);
    if (a > 0 && a < 100) {
      result.push([...rows][i]);
    }
  }

  if (result.length === 0) {
    content.innerHTML = "";
    let resultImg = createImg("img", "./assets/images/success.png", "success");
    resultImg.classList.add("game_end");
    content.append(resultImg);
    let message = "Nothing to repeat";
    let messageTitle = createTitle("h2", message);
    messageTitle.classList.add("game_end_mess");
    content.append(messageTitle);
    content.classList.remove("table");
    setTimeout(function () {
      document.location.href = "";
    }, 3000);
  } else {
    content.classList.remove("table");
    let value = [...result].sort((firstValue, secondValue) =>
      Number(firstValue.lastChild.innerText) <
      Number(secondValue.lastChild.innerText)
        ? -1
        : 1
    );
    let length = [...value].length;
    let maxCardsForRepeat = 8;

    if (length > maxCardsForRepeat) {
      value.splice(maxCardsForRepeat);
    }

    let newArr = [];

    for (let i = 0; i < value.length; i++) {
      let a = value[i].firstChild.innerText;
      newArr.push(a);
    }
    value = [];
    for (let key in words) {
      let newValue = words[key];
      for (let i = 0; i < newValue.length; i++) {
        let title = newValue[i]["title"];
        for (let k = 0; k < newArr.length; k++) {
          if (title === newArr[k]) {
            value.push(newValue[i]);
          }
        }
      }
    }
    content.innerHTML = "";
    let newCards = new CardsSoftCategories(value);
    newCards.render();
    newCards.btnEvent();
    newCards.audioEvent();
  }
}

function sortTable(table) {
  let head = table.tHead;
  let body = table.tBodies[0];
  let column_marks = head.children;
  let rows = body.children;
  let position;
  let trigger = true;
  table.addEventListener("click", handler1);
  function handler1(event) {
    let target = event.target;
    if (target.tagName === "TH") {
      position = [...column_marks].findIndex((element) => element === target);
      handler2(position);
    }
    function handler2(position) {
      if (trigger) {
        trigger = false;
        body.replaceChildren(...sortBodyUp(position));
      } else {
        trigger = true;
        body.replaceChildren(...sortBodyDown(position));
      }
    }

    function sortBodyUp(position) {      
      if (position === 0 || position === 1) {
        return [...rows].sort((firstValue, secondValue) =>
          firstValue.children[position].innerText <
          secondValue.children[position].innerText
            ? -1
            : 1
        );
      } else {
        return [...rows].sort((firstValue, secondValue) =>
          Number(firstValue.children[position].innerText) <
          Number(secondValue.children[position].innerText)
            ? -1
            : 1
        );
      }
    }

    function sortBodyDown(position) {
      if (position === 0 || position === 1) {
        return [...rows].sort((firstValue, secondValue) =>
          firstValue.children[position].innerText >
          secondValue.children[position].innerText
            ? -1
            : 1
        );
      } else {
        return [...rows].sort((firstValue, secondValue) =>
          Number(firstValue.children[position].innerText) >
          Number(secondValue.children[position].innerText)
            ? -1
            : 1
        );
      }
    }
  }
}
