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
                isValid = false;
            }
            //verificar se campo e-mail é valido
            if(isEmailValid(email.value.trim())){
                showErro(email,"Insira um e-mail válido");
                isValid = false;
            }
            //validação do campo mensagem (minimo 10 caracteres)
            if(mensagem.value.trim().length < 10 ){
                showErro(mensagem, "O nome deve ter no minimo 10 caracteres");
                isValid = false;
            }
            //verificar se campo e-mail é valido
            if(isEmailValid(mensagem.value.trim())){
                showErro(mensagem,"o campo deve estar certo");
                isValid = false;
                       
            }
            
            if(isValid){
                claearError();
                alert("Mensagem enviado com sucesso");
                contatoForm,reset();
            }
        });
        function isEmailValid (email)
        {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/
            return emailRegex.text(email);
        }

        function showErro(inputElement, mensagem)
        {
            const formgroup = inputElement.parentElement;
            clearFieldError(inputElement);
            const erroMensagem = document.createElement("small");
            erroMensagem.className = "errpr-text";
            erroMensagem.innerText = mensagem;
            formgroup.appendChild(erroMensagem);
        }
    });//fechamento de evento carregar pagina

   