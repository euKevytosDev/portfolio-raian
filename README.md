# Portfólio — Raian Kevin

Site de portfólio pessoal desenvolvido com **HTML, CSS e JavaScript puro** (vanilla), com foco em aprender JavaScript na prática enquanto construo uma presença profissional online.

> Domínio futuro planejado: **raiandev.com.br**

## Demo

- Repositório: https://github.com/euKevytosDev/portfolio-raian
- GitHub Pages: *(ativar em Settings → Pages → branch `main`)*

## Sobre o projeto

Este portfólio reúne minhas principais habilidades e projetos como desenvolvedor Full Stack em formação. O visual foi inspirado em portfólios profissionais modernos (layout escuro, tipografia limpa, responsivo).

O diferencial deste projeto é o **aprendizado progressivo**: cada funcionalidade em JavaScript foi construída em etapas, com conceitos pequenos e comentados no código.

## Stack

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das seções |
| CSS3 | Layout, variáveis, responsividade |
| JavaScript (vanilla) | Menu mobile, cards dinâmicos, interações |

## Funcionalidades

- **Hero** com apresentação e botão de contato
- **Menu responsivo** com hambúrguer no celular
- **Cards de projetos** gerados dinamicamente via `array` + `forEach`
- **Menu fecha** automaticamente ao clicar em um link (mobile)
- Header fixo no topo ao rolar a página

## Estrutura de pastas

```text
portfolio-raian/
├── index.html          # Página principal
├── css/
│   ├── variaveis.css   # Cores, fontes e espaçamentos
│   └── style.css       # Estilos e layout
├── js/
│   └── script.js       # Menu, projetos e interações
├── img/
│   ├── perfil/         # Fotos pessoais
│   └── projetos/       # Prints dos projetos
└── README.md
```

## Conceitos de JavaScript aplicados

| Conceito | Onde é usado |
|---|---|
| `querySelector` / `querySelectorAll` | Selecionar botões, menu e grid |
| `addEventListener` | Cliques no menu e nos links |
| `function` | Abrir/fechar menu |
| `classList.toggle` / `remove` | Mostrar/esconder menu mobile |
| `array` + `objeto` | Lista de projetos |
| `forEach` | Gerar cards na tela |
| `innerHTML` | Inserir HTML dinamicamente |
| Template strings | Montar cards com `${}` |

## Etapas do desenvolvimento

- [x] Etapa 0 — Estrutura base (HTML + CSS variáveis)
- [x] Etapa 1 — Hero estilizado + primeiro JavaScript
- [x] Etapa 2 — Menu mobile (funções do zero)
- [x] Etapa 3 — Cards de projetos (array + forEach)
- [x] Etapa 4 — Menu fecha ao clicar em link + destaque no scroll
- [x] Etapa 5 — Links reais de contato
- [x] Etapa 6 — Polimento visual (Skills, Sobre, footer)

### Próximas etapas (planejado)

- [ ] **Etapa 7** — Página de detalhes do projeto (print + descrição + botão "Ver ao vivo")
  - Card abre `projeto.html?id=casamento` dentro do portfólio
  - JS novo: `URLSearchParams` para ler o `id` da URL
- [ ] **Etapa 8** — Avatar/foto no Hero
- [ ] **Etapa 9** — Ícones das tecnologias (HTML, CSS, JS, Java…)
- [ ] **Etapa 10** — Visual premium (formas no fundo, barra social fixa)

> Domínio futuro: **raiandev.com.br**

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/euKevytosDev/portfolio-raian.git
   ```
2. Abra `index.html` no navegador **ou** use a extensão **Live Server** no Cursor/VS Code.
3. Para testar o menu mobile: F12 → modo celular (Cmd+Shift+M no Mac).

## Projetos relacionados

| Projeto | Repositório |
|---|---|
| Site de casamento | [site-casamento](https://github.com/euKevytosDev/site-casamento) |
| Landing Padaria Líder | [padaria-esquina-landing](https://github.com/euKevytosDev/padaria-esquina-landing) |
| Landing Padaria Braga | [padaria-braga-landing](https://github.com/euKevytosDev/padaria-braga-landing) |
| Landing MAK Embreagens | [mak-embreagens](https://github.com/euKevytosDev/mak-embreagens) |
| Gestor de estoque (API) | [gestor-estoque-backend](https://github.com/euKevytosDev/gestor-estoque-backend) |
| Gestor de estoque (front) | [gestor-estoque-frontend](https://github.com/euKevytosDev/gestor-estoque-frontend) |

## Autor

**Raian Kevin** — Estudante de ADS (4º semestre), Full Stack Developer em formação.

- GitHub: [@euKevytosDev](https://github.com/euKevytosDev)
