//when web loaded
window.addEventListener("load", () => {
    console.log("web loaded")
    setTimeout(() => {
        mainCol_title_transition.classList.remove("mainCol_title_transition__defaultFromLeft")
        mainCol_title_transition.classList.add("mainCol_title_transition__toRightFadeIn")
        setTimeout(() => {
            mainCol_title.classList.remove("mainCol_title__invisible")
            mainCol_title.classList.add("mainCol_title__visible")
            mainCol_title_transition.classList.remove("mainCol_title_transition__toRightFadeIn")
            mainCol_title_transition.classList.add("mainCol_title_transition__toRightFadeOut")
        }, 150)
    }, 500)
})

