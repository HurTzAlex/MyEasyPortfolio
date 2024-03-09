// Images Slideshow PNT-Design
function currentDivCT(n) {
    showDivsCT(slideIndex = n);
}
function showDivsCT(n) {
    var i;
    var x = document.getElementsByClassName("mySlides-CT");
    var dots = document.getElementsByClassName("CT");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}


// Images Slideshow Currency Converter
function currentDivCC(n) {
    showDivsCC(slideIndex = n);
}
function showDivsCC(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-CC");
  var dots = document.getElementsByClassName("CC");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


// Images Slideshow QRCode Generator
function currentDivQR(n) {
    showDivsQR(slideIndex = n);
}
function showDivsQR(n) {
    var i;
    var x = document.getElementsByClassName("mySlides-QR");
    var dots = document.getElementsByClassName("QR");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
};


// Moving Text BornToDev
var typed = new Typed('.btd1', {
    strings: ['Complete Python3 Programming By BornToDev',
    'Complete Python3 Programming By BornToDev',
    'Complete Python3 Programming By BornToDev',
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

var typed = new Typed('.btd2', {
    strings: ['ChatGPT for Developers By BornToDev',
    'ChatGPT for Developers By BornToDev',
    'ChatGPT for Developers By BornToDev',
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

var typed = new Typed('.btd3', {
    strings: ['Web Scraping with Python By BornToDev',
    'Web Scraping with Python By BornToDev',
    'Web Scraping with Python By BornToDev',
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});


// KMITL
var typed = new Typed('.kmitl', {
    strings: ['Python Programming By KMITL',
    'Python Programming By KMITL',
    'Python Programming By KMITL'
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

var typed = new Typed('.kmitl2', {
    strings: ['Fun with Data Science By KMITL',
    'Fun with Data Science By KMITL',
    'Fun with Data Science By KMITL'
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});


// TDGA
var typed = new Typed('.tdga', {
    strings: ['Awesome UX/UI design By TDGA / DGA',
    'Awesome UX/UI design By TDGA / DGA',
    'Awesome UX/UI design By TDGA / DGA'
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Thai Mooc
var typed = new Typed('.th_moc', {
    strings: ['การสร้างหน้าเว็บเบื้องต้นด้วย Html & Css',
    'การสร้างหน้าเว็บเบื้องต้นด้วย Html & Css',
    'การสร้างหน้าเว็บเบื้องต้นด้วย Html & Css',
],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});