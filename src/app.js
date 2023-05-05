console.log("123");
const FRAGMENT = document.createDocumentFragment();
let variables = {
  category: [
    {
      wrap_name: "category_wrap",
      title: "Action",
      imageLink: "/assets/images/category/action_category.png",
      alt: "dog in a cap",
      data_id: "action",
      attribute_name: "action",
    },
    {
      wrap_name: "category_wrap",
      title: "Animals",
      imageLink: "/assets/images/category/animals_category.png",
      alt: "cat in a shell",
      attribute_name: "animals",
    },
    {
      wrap_name: "category_wrap",
      title: "Birds",
      imageLink: "/assets/images/category/birds_category.png",
      alt: "bird on branch",
      attribute_name: "birds",
    },
    {
      wrap_name: "category_wrap",
      title: "Cloth",
      imageLink: "/assets/images/category/cloth_category.png",
      alt: "sweater",
      attribute_name: "cloth",
    },
    {
      wrap_name: "category_wrap",
      title: "Emotions",
      alt: "happy dog",
      imageLink: "/assets/images/category/emotions_category.png",
      attribute_name: "emotions",
    },
    {
      wrap_name: "category_wrap",
      title: "Hobby",
      alt: "singing cat",
      imageLink: "/assets/images/category/hobby_category.png",
      attribute_name: "hobby",
    },
    {
      wrap_name: "category_wrap",
      title: "Pets",
      imageLink: "/assets/images/category/pets_category.png",
      alt: "man and cat",
      attribute_name: "pets",
    },
    {
      wrap_name: "category_wrap",
      title: "Sport",
      imageLink: "/assets/images/category/sport_category.png",
      alt: "cat and ball",
      attribute: "data_id",
      attribute_name: "sport",
    },
  ],
  action: [
    {
      wrap_name: "category",
      title: "cry",
      titleRu: "Плакать",
      imageLink: "/assets/images/action/cry.jpg",
      alt: "girl crying",
      attribute_name: "cry",
      audio:'/assets/audio/action/cry.mp3'
    },
    {
      wrap_name: "category",
      title: "fly",
      titleRu: "Летать",
      imageLink: "/assets/images/action/fly.jpg",
      alt: "duck fly",
      attribute_name: "fly",
      audio:'/assets/audio/action/fly.mp3'
    },
    {
      wrap_name: "category",
      title: "hug",
      titleRu: "Обнимать",
      imageLink: "/assets/images/action/hug.jpg",
      alt: "girl hug bear",
      attribute_name: "hug",
      audio:'/assets/audio/action/hug.mp3'
    },
    {
      wrap_name: "category",
      title: "jump",
      titleRu: "Прыгать",
      imageLink: "/assets/images/action/jump.jpg",
      alt: "kids jump",
      attribute_name: "jump",
      audio:'/assets/audio/action/jump.mp3'
    },
    {
      wrap_name: "category",
      title: "laugh",
      titleRu: "смеяться",
      alt: "women laugh",
      imageLink: "/assets/images/action/laugh.jpg",
      attribute_name: "laugh",
      audio:'/assets/audio/action/laugh.mp3'
    },
    {
      wrap_name: "category",
      title: "open",
      titleRu: "открывать",
      alt: "kid open door",
      imageLink: "/assets/images/action/open.jpg",
      attribute_name: "open",
      audio:'/assets/audio/action/open.mp3'
    },
    {
      wrap_name: "category",
      title: "point",
      titleRu: "указывать",
      imageLink: "/assets/images/action/point.jpg",
      alt: "girl pointing her finger",
      attribute_name: "point",
      audio:'/assets/audio/action/point.mp3'
    },
    {
      wrap_name: "category",
      title: "smile",
      titleRu: "улыбаться",
      imageLink: "/assets/images/action/smile.jpg",
      alt: "girl smile",
      attribute_name: "smile",
      audio:'/assets/audio/action/smile.mp3'
    },
  ],
  animals: [
    {
      wrap_name: "category",
      title: "bear",
      titleRu: "медведь",
      imageLink: "/assets/images/animals/bear.jpg",
      alt: "bear",
      attribute_name: "bear",
      audio: "/assets/audio/animals/bear.mp3"
    },
    {
      wrap_name: "category",
      title: "dolphin",
      titleRu: "дельфин",
      imageLink: "/assets/images/animals/dolphin.jpg",
      alt: "dolphin",
      attribute_name: "dolphin",
      audio: "/assets/audio/animals/dolphin.mp3"
    },
    {
      wrap_name: "category",
      title: "elephant",
      titleRu: "слон",
      imageLink: "/assets/images/animals/elephant.jpg",
      alt: "elephant",
      attribute_name: "elephant",
      audio: "/assets/audio/animals/elephant.mp3"
    },
    {
      wrap_name: "category",
      title: "frog",
      titleRu: "лягушка",
      imageLink: "/assets/images/animals/frog.jpg",
      alt: "frog",
      attribute_name: "frog",
      audio: "/assets/audio/animals/frog.mp3"
    },
    {
      wrap_name: "category",
      title: "giraffe",
      titleRu: "жираф",
      alt: "giraffe",
      imageLink: "/assets/images/animals/giraffe.jpg",
      attribute_name: "giraffe",
      audio: "/assets/audio/animals/giraffe.mp3"
    },
    {
      wrap_name: "category",
      title: "lion",
      titleRu: "открывать",
      alt: "lion",
      imageLink: "/assets/images/animals/lion.jpg",
      attribute_name: "lion",
      audio: "/assets/audio/animals/lion.mp3"
    },
    {
      wrap_name: "category",
      title: "pig",
      titleRu: "свинья",
      imageLink: "/assets/images/animals/pig.jpg",
      alt: "pig",
      attribute_name: "pig",
      audio: "/assets/audio/animals/pig.mp3"
    },
    {
      wrap_name: "category",
      title: "wolf",
      titleRu: "волк",
      imageLink: "/assets/images/animals/wolf.jpg",
      alt: "wolf",
      attribute_name: "wolf",
      audio: "/assets/audio/animals/wolf.mp3"
    },
  ],
  birds: [
    {
      wrap_name: "category",
      title: "chick",
      titleRu: "цыпленок",
      imageLink: "/assets/images/birds/chick.jpg",
      alt: "chick",
      attribute_name: "chick",
      audio:"/assets/audio/birds/chick.mp3"
    },
    {
      wrap_name: "category",
      title: "chicken",
      titleRu: "курица",
      imageLink: "/assets/images/birds/chicken.jpg",
      alt: "chicken",
      attribute_name: "chicken",
      audio:"/assets/audio/birds/chicken.mp3"
    },
    {
      wrap_name: "category",
      title: "flamingo",
      titleRu: "фламинго",
      imageLink: "/assets/images/birds/flamingos.jpg",
      alt: "flamingo",
      attribute_name: "flamingo",
      audio:"/assets/audio/birds/flamingo.mp3"
    },
    {
      wrap_name: "category",
      title: "owl",
      titleRu: "сова",
      imageLink: "/assets/images/birds/owl.jpg",
      alt: "owl",
      attribute_name: "owl",
      audio:"/assets/audio/birds/owl.mp3"
    },
    {
      wrap_name: "category",
      title: "parrot",
      titleRu: "попугай",
      alt: "parrot",
      imageLink: "/assets/images/birds/parrot.jpg",
      attribute_name: "parrot",
      audio:"/assets/audio/birds/parrot.mp3"
    },
    {
      wrap_name: "category",
      title: "pigeon",
      titleRu: "голубь",
      alt: "pigeon",
      imageLink: "/assets/images/birds/pigeon.jpg",
      attribute_name: "pigeon",
      audio:"/assets/audio/birds/pigeon.mp3"
    },
    {
      wrap_name: "category",
      title: "raven",
      titleRu: "ворон",
      imageLink: "/assets/images/birds/raven.jpg",
      alt: "raven",
      attribute_name: "raven",
      audio:"/assets/audio/birds/raven.mp3"
    },
    {
      wrap_name: "category",
      title: "tit",
      titleRu: "синица",
      imageLink: "/assets/images/birds/tit.jpg",
      alt: "tit",
      attribute_name: "tit",
      audio:"/assets/audio/birds/tit.mp3"
    },
  ],
  cloth: [
    {
      wrap_name: "category",
      title: "blouse",
      titleRu: "блузка",
      imageLink: "/assets/images/cloth/blouse.jpg",
      alt: "blouse",
      attribute_name: "blouse",
      audio:"/assets/audio/cloth/blouse.mp3"
    },
    {
      wrap_name: "category",
      title: "boot",
      titleRu: "ботинок",
      imageLink: "/assets/images/cloth/boot.jpg",
      alt: "boot",
      attribute_name: "boot",
      audio:"/assets/audio/cloth/boot.mp3"
    },
    {
      wrap_name: "category",
      title: "coat",
      titleRu: "пальто",
      imageLink: "/assets/images/cloth/coat.jpg",
      alt: "coat",
      attribute_name: "coat",
      audio:"/assets/audio/cloth/coat.mp3"
    },
    {
      wrap_name: "category",
      title: "dress",
      titleRu: "платье",
      imageLink: "/assets/images/cloth/dress.jpg",
      alt: "dress",
      attribute_name: "dress",
      audio:"/assets/audio/cloth/dress.mp3"
    },
    {
      wrap_name: "category",
      title: "pants",
      titleRu: "брюки",
      alt: "pants",
      imageLink: "/assets/images/cloth/pants.jpg",
      attribute_name: "pants",
      audio:"/assets/audio/cloth/pants.mp3"
    },
    {
      wrap_name: "category",
      title: "shirt",
      titleRu: "рубашка",
      alt: "shirt",
      imageLink: "/assets/images/cloth/shirt.jpg",
      attribute_name: "shirt",
      audio:"/assets/audio/cloth/shirt.mp3"
    },
    {
      wrap_name: "category",
      title: "shoe",
      titleRu: "обувь",
      imageLink: "/assets/images/cloth/shoe.jpg",
      alt: "shoe",
      attribute_name: "shoe",
      audio:"/assets/audio/cloth/shoe.mp3"
    },
    {
      wrap_name: "category",
      title: "skirt",
      titleRu: "юбка",
      imageLink: "/assets/images/cloth/skirt.jpg",
      alt: "skirt",
      attribute_name: "skirt",
      audio:"/assets/audio/cloth/skirt.mp3"
    },
  ],
  emotions: [
    {
      wrap_name: "category",
      title: "angry",
      titleRu: "злой",
      imageLink: "/assets/images/emotions/angry.jpg",
      alt: "angry",
      attribute_name: "angry",
      audio:"/assets/audio/emotions/angry.mp3"
    },
    {
      wrap_name: "category",
      title: "happy",
      titleRu: "счастливый",
      imageLink: "/assets/images/emotions/happy.jpg",
      alt: "happy",
      attribute_name: "happy",
      audio:"/assets/audio/emotions/happy.mp3"
    },
    {
      wrap_name: "category",
      title: "pride",
      titleRu: "гордый",
      imageLink: "/assets/images/emotions/pride.jpg",
      alt: "pride",
      attribute_name: "pride",
      audio:"/assets/audio/emotions/pride.mp3"
    },
    {
      wrap_name: "category",
      title: "sad",
      titleRu: "грустный",
      imageLink: "/assets/images/emotions/sad.jpg",
      alt: "sad",
      attribute_name: "sad",
      audio:"/assets/audio/emotions/sad.mp3"
    },
    {
      wrap_name: "category",
      title: "scared",
      titleRu: "испуганный",
      alt: "scared",
      imageLink: "/assets/images/emotions/scared.jpg",
      attribute_name: "scared",
      audio:"/assets/audio/emotions/scared.mp3"
    },
    {
      wrap_name: "category",
      title: "surprised",
      titleRu: "удивленный",
      alt: "surprised",
      imageLink: "/assets/images/emotions/surprised.jpg",
      attribute_name: "surprised",
      audio:"/assets/audio/emotions/surprised.mp3"
    },
    {
      wrap_name: "category",
      title: "tired",
      titleRu: "уставший",
      imageLink: "/assets/images/emotions/tired.jpg",
      alt: "tired",
      attribute_name: "tired",
      audio:"/assets/audio/emotions/tired.mp3"
    },
    {
      wrap_name: "category",
      title: "worried",
      titleRu: "обеспокоенный",
      imageLink: "/assets/images/emotions/worried.jpg",
      alt: "worried",
      attribute_name: "worried",
      audio:"/assets/audio/emotions/worried.mp3"
    },
  ],
  hobby: [
    {
      wrap_name: "category",
      title: "coding",
      titleRu: "программирование",
      imageLink: "/assets/images/hobby/coding.jpg",
      alt: "coding",
      attribute_name: "coding",
      audio:"/assets/audio/hobby/coding.mp3"
    },
    {
      wrap_name: "category",
      title: "dance",
      titleRu: "танцевать",
      imageLink: "/assets/images/hobby/dance.jpg",
      alt: "girl and boy dancing",
      attribute_name: "dance",
      audio:"/assets/audio/hobby/dance.mp3"
    },
    {
      wrap_name: "category",
      title: "draw",
      titleRu: "рисовать",
      imageLink: "/assets/images/hobby/draw.jpg",
      alt: "girl drawing",
      attribute_name: "draw",
      audio:"/assets/audio/hobby/draw.mp3"
    },
    {
      wrap_name: "category",
      title: "photography",
      titleRu: "фотографировать",
      imageLink: "/assets/images/hobby/photography.jpg",
      alt: "girl takes photo",
      attribute_name: "photography",
      audio:"/assets/audio/hobby/photography.mp3"
    },
    {
      wrap_name: "category",
      title: "play",
      titleRu: "играть",
      alt: "kids playing",
      imageLink: "/assets/images/hobby/play.jpg",
      attribute_name: "play",
      audio:"/assets/audio/hobby/play.mp3"
    },
    {
      wrap_name: "category",
      title: "reading",
      titleRu: "читать",
      alt: "children reading book",
      imageLink: "/assets/images/hobby/reading.jpg",
      attribute_name: "reading",
      audio:"/assets/audio/hobby/reading.mp3"
    },
    {
      wrap_name: "category",
      title: "sing",
      titleRu: "петь",
      imageLink: "/assets/images/hobby/sing.jpg",
      alt: "girl is singing",
      attribute_name: "sing",
      audio:"/assets/audio/hobby/sing.mp3"
    },
    {
      wrap_name: "category",
      title: "travel",
      titleRu: "путешествовать",
      imageLink: "/assets/images/hobby/travel.jpg",
      alt: "boy lies on the suitcase",
      attribute_name: "travel",
      audio:"/assets/audio/hobby/travel.mp3"
    },
  ],
  pets: [
    {
      wrap_name: "category",
      title: "cat",
      titleRu: "кот",
      imageLink: "/assets/images/pets/cat.jpg",
      alt: "cat",
      attribute_name: "cat",
      audio:"/assets/audio/pets/cat.mp3"
    },
    {
      wrap_name: "category",
      title: "dog",
      titleRu: "собака",
      imageLink: "/assets/images/pets/dog.jpg",
      alt: "dog",
      attribute_name: "dog",
      audio:"/assets/audio/pets/dog.mp3"
    },
    {
      wrap_name: "category",
      title: "fish",
      titleRu: "рыба",
      imageLink: "/assets/images/pets/fish.jpg",
      alt: "fish",
      attribute_name: "fish",
      audio:"/assets/audio/pets/fish.mp3"
    },
    {
      wrap_name: "category",
      title: "horse",
      titleRu: "лошадь",
      imageLink: "/assets/images/pets/horse.jpg",
      alt: "horse",
      attribute_name: "horse",
      audio:"/assets/audio/pets/horse.mp3"
    },
    {
      wrap_name: "category",
      title: "mouse",
      titleRu: "мышь",
      alt: "mouse",
      imageLink: "/assets/images/pets/mouse.jpg",
      attribute_name: "mouse",
      audio:"/assets/audio/pets/mouse.mp3"
    },
    {
      wrap_name: "category",
      title: "rabbit",
      titleRu: "кролик",
      alt: "rabbit",
      imageLink: "/assets/images/pets/rabbit.jpg",
      attribute_name: "rabbit",
      audio:"/assets/audio/pets/rabbit.mp3"
    },
    {
      wrap_name: "category",
      title: "sheep",
      titleRu: "овца",
      imageLink: "/assets/images/pets/sheep.jpg",
      alt: "sheep",
      attribute_name: "sheep",
      audio:"/assets/audio/pets/sheep.mp3"
    },
    {
      wrap_name: "category",
      title: "turtle",
      titleRu: "черепаха",
      imageLink: "/assets/images/pets/turtle.jpg",
      alt: "turtle",
      attribute_name: "turtle",
      audio:"/assets/audio/pets/turtle.mp3"
    },
  ],
  sport: [
    {
      wrap_name: "category",
      title: "dive",
      titleRu: "нырять",
      imageLink: "/assets/images/sport/dive.jpg",
      alt: "dive",
      attribute_name: "dive",
      audio:"/assets/audio/sport/dive.mp3"
    },
    {
      wrap_name: "category",
      title: "fish",
      titleRu: "рыбачить",
      imageLink: "/assets/images/sport/fish.jpg",
      alt: "fish",
      attribute_name: "fish",
      audio:"/assets/audio/sport/fish.mp3"
    },
    {
      wrap_name: "category",
      title: "ride",
      titleRu: "ездить",
      imageLink: "/assets/images/sport/ride.jpg",
      alt: "ride",
      attribute_name: "ride",
      audio:"/assets/audio/sport/ride.mp3"
    },
    {
      wrap_name: "category",
      title: "run",
      titleRu: "бегать",
      imageLink: "/assets/images/sport/run.jpg",
      alt: "run",
      attribute_name: "run",
      audio:"/assets/audio/sport/run.mp3"
    },
    {
      wrap_name: "category",
      title: "skating",
      titleRu: "катание на коньках",
      alt: "skating",
      imageLink: "/assets/images/sport/skating.jpg",
      attribute_name: "skating",
      audio:"/assets/audio/sport/skating.mp3"
    },
    {
      wrap_name: "category",
      title: "skiing",
      titleRu: "кататься на сноуборде",
      alt: "skiing",
      imageLink: "/assets/images/sport/skiing.jpg",
      attribute_name: "skiing",
      audio:"/assets/audio/sport/skiing.mp3"
    },
    {
      wrap_name: "category",
      title: "skip",
      titleRu: "прыгать на скакалке",
      imageLink: "/assets/images/sport/skip.jpg",
      alt: "skip",
      attribute_name: "skip",
      audio:"/assets/audio/sport/skip.mp3"
    },
    {
      wrap_name: "category",
      title: "swim",
      titleRu: "плавать",
      imageLink: "/assets/images/sport/swim.jpg",
      alt: "swim",
      attribute_name: "swim",
      audio: '/assets/audio/sport/swim.mp3'      
    },
  ],
};

function createCard(value) {
  // console.log(value)
  let content = document.querySelector(".content");
  value.forEach((element) => {
  let divCard = createElement(element);
  FRAGMENT.append(divCard);
  });
  content.prepend(FRAGMENT);
}

function createBtn(){
let btn = document.createElement("button");
btn.classList.add('push');
btn.innerText = "push";
return btn;
}
function createElement(element) {
let wrap_name = element.wrap_name;    
let attribute_name = element.attribute_name;
let imageLink = element.imageLink;
let alt = element.alt;
  let wrap = document.createElement("div");
  wrap.classList.add(wrap_name);
  wrap.dataset.id = attribute_name;
  let imgWrap = document.createElement("div");
  imgWrap.classList.add("img_wrap");
  let img = document.createElement("img");
  img.setAttribute("src", imageLink);
  img.setAttribute("alt", alt);
  imgWrap.append(img);
  let titleWrap = document.createElement("div");  
  titleWrap.classList.add("title_wrap");
  let title = document.createElement("h3");
  title.innerText = attribute_name;  
  titleWrap.append(title);
  // let back = document.createElement("div");
  // back.classList.add("back");
  // let titleWrapBack = document.createElement("div");  
  // titleWrapBack.classList.add("title_wrap_back");
  // let titleBack = document.createElement("h3");
  // titleBack.innerText = titleRu; 
  // titleWrapBack.append(titleBack);
  // back.append(titleWrapBack)
  wrap.append(imgWrap);
  wrap.append(titleWrap);
  // wrap.append(back);
  return wrap;
}
createCard(variables.category);

let categoryMain = document.querySelectorAll(".category_wrap");

categoryMain.forEach((element) => {
element.addEventListener("click", addButton);
});

function lookForCategory(variabels, id) {
  for (key in variabels) {
    if (key === id) {
      return variables[key];
    }
  }
};

let link = document.querySelectorAll("a");
link.forEach((element) =>{
element.addEventListener("click", addButton); 
})
  
function addButton(event){
  // event.preventDefault();
 
  let target = event.currentTarget;
        let text = target.textContent;
        let value = variables[text];
        // console.log(text);
        let content = document.querySelector(".content"); 
        content.innerHTML ='';
        createCard(value);
  let titleWrap = document.querySelectorAll(".category > .title_wrap");
        titleWrap.forEach((element)=>{        
            let child = element.lastChild;        
            let value1 = child.tagName;
            if(!(value1 === 'BUTTON')){            
                let btn = createBtn();                
                element.append(btn); 
            }
        });
      let category = document.querySelectorAll(".category");     
      category.forEach((element) =>{
        let classValue = element.classList;
        // console.log(classValue.length);
        if(classValue.length === 1){
          element.classList.add(text);
          element.addEventListener("click", addAudio);
        } else{
          element.addEventListener("click", addAudio)
        }        
});          
};


function addAudio(event){
  let target = event.currentTarget;
  let target2 = event.target.tagName;
  // console.log(target2);
  let [value1,value] = target.className.split(' ');  
  let part = variables[value];
  let name = target.lastChild.firstChild.textContent;
  let obj = part.find(elem => elem.title === name);
  let url = obj.audio;
  let audio = new Audio(url);  
  if(target2 != "BUTTON"){  
  audio.play();
  audio.addEventListener("playing",(event) => {
    let category = document.querySelectorAll(".category");
    category.forEach((element) =>{
    element.removeEventListener("click", addAudio)});
  });
  audio.addEventListener("ended",(event) => {
    let category = document.querySelectorAll(".category");
    category.forEach((element) =>{
      element.addEventListener("click", addAudio)});
  });
}
}
 let btn = document.querySelector('.state');
//  console.log(btn)

 btn.addEventListener('click',changeMode);


 function changeMode(event){
  let target = event.currentTarget;
  let state = target.getAttribute('value')
   if (state === 'train'){    
    target.setAttribute('value','play');
    target.innerText = 'play';
    let [value,page] = content.firstElementChild.className.split(' ');
    console.log(page)
    if (!(page === "category_wrap")){
      let cards = document.querySelectorAll(".category");
      cards.forEach((element)=>{
        // element.lastChild.firstChild.innerHTML = '';
        element.lastChild.innerHTML = '';
        element.removeEventListener('click',addAudio);
        element.removeEventListener('click',addButton);
      })
    }
    // console.log(place)
    createBtnStart();    
    let btnStartsGame= document.querySelector('.start_game');
    btnStartsGame.addEventListener("click", addPlayMode);
    categoryMain.forEach((element) => {
      element.removeEventListener("click", addButton);
        });
        link.forEach((element) =>{
          element.removeEventListener("click", addButton); 
          element.addEventListener("click", (event)=>{
            event.preventDefault();
          }); 
          })
   } else{    
    let btnStartsGame= document.querySelector('.start_game');
    console.log(btnStartsGame);
    btnStartsGame.addEventListener("click", addPlayMode);
    target.setAttribute('value','train');
    target.innerText = 'train';
    categoryMain.forEach((element) => {
      element.addEventListener("click", addButton);
        });
        link.forEach((element) =>{          
          element.addEventListener("click", addButton); 
          })
   }

 }
//  let arrOfAudio =[]

 function addPlayMode (event){
  let target = event.currentTarget.previousElementSibling.className;
  console.log(target);
   if(target === "category_wrap"){
    // console.log(target);
    let arrOfKeys = Object.keys(variables).splice(1,8);
    let number = arrOfKeys.length; 
    let max= number-1;
    let min = 0;
   let random = Math.floor(Math.random() * (max - min + 1) + min);  
    let value =variables[arrOfKeys[random]];    
    console.log(value);
    content.innerHTML ='';
    createCard(value);
    let children = content.childNodes;
    children.forEach((element)=>{
      element.classList.add(arrOfKeys[random]);
      let title = element.lastChild.lastChild;
      title.innerText ='';  
      // createBtnStart(); 
      // playSound(arr)   
    });
    let newArr = [];
    value.forEach((element) =>{
      let key = element.title;
      let value = element.audio;
      // let obj = {key:key,
      // audio:value}
      let obj = {[key]: value}
      newArr.push(obj);
    });
    console.log(newArr);
    let arrShake1 = shake (newArr);
    playSound(arrShake1);  
    
  } else{ 
    console.log(target);
    let [value,key] = target.split(' ')
    let arrOfKeys = variables[key];
    
    let arrOfAudio = [];
    
    arrOfKeys.forEach((element) =>{
      let key = element.title;
      let value = element.audio;     
      let obj = {[key]: value}
      arrOfAudio.push(obj);
    });
    let btn = document.querySelector('.start_game');
    let arrShake = shake (arrOfAudio);   
    playSound(arrShake);
  }
 }

function shake (arr){
 let newArr = arr.sort(()=>Math.random()-0.5);
 return newArr;
}

function createBtnStart(){
  let btnStarts= document.querySelector('.start_game');  
  if(btnStarts === null){
    let btnStart = createBtn();
    content.append(btnStart);
    let btnStarts= document.querySelector('.content >.push');
    btnStarts.classList.remove('push');
    btnStarts.classList.add('start_game');
    btnStarts.innerText = 'start game';
  } else{
    return;
  }  
}
let countCorrect = 0;
let countWrong =0 ;
let state ='';

function playSound(arr){
  let length = arr.length;
  // let field = document.querySelector('.answers');
  // let wrongImg = createImg('wrong',"/assets/images/wrong.png");
  // let correctImg = createImg('wrong',"/assets/images/right.png");
let clickedValue ="";
let index = 0;
let name = playQue(index,length,arr,countCorrect,countWrong);
let currentGame = document.querySelectorAll('.category');
currentGame.forEach((element) =>{
  element.removeEventListener('click',addAudio);
  element.removeEventListener('click',addButton);
  element.addEventListener('click',(event)=>{
    let target = event.currentTarget;
    console.log(target);
    let targetID = event.currentTarget.dataset.id;
    console.log(targetID)
    clickedValue = targetID;
    let result = new Promise(function(resolve,reject){
      // let way1 = 
      let right = new Audio("/assets/audio/correct.mp3");
      let wrong = new Audio("/assets/audio/error.mp3")
      if(clickedValue === name){
      console.log(clickedValue);
      target.classList.add('correct'); 
      // target.removeEventListener('click',(event))  
      countCorrect++;
      index++;
      let field = document.querySelector('#answers');
      let correctImg = createImg('wrong',"/assets/images/right.png");
      console.log(field)
      field.append(correctImg);
      right.play();      
      resolve();
      } else{
        countWrong++;        
        // let target = event.currentTarget;
        let field = document.querySelector('#answers');
        console.log(field)
        let wrongImg = createImg('wrong',"/assets/images/wrong.png");
  
        FRAGMENT.append(wrongImg)
        field.append(FRAGMENT);  
        console.log(field,'after')
        wrong.play();
        console.log('((((((');
        // reject();
      }
    
});
result.then(()=>{  
  // name = setTimeout(playQue(index,length,arr,countCorrect,countWrong), 5000);
  name = playQue(index,length,arr,countCorrect,countWrong);
  // playQue(index,length,arr,countCorrect,countWrong);
}).then(()=>{
  if(countWrong === 0 && state === "end"){
    let content = document.querySelector('.content');
    content.innerHTML = '';
    let result = createImg('success','/assets/images/success.jpg');
    content.append(result);
  }
})
// console.log(countCorrect,'countCorrect')
//   console.log(countWrong,'countWrong') 
  });
  // console.log(countCorrect,'countCorrect')
  // console.log(countWrong,'countWrong') 
  // alert("Правильно" + `${countCorrect}` + 'неправильно' + `${countWrong}`);
  });
}
//  alert("Правильно" + `${countCorrect}` + 'неправильно' + `${countWrong}`);
 
    


    function playQue(num,num1,arr,count,count1){
    if(num ===num1){
      state ='end';
      console.log(countCorrect,'countCorrect')
      console.log(countWrong,'countWrong')  
      // alert("Правильно" + `${countCorrect}` + 'неправильно' + `${countWrong}`);
      // return status ='end';
      if(countWrong === 0 && state === "end"){
        let content = document.querySelector('.content');
        let answers = document.querySelector('#answers');
        answers.classList.add('end');
        answers.innerHTML = '';
        content.innerHTML = '';
        let result = createImg('success','/assets/images/success.jpg');
        let resultAudio = new Audio('/assets/audio/success.mp3');      
        resultAudio.play();
        content.append(result);
        setTimeout(function(){
          document.location.href = "";
        },5000);
      } else {
        let content = document.querySelector('.content');
        let answers = document.querySelector('#answers');
        answers.classList.add('end');
        answers.innerHTML = '';
        content.innerHTML = '';
        let result = createImg('failure','/assets/images/failure.jpg');
        let resultFailure = new Audio('/assets/audio/failure.mp3');      
        resultFailure.play();
        content.append(result);
        let alert = ("Правильно" + `${countCorrect}` + 'неправильно' + `${countWrong}`);
        let h1 = createTitle('h2',alert);
        content.append(h1);
        setTimeout(function(){
          document.location.href = "";
        },5000);
      }
    }else{
      let element1 = arr[num];
      console.log(element1,num)
      let start = Object.entries(element1);
      let name = start[0][0];
      console.log(element1,name);
      let sound = Object.values(element1)[0];      
      let track = new Audio(sound);      
      track.play();
      return name;
  }
  
    }

    // function createAudio(sound){
    //   let track = new Audio(sound);      
    //   track.play();
    // }

    // function createAudio(sound){
    //   let track = new Audio(sound);      
    //   track.play();
    // }

    function createImg(alt,src){
  // let imgWrap = document.createElement("div");
  // imgWrap.classList.add("img_result");
  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  // imgWrap.append(img);  
  // console.log()
  return img;
  }

  function createTitle(h,text){
    let h2 = document.createElement(h);
    h2.innerText = text;
        return h2;
    }

    function returnMainPage(){
      document.location.href = "";
    }