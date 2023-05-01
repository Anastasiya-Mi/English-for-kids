let cards = document.querySelector('.content');
const FRAGMENT = document.createDocumentFragment();


document.addEventListener('click',(event)=>{
    let target = event.target;
    event.preventDefault();
    let targetCards = cards.children;    
    if(!target.matches("a") || targetCards.lenght === 0){
        return;
    } else{
    route(event);
    }
    
  });
  

  let route = () =>{
    window.history.pushState({},"",event.target.href);
    urlLocationHandler();
  }

  


  let urlRoutes = {   
    404:"/templates/404.html",
    "/":"/index.html",
    "/action":"/templates/action.html",
    "/animals":"/templates/animals.html",
    "/birds":"/templates/birds.html",
    "/cloth":"/templates/cloth.html",
    "/emotions":"/templates/emotions.html",
    "/hobby":"/templates/hobby.html",
    "/pets":"/templates/pets.html",    
    "/sport":"/templates/sport.html",  
  
  }

    let urlLocationHandler = async()=>{
    let location = window.location.pathname;
    let html = await fetch(urlRoutes[location]).then((data) => data.text());// с помощью метода text переводим html ??? тут подумать ч/з фрагмент
// let html = await fetch(urlRoutes[location]);
console.log(html)
// cards.innerHTML = html;

    if(location.length === 0){
        location = "/";
    }
//   targetCards.lenght === 0
  
//   let urlRoute = (event)=>{
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({},"",event.target.href);
    // urlLocationHandler()
  }
  
  urlLocationHandler();
  window.route = route;
  window.onpopstate = urlLocationHandler;
  
//   let route = urlRoutes[location] || urlRoutes[404];
//   let html = await fetch(route.template).then((response) => response.text());
//   console.log(html)
//   let contentID = document.getElementById("content");
//   // FRAGMENT.append(html);
//   // contentID.prepend(FRAGMENT);
//   }
  
//   window.onpopstate = urlLocationHandler;
//   window.route = urlRoute;
//   urlLocationHandler();
  
  
  
  
  
  