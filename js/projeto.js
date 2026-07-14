const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const conteudoEl = document.querySelector("#projeto-conteudo");
const erroEl = document.querySelector("#projeto-erro");

const projetoSelecionado = PROJETOS.find(function (projeto) {
  return projeto.id === id;
});

function mostrarErro() {
  document.title = "Projeto não encontrado | Raian Kevin";
  conteudoEl.hidden = true;
  erroEl.hidden = false;
}

if (!projetoSelecionado) {
  mostrarErro();
} else {
  document.title = projetoSelecionado.titulo + " | Raian Kevin";
  document.querySelector("#projeto-titulo").textContent = projetoSelecionado.titulo;
  document.querySelector("#projeto-imagem").src = projetoSelecionado.imagem;
  document.querySelector("#projeto-imagem").alt = "Preview do projeto " + projetoSelecionado.titulo;
  document.querySelector("#projeto-descricao").textContent = projetoSelecionado.descricaoLonga;

  const linkEl = document.querySelector("#projeto-link");
  const avisoLinkEl = document.querySelector("#projeto-aviso-link");
  const semDemoAoVivo = !projetoSelecionado.link || projetoSelecionado.link === "#";

  linkEl.hidden = false;

  if (semDemoAoVivo) {
    linkEl.href = "#";
    linkEl.removeAttribute("target");
    linkEl.addEventListener("click", function (evento) {
      evento.preventDefault();
      avisoLinkEl.hidden = false;
      avisoLinkEl.textContent =
        "Este projeto não está disponível para visualização em tempo real no momento.";
    });
  } else {
    linkEl.href = projetoSelecionado.link;
    linkEl.setAttribute("target", "_blank");
    avisoLinkEl.hidden = true;
  }

  const listaTecnologias = document.querySelector("#projeto-tecnologias");
  listaTecnologias.innerHTML = "";

  projetoSelecionado.tecnologias.forEach(function (tech) {
    listaTecnologias.innerHTML += "<li>" + tech + "</li>";
  });
}
