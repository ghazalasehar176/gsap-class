function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splitText = h1Text.split("")
    // console.log(splitText)

    var halfVal = splitText.length/2
    // console.log(halfVal)

    var clutter = ""
    splitText.forEach(function (val,idx) {
        // console.log(idx)

        if(idx<halfVal){
            // clutter = clutter + val
            clutter += `<span class = "a">${val}</span>`
        }
        else{
             // clutter = clutter + val
             clutter += `<span class = "b">${val}</span>`
        }
       
    })

    h1.innerHTML = clutter
    // console.log(clutter)
}

breakTheText()


gsap.from(".a", {
        y: 80,
        duration: 0.6,
        delay: 0.5,
        opacity:0,
        stagger:0.15,
})

gsap.from(".b", {
        y: 80,
        duration: 0.6,
        delay: 0.5,
        opacity:0,
        stagger:-0.15,
})