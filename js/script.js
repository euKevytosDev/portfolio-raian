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
    descricaoLonga: "Site completo para o casamento de Rafaella e Kevin, pensado para os convidados acessarem pelo celular. No front-end, desenvolvi a experiência do convite animado, galeria de fotos, confirmação de presença em família e lista de presentes com reserva online. No back-end, criei uma API REST em Spring Boot com PostgreSQL (Neon), autenticação JWT para o painel admin e deploy na Render. Foi o projeto que mais me fez evoluir em JavaScript com fetch e integração com API.",
    imagem: "img/projetos/img-casamento.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot", "PostgreSQL"],
    link: "https://eukevytosdev.github.io/site-casamento/"
  },
  {
    id: "padaria-lider",
    titulo: "Padaria Líder",
    descricao: "Landing page mobile-first com vitrine e contato via WhatsApp.",
    descricaoLonga: "Landing page freelancer desenvolvida para a Padaria Líder, com foco total em mobile-first. O objetivo era dar presença digital à padaria com vitrine de produtos, informações de contato e botão direto para WhatsApp. Organizei o projeto com CSS em variáveis, dados centralizados em config.js e JavaScript puro para menu e interações. Este template depois foi reaproveitado na landing da Padaria Braga, mostrando que consigo escalar um projeto para outro cliente.",
    imagem: "img/projetos/img-padarialider.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/padaria-esquina-landing/"
  }
];

grid.innerHTML = "";

projetos.forEach(function (projeto) {
  const card = `
    <a class="projeto-card" href="projeto.html?id=${projeto.id}">
      <img src="${projeto.imagem}" alt="Preview do projeto ${projeto.titulo}" class="projeto-card-img">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    </a>
  `;
  grid.innerHTML += card;
});

// --- SKILLS: carrossel infinito ---
// Uma única <ul> com a sequência duplicada dentro dela.
// Assim o gap entre Git → HTML é igual ao gap entre todos os ícones (sem buraco no loop).

const skills = [
  { nome: "HTML5", logo: "img/skills/html5.svg" },
  { nome: "CSS3", logo: "img/skills/css3.svg" },
  { nome: "JavaScript", logo: "img/skills/javascript.svg" },
  { nome: "Java", logo: "img/skills/java.svg" },
  { nome: "Spring Boot", logo: "img/skills/spring.svg" },
  { nome: "PostgreSQL", logo: "img/skills/postgresql.svg" },
  { nome: "React", logo: "img/skills/react.svg" },
  { nome: "Git", logo: "img/skills/git.svg" }
];

const faixaSkills = document.querySelector("#skills-faixa");

function montarItemSkill(skill, ehCopia) {
  const aria = ehCopia ? ' aria-hidden="true"' : "";
  const alt = ehCopia ? "" : skill.nome;

  return `
    <li class="skill-item"${aria}>
      <img src="${skill.logo}" alt="${alt}" class="skill-logo" width="40" height="40" loading="lazy">
    </li>
  `;
}

function montarListaSkills() {
  let html = "";

  skills.forEach(function (skill) {
    html += montarItemSkill(skill, false);
  });

  skills.forEach(function (skill) {
    html += montarItemSkill(skill, true);
  });

  return html;
}

if (faixaSkills) {
  faixaSkills.innerHTML = `<ul class="skills-lista">${montarListaSkills()}</ul>`;
}

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
