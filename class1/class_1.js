//GreenSock Animation Platform(gsap)


/* //start se end tak jany ky liye gsap.to()
gsap.to("#box1" , {
    x:1000,
    duration:2,
    delay:1,
})

/* gsap.to("#box2" , {
    x:500,
    y:500,
    duration:2,
    delay:1,
}) 

gsap.to("#box1" , {
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,//(for infinite use (-1) , 1.... )
    yoyo:true,
    backgroundColor: "yellow",//changecolor
    borderRadius: "50%",
    scale:2//if size small at the start then big at the end
})


gsap.to("h1" , {
    duration:2,
    delay:1,
    color:"red",
    opacity:0,
    stagger:1,
    y:30
})

*/



/* //end se start take ky liye gsap.from()
gsap.from("#box3" , {
    x:1000,
    duration:2,
    delay:1,
    rotate:180,
    backgroundColor: "lightblue",//changecolor
    borderRadius: "30%" ,
    scale:3, //if size big in the start then small in the end 

})
    
gsap.from("h2" , {
    duration:2,
    delay:1,
    opacity:0,
    y:30,
    stagger:0.3, //1,0.1 ,0,or more
})
    
*/






//box time with calculation
/* gsap.to("#box4" , {
    x:1100,
    duration:1.5,
    delay:1,
    rotate:360,
})
gsap.to("#box5" , {
    x:1100,
    duration:1.5,
    delay:2.5,
    rotate:360,
    backgroundColor: "purple",
})
gsap.to("#box6" , {
    x:1100,
    duration:1.5,
    delay:4,
    rotate:360,
    scale:0.5,
}) */




/* //timeline
var t1 = gsap.timeline()

t1.to("#box4" , {
    x:1200,
    delay:1,
    duration:1.5,
    rotate:360,
})
t1.to("#box5" , {
    x:1200 , 
    duration:1.5,
})
t1.to("#box6" , {
    x:1200,
    duration:1.5,
}) */


var tl =gsap.timeline()
tl.from("h4" , {
    y:-20,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.3,
})
