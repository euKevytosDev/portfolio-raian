/*
  Lista única de projetos — usada na home (cards) e na página de detalhe.
  Ao adicionar um projeto novo, altere só este arquivo.
*/
const PROJETOS = [
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
  id: "padaria-braga",
  titulo: "Padaria Braga",
  descricao: "Landing page editorial premium com grid bento, marquee animado e avaliações estilo Google.",
  descricaoLonga: "Site institucional desenvolvido para a Padaria Braga (bairro Industrial, Contagem-MG). Layout editorial premium com hero assimétrico, tipografia Cormorant Garamond + Outfit, grid bento de produtos, banner full-bleed, depoimentos com nota Google e card de contato sobre mapa. Design distinto, pensado para portfólio — mobile-first, sem frameworks.",
  imagem: "img/projetos/img-padariabraga2.png",
  tecnologias: ["HTML", "CSS", "JavaScript"],
  link: "https://eukevytosdev.github.io/padaria-braga-landing/"
},
  {
    id: "padaria-lider",
    titulo: "Padaria Líder",
    descricao: "Landing page mobile-first com vitrine e contato via WhatsApp.",
    descricaoLonga: "Landing page freelancer desenvolvida para a Padaria Líder, com foco total em mobile-first. O objetivo era dar presença digital à padaria com vitrine de produtos, informações de contato e botão direto para WhatsApp. Organizei o projeto com CSS em variáveis, dados centralizados em config.js e JavaScript puro para menu e interações. Este template depois foi reaproveitado na landing da Padaria Braga, mostrando que consigo escalar um projeto para outro cliente.",
    imagem: "img/projetos/img-padarialider.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/padaria-esquina-landing/"
  },
  {
    id: "dashboard-admin",
    titulo: "Dashboard Admin",
    descricao: "Painel administrativo com métricas, gráficos e gestão de dados em tempo real.",
    descricaoLonga: "Dashboard profissional desenvolvido para centralizar indicadores e operações do dia a dia. No front-end, montei a interface com React, cards de métricas, tabelas filtráveis e gráficos interativos. No back-end, API REST em Spring Boot com PostgreSQL, autenticação JWT e endpoints para listagem, filtros e atualização de status. O foco foi usabilidade, performance e visual limpo para uso diário em desktop e tablet.",
    imagem: "img/projetos/img-dashboard.jpg",
    tecnologias: ["React", "JavaScript", "Spring Boot", "PostgreSQL"],
    link: "#"
  }
];
