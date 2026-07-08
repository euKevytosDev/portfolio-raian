/*
  ============================================
  JAVASCRIPT DO PORTFÓLIO
  ============================================
  Menu mobile, cards de projetos e navegação ativa no scroll.
*/

// --- Elementos da página (pegamos uma vez e reutilizamos) ---
const botaoMenu = document.querySelector("#menu-toggle");
const listaMenu = document.querySelector("#nav-lista");
const linksMenu = document.querySelectorAll(".nav-link");
const grid = document.querySelector("#projetos-grid");
const secoes = document.querySelectorAll("section");

// --- MENU MOBILE: abre e fecha com o hambúrguer ---
function abrirMenu() {
  listaMenu.classList.toggle("ativo");
}

botaoMenu.addEventListener("click", abrirMenu);

// Fecha o menu ao clicar em qualquer link (útil no celular)
linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    listaMenu.classList.remove("ativo");
  });
});

// --- PROJETOS: lista de dados + geração dos cards ---
const projetos = [
  {
    id: "casamento",
    titulo: "Rafaella & Kevin",
    descricao: "Site de casamento completo com confirmação de presença e lista de presentes.",
    descricaoLonga: "Texto maior explicando o projeto, o que vc fez e o que aprendeu",
    imagem: "img/projetos/casamento.png", // eu vou por deps 
    tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot"],
    link: "https://eukevytosdev.github.io/site-casamento/"
  },
  {
    id: "padaria-lider",
    titulo: "Padaria Líder",
    descricao: "Landing page mobile-first com vitrine e contato via WhatsApp.",
    descricaoLonga: "Texto maior explicando o projeto, o que vc fez e o que aprendeu",
    imagem: "img/projetos/casamento.png", // eu vou por deps 
    tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot"],
    link: "https://eukevytosdev.github.io/padaria-esquina-landing/"
  }
];

grid.innerHTML = "";

projetos.forEach(function (projeto) {
  const card = `
    <div class="projeto-card">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="projeto.html?id=${projeto.id}">Ver projeto</a>
    </div>
  `;
  grid.innerHTML += card;
});

// --- NAVEGAÇÃO ATIVA: destaca o link da seção visível ---
function destacarLinkAtivo() {
  const posicaoScroll = window.scrollY + 150;

  secoes.forEach(function (secao) {
    const topoSecao = secao.offsetTop;
    const alturaSecao = secao.offsetHeight;
    const idSecao = secao.getAttribute("id");

    if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
      linksMenu.forEach(function (link) {
        link.classList.remove("ativo");
        if (link.getAttribute("href") === "#" + idSecao) {
          link.classList.add("ativo");
        }
      });
    }
  });
}

window.addEventListener("scroll", destacarLinkAtivo);
destacarLinkAtivo(); // roda ao carregar a página também
