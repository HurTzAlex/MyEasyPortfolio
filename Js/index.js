// Nav Bar
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});


// Welcome Message
var typed = new Typed('.multiple', {
    strings: [
        'This is Alex&#8217;s Website.',
        'I hope you enjoy my site.',
        'Thx for watching!'
    ],

    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,

});