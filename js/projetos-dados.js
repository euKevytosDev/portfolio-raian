/*
  Lista única de projetos — usada na home (cards) e na página de detalhe.
  Ao adicionar um projeto novo, altere só este arquivo.
  Ordem: projetos com backend Java/Spring primeiro.
*/
const PROJETOS = [
  {
    id: "loven-surpresa",
    titulo: "Loven Surpresa",
    descricao: "SaaS com API Spring Boot — wizard, JWT, pagamento Asaas, webhook e página pública.",
    descricaoLonga: "Produto SaaS completo (somosloven.com.br) para criar surpresas digitais. O back-end em Spring Boot 3 expõe API REST com autenticação JWT, checkout Pix/cartão via Asaas, webhook de confirmação, upload no Cloudinary e painel admin. Front em HTML, CSS e JavaScript. Foco do projeto: regras de negócio, integração de pagamento e persistência em PostgreSQL.",
    imagem: "img/projetos/img-loven.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Asaas", "JavaScript"],
    link: "https://somosloven.com.br/"
  },
  {
    id: "casamento",
    titulo: "RK Sites · Casamento",
    descricao: "API multi-tenant Spring Boot — RSVP, presentes Pix/cartão, JWT e isolamento por site.",
    descricaoLonga: "Plataforma SaaS de sites de casamento (Loven / RK Sites). No back-end, API REST multi-tenant em Spring Boot + PostgreSQL (Neon): isolamento por site via X-Site-Id, JWT no admin, upload (Cloudinary) e fluxo de assinatura. Front mobile-first com RSVP, galeria e lista de presentes. O diferencial técnico está no modelo multi-tenant e nas regras de negócio no servidor.",
    imagem: "img/projetos/img-casamento.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JavaScript"],
    link: "https://casamento.somosloven.com.br/"
  },
  {
    id: "barberini",
    titulo: "Barberini Barbearia",
    descricao: "API Spring Boot de agendamento — serviços, barbeiros, slots e painel do dono.",
    descricaoLonga: "Sistema de agendamento para barbearia. A API Spring Boot grava horários, sincroniza agenda, gera link pro Google Calendar e alimenta o painel do dono (CRUD de barbeiros/serviços, bloqueios e lista). Front mobile-first em HTML/CSS/JS; back-end com seed de dados e regras de disponibilidade. Publicado no GitHub Pages com API na Render.",
    imagem: "img/projetos/img-barberini.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JavaScript"],
    link: "https://eukevytosdev.github.io/Barberini/"
  },
  {
    id: "pelada-oficial",
    titulo: "Pelada Oficial",
    descricao: "Backend Spring Boot pra pelada — autenticação, sorteio, placar e súmula.",
    descricaoLonga: "Sistema SaaS mobile-first para organizar pelada. O back-end Spring Boot cuida de autenticação, persistência e regras do jogo (vitória 3 pts, empate 1, derrota 0). Front em HTML/CSS/JS: jogadores com nível, times equilibrados, gols/cartões ao vivo, súmula em PDF e WhatsApp. Pensado pra uso no celular durante o jogo.",
    imagem: "img/projetos/img-pelada.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JavaScript"],
    link: "https://eukevytosdev.github.io/pelada-oficial/"
  },
  {
    id: "gestor-estoque",
    titulo: "Gestor de Estoque · API",
    descricao: "API REST em Java + Spring Boot — CRUD de produtos com JPA e PostgreSQL.",
    descricaoLonga: "Back-end de estudo focado em API REST de verdade: entidade Produto, repository JPA, controller REST e PostgreSQL. Endpoints GET/POST/DELETE de produtos (nome, preço e quantidade). Stack Java 17, Spring Boot, Spring Data JPA e Maven — projeto enxuto pra praticar o caminho JSON → serviço → banco, sem overengineering.",
    imagem: "img/projetos/img-gestor-estoque.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Maven"],
    link: "https://github.com/euKevytosDev/gestor-estoque-backend"
  },
  {
    id: "dashboard-admin",
    titulo: "Dashboard Admin",
    descricao: "API Spring Boot com JWT + painel de métricas, filtros e gestão de status.",
    descricaoLonga: "Dashboard para centralizar indicadores e operações. No back-end, API REST em Spring Boot com PostgreSQL, autenticação JWT e endpoints de listagem, filtros e atualização de status. No front, interface em React com cards, tabelas e gráficos. Foco em usabilidade e um back-end organizado para uso diário.",
    imagem: "img/projetos/img-dashboard.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JWT", "React"],
    link: "#"
  },
  {
    id: "mak-embreagens",
    titulo: "MAK Embreagens",
    descricao: "Landing page dark theme para oficina de embreagens, com foco em conversão e WhatsApp.",
    descricaoLonga: "Site institucional para a MAK Embreagens (Amazonas, Contagem-MG). Layout dark com identidade em laranja, hero com carrossel, diferenciais, serviços, mapa e CTAs para WhatsApp. Mobile-first em HTML, CSS e JavaScript — complemento visual aos sistemas backend do portfólio.",
    imagem: "img/projetos/img-mak-embreagens.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/mak-embreagens/"
  },
  {
    id: "padaria-braga",
    titulo: "Padaria Braga",
    descricao: "Landing page editorial premium com grid bento, marquee e avaliações estilo Google.",
    descricaoLonga: "Site institucional para a Padaria Braga (bairro Industrial, Contagem-MG). Layout editorial premium com hero assimétrico, tipografia Cormorant Garamond + Outfit, grid bento, banner full-bleed e depoimentos. HTML, CSS e JavaScript puro — mobile-first.",
    imagem: "img/projetos/img-padariabraga2.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/padaria-braga-landing/"
  },
  {
    id: "padaria-lider",
    titulo: "Padaria Líder",
    descricao: "Landing page mobile-first com vitrine e contato via WhatsApp.",
    descricaoLonga: "Landing page freelancer para a Padaria Líder, mobile-first, com vitrine, contato e WhatsApp. CSS com variáveis, dados em config.js e JavaScript puro. Template depois reaproveitado na Padaria Braga.",
    imagem: "img/projetos/img-padarialider.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/padaria-esquina-landing/"
  }
];
