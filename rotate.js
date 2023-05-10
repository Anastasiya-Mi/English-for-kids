let btn = document.querySelectorAll('.push');
console.log(btn);

btn.forEach((element)=>{
    element.addEventListener("click", goFlip);


})
// btn.addEventListener("click",(event)=>{
    // let lCard = document.querySelectorAll('.flip-card');
    // lCard.classList.add('flip');
// })

function goFlip(event){
    let target = event.currentTarget;
    let element = target.parentElement.parentElement;
    let parent = element.parentElement.parentElement;
    console.log(element)
    // let lCard = document.querySelectorAll('.flip-card');
    parent.classList.add('flip');
    let back = element.nextElementSibling;
    back.addEventListener('mouseleave',(event)=>{
        parent.classList.remove('flip');
        // console.log('fasaaaaaf') 
    })
    
}

// document.addEventListener('click',(event)=>{
//     let target = event.currentTarget;
//     console.log(target,'dom')
// })


