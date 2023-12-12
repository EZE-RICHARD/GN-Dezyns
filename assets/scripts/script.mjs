/*  document.addEventListener("DOMContentLoaded", async ()=>{
  const {slideshow_img} = await import("./components/ads/slideshow_img/slideshow_img.js")
  slideshow_img()
})  */

/* const ads_illustration = document.querySelectorAll(".ads_ilustration"); */


/* ads_illustration.forEach(illustration =>{
  illustration.addEventListener("mouseover",async ()=>{
    const {slideshow_btn, slideshow_btn_hide} = await import("./components/ads/slideshow_btn/slideshow_btn.js")
    slideshow_btn(illustration)
  })
})

ads_illustration.forEach(illustration =>{
  illustration.addEventListener("mouseout",async ()=>{
    const {slideshow_btn, slideshow_btn_hide} = await import("./components/ads/slideshow_btn/slideshow_btn.js")
    slideshow_btn_hide(illustration)
  })
}) */


/* gsap.set('.cursor',{xPercent:-50, yPercent: -50})

let cursor = document.querySelector('.cursor')
let hand = document.querySelector('.hand')
let title = document.querySelector('.banner')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
})

title.addEventListener('mouseenter', () => {
    gsap.to(hand, 1, {
        scale: 1,
        opacity: 1,
        top: '-75px',
        left: '-75px',
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

title.addEventListener('mousemove', () => {
    gsap.to(hand, 1, {
        x: mouseX,
        y: mouseY
    })
})

title.addEventListener('mouseleave', () => {
    gsap.to(hand, 0.2, {
        scale: 0,
        opacity: 0,
        top: '10',
        left: '40',
        rotate: 45,
    })
}) */