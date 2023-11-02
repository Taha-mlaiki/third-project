let body = document.querySelector("body")
let links = document.querySelector(".other-links");
let submenu = document.querySelector(".submenu");

links.addEventListener("click",function(){
    submenu.classList.toggle("showsub")
})



let up = document.querySelector(".scroll-up");




body.onscroll = function(){
    if(scrollY > 1000){
        
        up.style.right = "15px";
    }else if(scrollY<1000){
        up.style.right = "-50px";
        
    }
}

up.addEventListener("click" ,function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
// Our skills 

let skills = document.querySelector(".our-skills");

let myPrgress = document.querySelectorAll(".prog");
let myProgArr = Array.from(myPrgress)


window.onscroll = function (){
    if(window.scrollY >= skills.offsetTop ){
        myProgArr.forEach((prog)=>{
            prog.style.width  = prog.dataset.width ;
        })
        
    }
}

// status 

let staatus = document.querySelector(".stats");
let stat = document.querySelectorAll(".stats span");
let started = false ;

window.onscroll = function (){
    if(window.scrollY >= staatus.offsetTop - 100){
        if(!started){
            stat.forEach((e)=>startCount(e))
            started = true ;
        } 
        
    } 
}
function startCount(ele){
    let goal = ele.dataset.cnt;
    let count = setInterval(()=>{
        ele.textContent++;
        if(ele.textContent == goal){
            clearInterval(count)
        }
    },1000/goal)
}