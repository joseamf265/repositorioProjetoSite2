document.addEventListener("DOMContentLoaded", () =>{
    const menuResponsivo = document.getElementById("menuResponsio");
    const navMenu = Document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", () =>{
        navMenu.classList.toggle("active")
    })
});//fechamento de evento carregar pagina