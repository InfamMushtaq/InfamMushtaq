gsap.from("#box1",{
opacity:0,
duration:1,
x:200
})
gsap.from("#box2",{
    duration:2,
    rotate:720,
    opacity:0,
    y: -200,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"body",
        start:"top 30%",
        end:"top 10%",
        scrub:1,
    }
})
let initialPath= `M 0 200 Q 50 200 1000 200`
let finalPath
let string=document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
    path=`M 0 200 Q ${dets.x} ${dets.y} 1000 200`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.5,
        ease:"power1.out"
         
    })

})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:0.5,
        ease:"elastic.out(2,0.2)"
         
    })

})