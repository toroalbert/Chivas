window.sr = ScrollReveal();

sr.reveal('.redes', {
    duration: 2000,
    origin: 'bottom',
    distance: '-140px'
});
sr.reveal('.redes-f', {
    duration: 2000,
    origin: 'bottom',
    distance: '-140px'
});

sr.reveal('.anim-01', {
    duration: 2000,
    origin: 'top',
    distance: '-140px'
});
sr.reveal('.logo', {
    duration: 2000,
});
sr.reveal('.email', {
    duration: 7000,
});
sr.reveal('.anim-02', {
    duration: 2000,
    origin: 'left',
    distance: '-240px'
});
sr.reveal('.anim-03', {
    duration: 2000,
    origin: 'right',
    distance: '-240px'
});
sr.reveal('.anim-04', {
    duration: 2000,
    origin: 'top',
    distance: '-240px'
});

function copyToClickBoard() {
    var content = document.getElementById('contract').value;

    navigator.clipboard.writeText(content)
        .then(() => {
            document.getElementById("btncontrato").innerHTML = "Copiado!";
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })

}

//slider
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function() {
    Next();
});
btnLeft.addEventListener('click', function() {
    Prev();
});


//slider corrales


const sliderc = document.querySelector("#sliderc");
let slidercSection = document.querySelectorAll(".sliderc-section");
let slidercSectionLast = slidercSection[slidercSection.length - 1];

const btnLeftc = document.querySelector("#btnc-left");
const btnRightc = document.querySelector("#btnc-right");

sliderc.insertAdjacentElement('afterbegin', slidercSectionLast);

function Nextc() {
    let slidercSectionFirst = document.querySelectorAll(".sliderc-section")[0];
    sliderc.style.marginLeft = "-200%";
    sliderc.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderc.style.transition = "none";
        sliderc.insertAdjacentElement('beforeend', slidercSectionFirst);
        sliderc.style.marginLeft = "-100%";
    }, 500);
}

function Prevc() {
    let slidercSection = document.querySelectorAll(".sliderc-section");
    let slidercSectionLast = slidercSection[slidercSection.length - 1];
    sliderc.style.marginLeft = "0";
    sliderc.style.transition = "all 0.5s";
    setTimeout(function() {
        sliderc.style.transition = "none";
        sliderc.insertAdjacentElement('afterbegin', slidercSectionLast);
        sliderc.style.marginLeft = "-100%";
    }, 500);
}
btnRightc.addEventListener('click', function() {
    Nextc();
});
btnLeftc.addEventListener('click', function() {
    Prevc();
});

// calcular hora utc y cambiar el fondo
const date = new Date();
let hora = Number(date.getUTCHours());
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if (isMobile) {

    if (hora >= 6 && hora <= 16) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fondo-1.jpg')";
    } else if (hora >= 16 && hora <= 20) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fondo-2.jpg')";
    } else if (hora >= 20) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fondo-3.jpg')";
    } else if (hora <= 6) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fondo-3.jpg')";
    }
} else {

    if (hora >= 6 && hora <= 16) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fd-dia.jpg')";
    } else if (hora >= 16 && hora <= 20) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fd-tarde.jpg')";
    } else if (hora >= 20) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fd-noche.jpg')";
    } else if (hora <= 6) {
        document.getElementById("principal").style.backgroundImage = "url('./assets/img/fd-noche.jpg')";
    }
}




// add token to metamask

const tokenAddress = '0x9500e05ea02cc9cf3f904e83248b16e54e3e6e2e';
const tokenSymbol = 'CHIV';
const tokenDecimals = 18;
const tokenImage = 'https://s2.coinmarketcap.com/static/img/coins/64x64/13270.png';

async function addTokenFunction() {

    try {

        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('HelloWorld Coin has not been added');
        }
    } catch (error) {
        console.log(error);
    }
}

var ancho = Number(window.screen.availWidth);
if (ancho < 765) {
    var pie = document.getElementById('pie-redes');
    pie.classList.add('order-first');
}