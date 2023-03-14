
const menuClick = () => {

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    }

}


const scrollNabvar = () => {
    let sections = document.querySelectorAll("section");

    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove("active");
                    document.querySelector('header nav a[href*=' + id + ']').classList.add("active")
                });
            }
        });
        let header = document.querySelector("header");

        header.classList.toggle("sticky", window.scrollY > 100);


        const menuIcon = document.querySelector("#menu-icon");
        const navbar = document.querySelector(".navbar");


        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    };

}

const scrollRevealNew = () =>{
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal(".home-content, .heading", {origin: 'top'});
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", {origin: 'bottom'});
    ScrollReveal().reveal(".home-content h1, .about-img", {origin: 'left'});
    ScrollReveal().reveal(".home-content p, .about-content", {origin: 'right'});

}

const workTyped = () => {

    const typed = new Typed(".multiple-text" , {
        strings: ['Frontend Developer', 'Web full-stack'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


}

menuClick();
scrollNabvar();
scrollRevealNew();
workTyped();

