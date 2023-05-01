document.addEventListener('click',(e)=>{
    let {target} = e;
    if(!target.matches("a")){
        return;
    }
    // e.preventDefault();
    urlRoute();
});
const FRAGMENT = document.createDocumentFragment();
let urlRoutes = {
    404:{
        template:"/templates/404.html",
        title:"",
        description: ""
    },
    "/":{
        template:"/index.html",
        title:"",
        description: ""
    },
    "/action":{
        template:"/templates/action.html",
        title:"",
        description: ""
    },
    "/animals":{
        template:"/templates/animals.html",
        title:"",
        description: ""

    },
    "/birds":{
        template:"/templates/birds.html",
        title:"",
        description: ""

    },
    "/cloth":{
        template:"/templates/cloth.html",
        title:"",
        description: ""

    },
    "/emotions":{
        template:"/templates/emotions.html",
        title:"",
        description: ""
    },
    "/hobby":{
        template:"/templates/hobby.html",
        title:"",
        description: ""
    },
    "/pets":{
        template:"/templates/pets.html",
        title:"",
        description: "" 
    },
    "/sport":{
        template:"/templates/sport.html",
        title:"",
        description: "" 
    }

}









let urlRoute = (event)=>{
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    urlLocationHandler()
}

let urlLocationHandler = async()=>{
    let location = window.location.pathname;
    if(location.length === 0){
        location = "/";
    }

 let route = urlRoutes[location] || urlRoutes[404];
 let html = await fetch(route.template).then((response) => response.text());
document.getElementById("content").innerHTML = html;
}
window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();