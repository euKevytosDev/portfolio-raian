/*
  ============================================
  JAVASCRIPT DO PORTFÓLIO
  ============================================

  Este arquivo está vazio de propósito!

  Na Etapa 1, você vai escrever seu primeiro código aqui:
  - Como "achar" um elemento na página (querySelector)
  - Como reagir a um clique (addEventListener)

  Por enquanto, não tem nada — e está tudo certo. 👍
*/

// console.log é seu melhor amigo para testar JS:
// console.log("JavaScript carregou!");

const botaoContato = document.querySelector(".btn");

// 1. Pegar os elementos
const botaoMenu = document.querySelector("#menu-toggle");
const listaMenu = document.querySelector("#nav-lista");
const linksMenu = document.querySelectorAll(".nav-link");

// 2. Criar a função
function abrirMenu() {
  listaMenu.classList.toggle("ativo");
}
// 3. Conectar clique → função
botaoMenu.addEventListener("click", abrirMenu);

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    listaMenu.classList.remove("ativo");
  });
});






const grid = document.querySelector("#projetos-grid");

const projetos = [{
  titulo: "Rafaella & Kevin",
  descricao: "Site de casamento completo",
  link: "https://eukevytosdev.github.io/site-casamento/"},

 {titulo: "Padaria líder",
  descricao: "Landing page Vitrine Clean",
  link: "https://eukevytosdev.github.io/padaria-esquina-landing/"
}];

grid.innerHTML = "";  // apaga tudo (inclui o placeholder)

projetos.forEach(function(projeto) {
  const card = `
    <div class="projeto-card">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}">Ver projeto</a>
    </div>
  `;
  grid.innerHTML += card; // adiciona ESTE card no grid
});
