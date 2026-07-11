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
  document.querySelector("#projeto-link").href = projetoSelecionado.link;

  const listaTecnologias = document.querySelector("#projeto-tecnologias");
  listaTecnologias.innerHTML = "";

  projetoSelecionado.tecnologias.forEach(function (tech) {
    listaTecnologias.innerHTML += "<li>" + tech + "</li>";
  });
}
