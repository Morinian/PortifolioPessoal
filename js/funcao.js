function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileheader = document.querySelector('nav');
    if (menuMobile.classList.contains('open')) {
        menuMobileheader.classList.remove("fund");
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        menuMobileheader.classList.add("fund");
        document.querySelector('.icon').src = "../img/close.svg";
    }
}