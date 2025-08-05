// Scalable Vector Graphics (SVG)

var initialPath = 'M 10 100 Q 500 100 990 100'
var finalPath = 'M 10 100 Q 500 100 990 100'

var string = document.querySelector("#string");

//addEvnetListener to perform something movement
string.addEventListener("mousemove" , function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `;
    
    
    gsap.to("svg path" , {
        //attribute d ke anday initialpath ki value change hogi 
        attr:{d:initialPath},
        duration:0.3,
        //this ease key use gsap easing website by own choice
        ease: "power3.out",
    })
})


string.addEventListener("mouseleave" , function(){
    gsap.to("svg path" , {
        attr:{d:finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
})
 