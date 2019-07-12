$("body").css('display', 'none');

let botaoNamo = document.querySelector('.botaoNamo');
let botaoNiver2019 = document.querySelector('.botaoNiver2019');
let botaoViagem = document.querySelector('.botaoViagem');

botaoNamo.onclick = () => {
    window.location.href = './dianamorados/index.html';
};

botaoNiver2019.onclick = () => {
    window.location.href = './niver2019/index.html';
};

botaoViagem.onclick = () => {
    window.location.href = './viagemEuropa/index.html';
};


window.onload = function() {
    $("body").fadeIn(2000);
}