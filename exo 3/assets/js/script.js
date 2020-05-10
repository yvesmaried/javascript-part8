const pArray = document.querySelectorAll("p");

window.addEventListener("DOMContentLoaded", hideP);

function fadeIn(index, time) {
    pArray[index].style.transition = time + "s";
    pArray[index].style.opacity = 1;
}

function fadeOut(index, time) {
    pArray[index].style.transition = time + "s";
    pArray[index].style.opacity = 0;
}

function hideP() {
    for (i = 0; i < pArray.length; i++) {
        pArray[i].style.opacity = 0;
    }
}
window.addEventListener("scroll", function () {
    let domTop = document.documentElement.scrollTop;
    if (domTop > 0) {
        fadeIn(0, 2)
    }
    for (i = 0; i < 7; i++) {
        if (domTop > pArray[i].offsetTop) {
            fadeIn((i + 1), 2)
            fadeOut(i, 2)
        }
    }
    for (i = 8; i < 12; i++) {
        if (domTop > pArray[7].offsetTop) {
            fadeIn(i, 2)
        }
    }
});