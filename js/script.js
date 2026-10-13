document.addEventListener
    ("DOMContentLoaded", () =>{
        const menuResponsivo = document.
        getElementById("menuResponsio");
        const navMenu = Document.getElementById("nav-menu");

    menuResponsivo.addEventListener("click", () =>{
        navMenu.classList.toggle("active")

    });

    const navLink = document.
    querySelectorAll(".nav-menu a");
    navLink.forEach((link) =>{
        link.addEventListener("click", () =>{
            
            navMenu.classList.remove("active")
        });
    });
    //  ESTRUTURA CARROSEL
    const slides = document. querySelectorAll(".carrosel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach((slide) =>
        slide.classList.remove("active"));
        dot.forEach((dots) =>
        dots.classList.remove("active"));

        slideAtual = (index + slides.length)
            % slides.length;

        slides[slideAtual].classList.add("active");
        dot[slideAtual].classList.add("active");
    }

});//fechamento de evento carregar pagina