
const loader = document.querySelector(".loader-container");
const page = document.querySelector("#main");
const menuBar = document.querySelector(".menu");
const slideNav = document.querySelector(".slide-nav");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const rightBtn2 = document.querySelector(".right-btn");
const leftBtn2 = document.querySelector(".left-btn");
const rightBtn3 = document.querySelector(".right-btn1");
const leftBtn3 = document.querySelector(".left-btn1");
const slide = document.querySelectorAll(".slider");
const cardSlide = document.querySelectorAll(".sliders");
const cardSlide1 = document.querySelectorAll(".slider1");
const magneto = document.querySelector(".btn");
const magtext = document.querySelector(".text");
const magneto1 = document.querySelector(".btn1");
const magtext1 = document.querySelector(".text1");
var counter = 0;

var tl = gsap.timeline();
tl.from(".bottom-content h1, .bottom-content h4",{
    y: "5vh",
    opacity : 0,
    scale: .8,
    duration: 1,
    delay: 3.1,
    stagger: 1
});

tl.to("#page2, #page3, #page4, #page5, #page6, #page7, #page8",{
    backgroundColor: "black",
    delay: 1,
    scrollTrigger:{
        trigger: "#page2",
        start: "top 40%",
        end: "bottom 90%",
        scrub : 1
    }
})

tl.from(".page2-content h4",{
    y: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page2",
        start: "top 70%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page2-tag h1",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page2",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page3-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page3",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page4-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page4",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page5-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page5",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page5-text h2",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: ".page5-text",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page6-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page6",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page7-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page7",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});
tl.from(".page8-content h4",{
    x: "-5vh",
    opacity: 0,
    ease: Power1,
    scrollTrigger:{
        trigger: "#page8",
        start: "top 90%",
        end: "bottom 80%",
        scrub : 1
    }
});

window.addEventListener("load", () => {
    setInterval(function () {
        loader.classList.add("hidden");
        page.classList.add("visible");
    }, 3000);
})
menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("open");
});

menuBar.addEventListener("click", () => {
    slideNav.classList.toggle("slide");
});

//  mouse move effect
const activateMagneto = function (e) {
    let box = magneto.getBoundingClientRect();
    const boxStrength = 40;
    const boxTextStrength = 80;
    const newX = ((e.clientX - box.left) / magneto.offsetWidth) - 0.5;
    const newY = ((e.clientY - box.top) / magneto.offsetHeight) - 0.5;

    gsap.to(magneto, {
        duration: 1,
        x: newX * boxStrength,
        y: newY * boxStrength,
        ease: Power4.easeOut
    });

    gsap.to(magtext, {
        duration: 1,
        x: newX * boxTextStrength,
        y: newY * boxTextStrength,
        ease: Power4.easeOut
    });
}
//  mouse leave effect 
const deactivate = (e) => {
  
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
    gsap.to(magtext, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
}

magneto.addEventListener("mousemove", activateMagneto);
magneto.addEventListener("mouseleave", deactivate);

const activateMagneto1 = function (e) {
    let box = magneto1.getBoundingClientRect();
    const boxStrength = 20;
    const boxTextStrength = 40;
    const newX = ((e.clientX - box.left) / magneto1.offsetWidth) - 0.5;
    const newY = ((e.clientY - box.top) / magneto1.offsetHeight) - 0.5;

    gsap.to(magneto1, {
        duration: 1,
        x: newX * boxStrength,
        y: newY * boxStrength,
        ease: Power4.easeOut
    });

    gsap.to(magtext1, {
        duration: 1,
        x: newX * boxTextStrength,
        y: newY * boxTextStrength,
        ease: Power4.easeOut
    });
}
//  mouse leave effect 
const deactivate1 = (e) => {
    //  we just need to position its default
    gsap.to(magneto1, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
    gsap.to(magtext1, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
}
// add some event listener
magneto1.addEventListener("mousemove", activateMagneto1);
magneto1.addEventListener("mouseleave", deactivate1);

slide.forEach(function (card, index) {
    card.style.left = `${index * 100}%`
});
const goNext2 = function () {
    slide.forEach(function (card) {
        card.style.transform = `translateX(-${counter * 100}%)`
    });
}
rightBtn.addEventListener("click", function () {
    counter++;
    goNext2();
    leftBtn.classList.add("visible");
    rightBtn.classList.add("visible");
});
leftBtn.addEventListener("click", function () {
    counter--;
    goNext2();
 
    leftBtn.classList.remove("visible");
    rightBtn.classList.remove("visible");
});

cardSlide.forEach(function (card, index) {
    card.style.left = `${index * 100}%`
});

rightBtn2.addEventListener("click", function () {
    counter++;
    goNext();
    if (counter == 1) {
        leftBtn2.classList.add("visible");
    }
    if (counter == 2) {
        counter = -1;
        rightBtn2.classList.add("visible");
    }
});
leftBtn2.addEventListener("click", function () {

    if (counter == -1) {
        counter = 2;
        rightBtn2.classList.remove("visible")
    }
    counter--;
    goNext();
    if (counter == 0) {
        leftBtn2.classList.remove("visible");
        rightBtn2.classList.remove("visible")
    }
});
const goNext = function () {
    cardSlide.forEach(function (card) {
        card.style.transform = `translateX(-${counter * 100}%)`
    });
}
// page7 js
cardSlide1.forEach(function (card, index) {
    card.style.left = `${index * 100}%`
});
rightBtn3.addEventListener("click", function () {
    console.log("click")
    counter++;
    goNext1();
    if (counter == 1) {
        leftBtn3.classList.add("visible");
    }
    if (counter == 2) {
        counter = -1;
        rightBtn3.classList.add("visible");
    }

});
leftBtn3.addEventListener("click", function () {

    if (counter == -1) {
        counter = 2;
        rightBtn3.classList.remove("visible")
    }
    counter--;
    goNext1();
    if (counter == 0) {
        leftBtn3.classList.remove("visible");
        rightBtn3.classList.remove("visible")
    }
});
const goNext1 = function () {
    cardSlide1.forEach(function (card) {
        card.style.transform = `translateX(-${counter * 100}%)`
    })
};