const menuBurguer = document.querySelector(".menu-burguer");
const iconClose = document.querySelector(".icon-close");
const containerMobile = document.querySelector(".container-mobile");
const sectionMobile = document.querySelector(".section-mobile");

const imagens = document.querySelectorAll(".imagem-projeto");

function abrirMenuMobile() {
  containerMobile.classList.add("active");
  menuBurguer.classList.add("disabled");
  iconClose.classList.remove("disabled");
  sectionMobile.classList.remove("disabled");
}
function fecharMenuMobile() {
  containerMobile.classList.remove("active");
  menuBurguer.classList.remove("disabled");
  iconClose.classList.add("disabled");
  sectionMobile.classList.add("disabled");
}

function desativarMenuMobile(event) {
  if (event.target.innerWidth >= 650 || event.target === sectionMobile) {
    containerMobile.classList.remove("active");
    menuBurguer.classList.remove("disabled");
    iconClose.classList.add("disabled");
    sectionMobile.classList.add("disabled");
  }
}

const containerProjetos = document.querySelectorAll(".container-projeto");

function abrirContainerImagem({ target }) {
  target.previousElementSibling.classList.remove("disabled");
}
function fecharContainerImagem({ target }) {
  target.classList.add("disabled");
}

containerProjetos.forEach((containerProjeto) => {
  containerProjeto.addEventListener("mouseleave", fecharContainerImagem);
});

const menuItens = document.querySelectorAll(".header-lista a[href^='#']");

// function scrollSuave(event) {
//   event.preventDefault();
//   const element = event.target;
//   const id = element.getAttribute("href");
//   const section = document.querySelector(id).offsetTop;

//   window.scroll({
//     top: section,
//     behavior: "smooth",
//   });
// }

const sections = document.querySelectorAll("[data-anime]");

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  sections.forEach((section) => {
    if (windowTop > section.offsetTop) {
      section.classList.add("anime");
    } else {
      section.classList.remove("anime");
    }
  });
}

window.addEventListener("scroll", animeScroll);
menuBurguer.addEventListener("click", abrirMenuMobile);
iconClose.addEventListener("click", fecharMenuMobile);
window.addEventListener("resize", desativarMenuMobile);
window.addEventListener("click", desativarMenuMobile);

imagens.forEach((imagem) => {
  imagem.addEventListener("mouseenter", abrirContainerImagem);
});
menuItens.forEach((item) => {
  item.addEventListener("click", scrollSuave);
});
