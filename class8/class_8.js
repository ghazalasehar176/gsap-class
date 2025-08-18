function pageOne() {
    var tl = gsap.timeline()
    tl.from("nav h1 , nav h4 , nav button", {
        y: -40,
        delay: 1,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
    })

    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.3,
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.2,
    })

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
        x: 100
    }, "-=1")//-=1  means second phely hi start hojayega 

    tl.from(".sectionbuttom1 img", {
        opacity: 0,
        y: 30,
        stagger: 0.10,
        duration: 0.5,
    })


}
//function call
pageOne()


function pageTwo() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            scrub: 2
        }
    });


    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    })

    tl2.from(".elem.line-1.left", {
        x: -100,
        opacity: 0,
        duration: 1,
    }, "anim1")

    tl2.from(".elem.black.line1.right", {
        x: 100,
        opacity: 0,
        duration: 1,
    }, "anim1")

    tl2.from(".elem.black.line2.left", {
        x: -100,
        opacity: 0,
        duration: 1,
    }, "anim2")

    tl2.from(".elem.line-2.right", {
        x: 100,
        opacity: 0,
        duration: 1,
    }, "anim2")

}

//function call
pageTwo()