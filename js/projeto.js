const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

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

let projetoSelecionado = null;

projetos.forEach(function (projeto) {

    if (projeto.id === id) {
        projetoSelecionado = projeto;
    }
});

if (projetoSelecionado === null) {
    alert("Projeto não encontrado");
} else {
    document.querySelector("#projeto-titulo").textContent = projetoSelecionado.titulo;
    document.querySelector("#projeto-imagem").src = projetoSelecionado.imagem;
    document.querySelector("#projeto-descricao").textContent = projetoSelecionado.descricaoLonga;
    document.querySelector("#projeto-link").href = projetoSelecionado.link;

    const listaTecnologias = document.querySelector("#projeto-tecnologias");
    listaTecnologias.innerHTML = "";

    projetoSelecionado.tecnologias.forEach(function (tech) {
        const item = `<li>${tech}</li>`;
        listaTecnologias.innerHTML += item;
    });
}

