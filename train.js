let state = document.querySelector('.state');
state.addEventListener('click',changeMode);
let shadow = document.querySelector('.shadow');
let footer = document.querySelector('footer');
let header = document.querySelector('header');
let headerWrap = document.querySelector('.header_wrap');


function changeMode(event){
    let target = event.target;    
    let switchText = document.querySelector('.switch');
    if(target.checked){        
        switchText.innerText = 'PLAY';
    } else{
        switchText.innerText = 'TRAIN';
    }
}
let aside = document.querySelector('aside');
let btn_aside = document.querySelector('.aside');
let contentWrap = document.querySelector('.content_wrap');
let menu = document.querySelector('menu');
btn_aside.addEventListener('click',showSidebar);

shadow.addEventListener('click',closeSidebar);
footer.addEventListener('click',closeSidebar);
[...header.children].forEach((element) =>{
    element.addEventListener('click',closeSidebar)});
// headerWrap.addEventListener('click',closeSidebar);

function closeSidebar(event){
    let target = event.target; 
    if(target === shadow || target === footer || target === headerWrap || target === header){
        aside.classList.remove('checked');
        contentWrap.classList.remove('checked_wrap');
        shadow.classList.remove('checked');
        btn_aside.checked = false;
    }
}

function showSidebar(event){
    let target = event.target;      
    if(target.checked){        
        aside.classList.add('checked');
        contentWrap.classList.add('checked_wrap');
        shadow.classList.add('checked');
    } else{
        aside.classList.remove('checked');
        contentWrap.classList.remove('checked_wrap');
        shadow.classList.remove('checked');
    }
}