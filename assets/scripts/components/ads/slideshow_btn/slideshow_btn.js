
export const slideshow_btn = (props)=>{

        const btn = props.querySelector("a");
        btn.classList.remove("hidden");

}

export const slideshow_btn_hide = (props)=>{

        const btn = props.querySelector("a");
        btn.classList.add("hidden");

}