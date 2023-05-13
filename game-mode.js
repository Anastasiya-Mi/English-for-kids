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
  changeState,
  addPlayMode,
  addPlayModeForCards,
  removePlayMode,
  addBtnStartGame,
  removeEventListener,
  returnEventListener,
} from "./change-mode.js";

let repeatTrackValue = "";
export let countCorrect = 0;
export let countWrong = 0;
export let stateOfGame = "";

export function playQueue(event) {
  let arr = createRandomQueue();
  let arrShake = shake(arr);
  console.log(arrShake, "arrShake");
  createRepeatBtn();
  playSound(arrShake);
}

export function playSound(arr) {
    let index = 0;    
    let clickedValue = "";
    let right = new Audio("/assets/audio/correct.mp3");
    let wrong = new Audio("/assets/audio/error.mp3");
    let name = playMode(index, arr, countCorrect, countWrong);
    let currentGame = document.querySelectorAll("div.flip-card.hide");
  currentGame.forEach((element) => {
    element.addEventListener("click", function chooseCard(event){
        let result = new Promise(function (resolve, reject){
        let target = event.currentTarget;
        let value = target.firstChild;
        clickedValue = value.dataset.id;
        if (clickedValue === name){
            console.log(clickedValue);
            target.classList.add("correct");
          target.removeEventListener("click", chooseCard);
          countCorrect++;
          console.log(countCorrect,'countCorrect')
          index++;
          let field = document.querySelector("#answers");
          field.classList.add('show');
          console.log(field)
          let correctImg = createImg('img', "/assets/images/right.png","right",);
          clip();        
          field.append(correctImg);
          right.play();
          resolve();
        } else {
            countWrong++;
            console.log(countWrong,'countWrong')
          let field = document.querySelector("#answers");
          field.classList.add('show');
          console.log(field);
          let wrongImg = createImg('img', "/assets/images/wrong.png","wrong");
          clip();
          FRAGMENT.append(wrongImg);
          field.append(FRAGMENT);
          wrong.play();
          
        }

        

    });
    result.then(()=>{
        name = playMode(index, arr, countCorrect, countWrong);
    })
    // .then(()=>{
    //     if (countWrong === 0 && state === "end") {
    //         let content = document.querySelector(".content");
    //         content.innerHTML = "";
    //         let result = createImg('img', "/assets/images/wrong.png","wrong");
    //         content.append(result);
    //       }
    //     });
    // })
  });

})
}


function clip() {
    let answContainer = document.querySelector("#answers");
    let elements = answContainer.childNodes;
    let value = elements.length;
    let containerVolume = 5;
    console.log(elements);
    if (value > containerVolume) {
      elements[0].remove();
    }
  };


export function playMode(index, arr, countCorrect, countWrong) {

  if (index === arr.length) {
    stateOfGame = "end";
    if (countWrong === 0 && stateOfGame === "end") {
      let value = "success";
      showResult(value);
    } else {
      let value = "failure";
      showResult(value);
    }
   
  }
  let name = repeatTrack(index,arr);
  return name;
}
export function repeatTrack(index,arr){
    let btnRepeat = document.querySelector(".repeat");
    let element = arr[index];
    console.log(element, index);
    let start = Object.entries(element);
    let name = start[0][0];
    console.log(element, name);
    let sound = Object.values(element)[0];
    let track = new Audio(sound);
    console.log(track, "do igry");
    track.play();
    repeatTrackValue = track;
    console.log(repeatTrackValue);
    btnRepeat.addEventListener("click", (event) => {
        repeatTrackValue.play();
    });    
    return name;
}

export function showResult(value) {
  let content = document.querySelector(".content");
  let answers = document.querySelector("#answers");
  answers.classList.remove("show");
  answers.innerHTML = "";
  content.innerHTML = "";
  let resultImg;
  let resultAudio
  if (value === "success") {   
    let resultImg = createImg('img', "/assets/images/success.jpg","success");
    let resultAudio = new Audio("/assets/audio/success.mp3");
    resultAudio.play();
    content.append(resultImg);    
    let btnRepeat = document.querySelector(".repeat");
    if(btnRepeat != null){
        btnRepeat.remove()
    }
     setTimeout(function () {
      document.location.href = "";
    }, 3000);
   
  } else if(value === "failure") {    
    let resultImg = createImg('img', "/assets/images/failure.jpg","failure");
    let resultAudio = new Audio("/assets/audio/failure.mp3");
    resultAudio.play();
    content.append(resultImg);    
    let message = "correctly" + " "+ `${countCorrect}`+ " " + "wrong" +" "+ `${countWrong}`;
    let messageTitle = createTitle("h2", message);
    content.append(messageTitle);
    let btnRepeat = document.querySelector(".repeat");
    if(btnRepeat != null){
        btnRepeat.remove()
    }
    setTimeout(function () {
      document.location.href = "";
    }, 3000);
  }
}

export function createRepeatBtn() {
  let btnStartsGame = document.querySelector(".start_game");
  btnStartsGame.removeEventListener("click", addPlayMode);
  console.log(btnStartsGame, "btnStartsGame");
  btnStartsGame.remove();
  let content = document.querySelector(".content_wrap");
  let btnRepeat = document.querySelector(".repeat");
  if (btnRepeat) {
    return;
  } else {
    let btnRepeat = createBtn("button", "repeat");
    btnRepeat.innerHTML = btnRepeatImg;
    content.append(btnRepeat);
  }
}

export function repeat(value) {
  value.play();
}

export function random() {
  let arrOfKeys = Object.keys(words).splice(1, 8);
  console.log(arrOfKeys);
  let number = arrOfKeys.length;
  let max = number - 1;
  let min = 0;
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  let value = words[arrOfKeys[random]];
  console.log(value);
  return value;
}

export function shake(arr) {
  let newArr = arr.sort(() => Math.random() - 0.5);
  return newArr;
}

export function createRandomQueue() {
  let value = document.querySelector(
    ".content > div:nth-child(1) > div:nth-child(1)"
  ).className;
  let cards = words[value];
  console.log(cards, "rfhn");
  let audioArr = [];
  cards.forEach((element) => {
    let src = element.audio;
    let key = element.title;
    let part = { [key]: src };
    audioArr.push(part);
  });
  return audioArr;
}
