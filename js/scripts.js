AOS.init({
    once: true,
    disabled: 'mobile'
});

let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500
});
function updateProjectImg() {
    if (window.innerWidth >= 600) {
        document.querySelector(".work-dr").src = "/img/dr1.png"
        document.querySelector(".work-fp").src = "/img/fp1.png"
    }
    if (window.innerWidth < 600 && window.innerWidth >= 400) {
        document.querySelector(".work-dr").src = "/img/dr2.png"
        document.querySelector(".work-fp").src = "/img/fp2.png"
    }
    if (window.innerWidth < 400) {
        document.querySelector(".work-dr").src = "/img/dr3.png"
        document.querySelector(".work-fp").src = "/img/fp3.png"
    }
}

updateProjectImg()

window.addEventListener("resize", () => {
    updateProjectImg()
})