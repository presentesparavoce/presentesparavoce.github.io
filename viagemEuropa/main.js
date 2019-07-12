scrollBack();

window.onload = function () {
    $("body").removeClass("preload");
}

for (let index = 1; index <= 14; index++) {
    document.querySelector(`#dia${index}`).onclick = () => {
        localStorage.setItem('currentScrollPoint', window.pageYOffset);
        window.location.href = `./dias/dia${index}.html`;
    }
}

function scrollBack() {
    let scrollHistory = localStorage.getItem('currentScrollPoint') || 0;
    window.scrollTo(0, scrollHistory);
}