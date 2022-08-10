let number = 0;
let app = null;
let div = null;
let div1 = document.createElement(div);
div1.innerHTML = "1";
let div2 = document.createElement(div);
div2.innerHTML = "2";
let div3 = document.createElement(div);
div3.innerHTML = "3";
let div4 = document.createElement(div);
div4.innerHTML = "4";
let div404 = document.createElement(div);
div404.innerHTML = "到别地儿找去这没有";

// hashRoute实现
// const routeTable = {
//     1: div1,
//     2: div2,
//     3: div3,
//     4: div4
// }
// window.addEventListener('hashchange',()=>{
//     app = document.querySelector(`#app`);
//     number = window.location.hash.substring(1);
//     if(number > 0) {
//         app.innerHTML = "";
//         app.appendChild((routeTable[number]|| div404));
        
//     };
    
// })


//history实现
const routeHistoryTable = {
    "/1": div1,
    "/2": div2,
    "/3": div3,
    "/4": div4
}

const allA = document.querySelectorAll("a.link")
// for(let a of allA){
//     a.addEventListener('click',(e)=>{
//         e.preventDefault();
//         const href = a.getAttribute("href");
//         window.history.pushState(null,`page${href}`,href);
//         app = document.querySelector(`#app`);
//         app.innerHTML = "";
//         app.appendChild((routeHistoryTable[href]|| div404));
//     })
// }

//memory实现
for(let a of allA){
    a.addEventListener('click',(e)=>{
        e.preventDefault();
        const href = a.getAttribute("href");
        app = document.querySelector(`#app`);
        window.localStorage.setItem("xxx",href);
        number = localStorage.getItem("xxx");
        app.innerHTML = "";
        app.appendChild((routeHistoryTable[number]|| div404));
    })
}

