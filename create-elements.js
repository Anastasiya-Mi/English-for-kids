
import {FRAGMENT,words,content,link,category,btnRotate,btnRepeatImg} from './variables.js';


export function createDiv (element,classOfElement,attributeFirst){
    let div = document.createElement(element);
    div.classList.add(classOfElement);
    if(attributeFirst != undefined){
        div.dataset.id = [attributeFirst];
    }
    return div;
}

export function createImg (element,imageLink,imgAlt){     
    let divImgWrap = createDiv ('div','img_wrap')
    let img = document.createElement(element);
    img.setAttribute("src", imageLink);
    img.setAttribute("alt", imgAlt);
    divImgWrap.append(img);
    return divImgWrap;  
}

export function createTitle (element,text){
    let divTitleWrap = createDiv ('div','title_wrap');
    let title = document.createElement(element);
    title.innerText = text;
    divTitleWrap.append(title)
    return divTitleWrap;  
}

export function createBtn (element,nameOfClass,btnRotate){
    let btn = document.createElement(element);
    btn.classList.add(nameOfClass);
    if(btnRotate != null){
    let img = createImg('img',btnRotate,'rotate');
    FRAGMENT.append(img);
    btn.append(FRAGMENT);
    return btn;
    } else {
    return btn;  
    }    
}

export function createFrontCard(imageLink,alt,title){
    let img = createImg ('img',imageLink,alt);      
    let front = createDiv ('div','front');
    let titleH3 = createTitle ('h3',[title]);
    let btn = createBtn ('button','push',btnRotate);
    titleH3.append(btn);
    front.append(img);
    front.append(titleH3);
    return front;
}
export function createBackCard(imageLink,imgAlt,titleRu){
    let img = createImg ('img',imageLink,imgAlt);  
    let back = createDiv ('div','back');
    back.append(img); 
    let titleRu1 = createTitle ('h3',titleRu);
    back.append(titleRu1);    
    return back;
}

export function createStartPage(wrap_name,title,attribute_name,imageLink,alt){  
    let categoryCard = createDiv ('div',wrap_name,attribute_name); 
    let img = createImg ('img',imageLink,alt);     
    let titleForCat = createTitle ('h3',title); 
    categoryCard.append(img);
    categoryCard.append(titleForCat);    
    FRAGMENT.append(categoryCard);
    return FRAGMENT;
}

export function createCard(wrap_name,title,attribute_name,imageLink,alt,titleRu){    
    let flipCard = createDiv ('div','flip-card');
    let categoryCard = createDiv ('div',wrap_name,attribute_name); 
    categoryCard.classList.add(wrap_name);
    let front = createFrontCard(imageLink,alt,title,btnRotate);    
    let back = createBackCard(imageLink,alt,titleRu);  
    categoryCard.prepend(front);
    categoryCard.append(back);
    flipCard.append(categoryCard);
    FRAGMENT.append(flipCard);
    return FRAGMENT;
}

