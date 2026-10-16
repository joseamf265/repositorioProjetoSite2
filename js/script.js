document.addEventListener
    ("DOMContentLoaded", () =>{
        const menuResponsivo = document.getElementById("menuResponsivo");
        const navMenu = document.getElementById("nav-menu");

        menuResponsivo.addEventListener("click", () =>{
            navMenu.classList.toggle("active");
        });

        const navLink = document.querySelectorAll(".nav-menu a");
        navLink.forEach((link) =>{
            link.addEventListener("click", () =>{
                
                navMenu.classList.remove("active")
            });
        });
        //  ESTRUTURA CARROSEL
        const slides = document. querySelectorAll(".carousel-slide");
        const dot = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        let slideAtual = 0;
        let slideIntervalo;

        function showSlide(index){
            slides.forEach((slide) =>
            slide.classList.remove("active"));
            dot.forEach((dots) =>
            dots.classList.remove("active"));

            slideAtual = (index + slides.length) % slides.length;

            slides[slideAtual].classList.add("active");
            
            dot[slideAtual].classList.add("active");
        }

        function nextSlide(){
            showSlide(slideAtual + 1);
        }
        function prevSlide(){
            showSlide(slideAtual - 1);
        }
        function startSlide(){
            slideIntervalo = setInterval(nextSlide, 5000);
        }
        function stopSlide(){
            clearInterval(slideIntervalo);
        }

        nextBtn.addEventListener("click", () =>{
            nextSlide();
            stopSlide();
            startSlide();
        });

        prevBtn.addEventListener("click",() =>{
            prevSlide();
            stopSlide();
            startSlide();
        });


        dot.forEach((dot)  =>{
             dot.addEventListener("click", (e) =>{
                const index = parseInt(e.target.getAttribute("data-index"));
                showSlide(index);
                stopSlide();
                startSlide();
            });
        });
    });//fechamento de evento carregar pagina
        startSlide();

        const contatoForm = document.getElementById("contatoForm");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");
        
        contatoForm.addEventListener("submit",(event) =>{
            event.preventDefault();
            let isValid = true
            if(name.value.trim().length < 3 ){
                showErro(name, "O nome deve ter no minimo três caracteres");
            }
        });


   