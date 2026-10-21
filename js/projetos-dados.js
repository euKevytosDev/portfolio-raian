/*
  Lista única de projetos — usada na home (cards) e na página de detalhe.
  Ao adicionar um projeto novo, altere só este arquivo.
  Ordem: produtos/SaaS com backend primeiro.
*/
const PROJETOS = [
  {
    id: "max-pedidos",
    titulo: "MaxPedidos",
    descricao: "SaaS de pedidos para o comércio de bairro — loja no celular, fila no painel e pagamento.",
    descricaoLonga: "Plataforma SaaS multi-tenant para padaria, açougue, lanchonete, hortifruti e mercadinho. Cada loja ganha o próprio link, catálogo, checkout (entrega ou retirada) e painel da fila. API REST em Spring Boot com JWT, isolamento por establishment_id, PostgreSQL + Flyway, quote/checkout recalculado no servidor, webhooks de pagamento, cupons, estoque e Cloudinary. Front em HTML, CSS e JavaScript. O cliente pede pelo link; a loja vê a fila, cobra e despacha — sem o cliente instalar app.",
    imagem: "img/projetos/img-maxpedidos.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JavaScript"],
    link: "https://eukevytosdev.github.io/folha-saas/"
  },
  {
    id: "cliqueplay",
    titulo: "CliquePlay",
    descricao: "Replay da quadra: um toque no botão e o lance dos últimos 30s aparece no celular.",
    descricaoLonga: "Produto para quadras e peladas: a câmera Intelbras manda o vídeo via RTSP, o servidor mantém um buffer contínuo e o POST /clip corta o MP4 dos últimos ~30 segundos. O card do lance abre no celular para assistir e baixar, sem precisar de conta. Stack Python (FastAPI/Uvicorn) + FFmpeg, com site e API no mesmo serviço. Conta opcional, favoritos e pedido de vídeo reservado já entram no fluxo; o domínio é cliqueplay.com.br.",
    imagem: "img/projetos/img-cliqueplay.jpg",
    tecnologias: ["Python", "FastAPI", "FFmpeg", "RTSP", "JavaScript"],
    link: "https://cliqueplay.com.br/"
  },
  {
    id: "casamento",
    titulo: "RK Sites · Casamento",
    descricao: "API multi-tenant Spring Boot — RSVP, presentes Pix/cartão, JWT e isolamento por site.",
    descricaoLonga: "Plataforma SaaS de sites de casamento (RK Sites). No back-end, API REST multi-tenant em Spring Boot + PostgreSQL (Neon): isolamento por site via X-Site-Id, JWT no admin, upload (Cloudinary) e fluxo de assinatura. Front mobile-first com RSVP, galeria e lista de presentes. O diferencial técnico está no modelo multi-tenant e nas regras de negócio no servidor.",
    imagem: "img/projetos/img-casamento.jpg",
    tecnologias: ["Java", "Spring Boot", "PostgreSQL", "JWT", "JavaScript"],
    link: "https://casamento.somosloven.com.br/"
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
