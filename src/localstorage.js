import { words } from "./variables.js";

export let numberOfRepetitions = 0;
export let numberOfMistakes = 0;
export let numberOfGuessing = 0;
export let statistic = JSON.parse(localStorage.getItem("statistic"));

export function createLocalStoragePack() {
  let numberOfRepetitions = 0;
  let numberOfMistakes = 0;
  let numberOfGuessing = 0;
  let progress = 0;
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



export function setNumberOfRepeats(event) {
  let target = event.currentTarget.parentElement.dataset.id;  
  statistic = JSON.parse(localStorage.getItem("statistic"));
  let numberOfRepetitions = statistic[target]["numberOfRepetitions"];
  numberOfRepetitions++;
  statistic[target]["numberOfRepetitions"] = numberOfRepetitions;
  localStorage.setItem("statistic", JSON.stringify(statistic));
}

export function setNumberOfGuess(value) {
  statistic = JSON.parse(localStorage.getItem("statistic"));
  let numberOfGuessing = statistic[value]["numberOfGuessing"];
  numberOfGuessing++;
  statistic[value]["numberOfGuessing"] = numberOfGuessing; 
  localStorage.setItem("statistic", JSON.stringify(statistic));
}

export function setNumberOfMistakes(value) {
  statistic = JSON.parse(localStorage.getItem("statistic"));
  let numberOfMistakes = statistic[value]["numberOfMistakes"];
  numberOfMistakes++;
  statistic[value]["numberOfMistakes"] = numberOfMistakes;  
  localStorage.setItem("statistic", JSON.stringify(statistic));
}
