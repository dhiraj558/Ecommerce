let allscroll = document.querySelectorAll(".details");
const centerdiv = () => {

    let windowH = window.innerHeight;

    allscroll.forEach((items) => {

        let top = items.getBoundingClientRect().top;

        if(top<windowH){
            items.classList.add("active");
        }else if(top>windowH){
            items.classList.remove("active");

        }

    })
}
window.addEventListener("scroll", centerdiv);


let boxanimations = document.querySelectorAll(".hoverbox");

const centerbox = ()=>{
    let windowH = window.innerHeight;

    boxanimations.forEach((items)=>{
        let boxtop = items.getBoundingClientRect().top;

        if(boxtop<windowH){
            items.classList.add("center");

        }else if(boxtop>windowH){
            items.classList.remove("center");

        }

    })
}
centerbox();
window.addEventListener("scroll",centerbox)