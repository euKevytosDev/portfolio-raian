/*
  Lista única de projetos — usada na home (cards) e na página de detalhe.
  Ao adicionar um projeto novo, altere só este arquivo.
*/
const PROJETOS = [
  {
    id: "casamento",
    titulo: "RK Sites · Casamento",
    descricao: "Plataforma SaaS para sites de casamento — RSVP, presentes via Pix/cartão e painel admin multi-tenant.",
    descricaoLonga: "O que começou como site para o casamento de Rafaella e Kevin evoluiu para uma plataforma SaaS completa (RK Sites). Cada casal recebe um site mobile-first personalizável, com convite animado, galeria, confirmação de presença em família e lista de presentes com Pix ou cartão. No back-end, API REST multi-tenant em Spring Boot + PostgreSQL (Neon): isolamento por site via X-Site-Id, JWT no admin, upload de imagens (Cloudinary) e fluxo de assinatura. Painel admin com visual SaaS para gerenciar presenças, presentes e configurações — pronto para escalar novos casamentos no mesmo servidor.",
    imagem: "img/projetos/img-casamento.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot", "PostgreSQL", "JWT"],
    link: "https://rafaekevin.com.br/"
  },
  {
    id: "pelada-oficial",
    titulo: "Pelada Oficial",
    descricao: "App mobile-first para organizar pelada: login, sorteio de times, placar ao vivo e súmula em PDF.",
    descricaoLonga: "Sistema web mobile-first para controlar pelada entre amigos com conta própria (SaaS). O usuário cadastra jogadores com nível de estrelas, sorteia times equilibrados, marca gols e cartões ao vivo e acompanha a classificação até encerrar a rodada. Inclui continuidade de pelada em andamento, geração de súmula (PDF/planilha), compartilhamento via WhatsApp e modo colar planilha. Front-end em HTML, CSS e JavaScript puro; back-end Spring Boot com autenticação, persistência de dados e regras do jogo (vitória 3 pts, empate 1, derrota 0). Pensado para uso no celular durante o jogo.",
    imagem: "img/projetos/img-pelada.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot", "PostgreSQL"],
    link: "https://eukevytosdev.github.io/pelada-oficial/"
  },
  {
    id: "mak-embreagens",
    titulo: "MAK Embreagens",
    descricao: "Landing page dark theme para oficina de embreagens, com foco em conversão e WhatsApp.",
    descricaoLonga: "Site institucional desenvolvido para a MAK Embreagens (Amazonas, Contagem-MG), oficina com mais de 17 anos de mercado. Layout dark com identidade em laranja, hero com carrossel de fachada, carrossel de montadoras, diferenciais, serviços, mapa e CTAs diretos para WhatsApp e ligação. Mobile-first, CSS com variáveis e JavaScript puro — pensado para gerar leads e facilitar o contato do cliente.",
    imagem: "img/projetos/img-mak-embreagens.png",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://eukevytosdev.github.io/mak-embreagens/"
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
