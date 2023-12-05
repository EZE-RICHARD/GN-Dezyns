
document.addEventListener("DOMContentLoaded", async ()=>{
  const {slideshow_img} = await import("./components/ads/slideshow_img/slideshow_img.js")
  slideshow_img()
})

const ads_illustration = document.querySelectorAll(".ads_ilustration");


ads_illustration.forEach(illustration =>{
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
})