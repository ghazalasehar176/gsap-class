gsap.from("#page1 #box" , {
     scale:0,
     duration:2,
     delay:1,
     rotate:360,

})
gsap.from("#page2 #box" , {
     scale:0,
     duration:2,
     delay:1,
     rotate:360,
     scrollTrigger:{
        trigger: "#page2 box",
        scroller: "body" ,
        // markers:true,
     }
     
})


gsap.from("#page2 h1" , {
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller:"body",
        start:"top 50%",
    }

})
gsap.from("#page2 h2" , {
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger: "#page2 h2",
        scroller:"body",
        start:"top 50%",
    }
})


gsap.from("#page3 #box1" , {
     scale:0,
     opacity:0,
     duration:2,
     delay:1,
     rotate:360,
     scrollTrigger:{
        trigger: "#page3 #box1",
        scroller: "body" ,
        // markers:true,
        start:"top 50%",
        end: "top 30%",
        // scrub:true,
        scrub:5
     }
     
})


// for expertices word
gsap.to("#page4 h1" ,{
    transform:"translateX(-100%)",
    delay:1,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4",
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true,


    }
})