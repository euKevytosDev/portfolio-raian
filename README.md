# Portfólio — Raian Kevin

Meu site de portfólio em HTML, CSS e JavaScript puro. Usei pra estudar JS na prática e, ao mesmo tempo, ter um lugar pra mostrar o que venho construindo.

Domínio planejado: **raiandev.com.br**

## Demo

- Repo: https://github.com/euKevytosDev/portfolio-raian  
- GitHub Pages: ative em Settings → Pages → branch `main` (se ainda não estiver no ar)

## Ideia do projeto

Layout escuro, tipografia limpa, mobile-first. Nada de framework — a proposta era entender o básico bem feito: menu, scroll, gerar cards a partir de dados.

Os projetos listados na página vêm de um array no JS. Assim eu adiciono ou tiro um trabalho sem ficar copiando HTML.

## Stack

HTML5 · CSS3 (variáveis + responsivo) · JavaScript vanilla

## O que tem hoje

- Hero com apresentação e CTA de contato  
- Menu hambúrguer no celular (fecha ao clicar no link)  
- Cards de projetos montados com `forEach`  
- Header fixo ao rolar  

## Pastas

```text
portfolio-raian/
├── index.html
├── css/
│   ├── variaveis.css   # cores, fontes, espaçamento
│   └── style.css
├── js/
│   └── script.js       # menu + lista de projetos
└── img/
    ├── perfil/
    └── projetos/
```

## JS que aparece no código

- Seleção de elementos (`querySelector` / `querySelectorAll`)
- Eventos de clique no menu
- `classList` pra abrir/fechar o drawer
- Array de objetos + `forEach` + template string pra gerar os cards

Fui montando por etapas (estrutura → hero → menu → cards → polimento). Ainda quero página de detalhe do projeto (`projeto.html?id=...`), foto no hero e ícones das techs.

## Rodar local

```bash
git clone https://github.com/euKevytosDev/portfolio-raian.git
```

Abre o `index.html` ou usa Live Server. No celular: F12 → modo responsivo.

## Outros projetos no GitHub

| Projeto | Repo |
|---------|------|
| Site de casamento | [site-casamento](https://github.com/euKevytosDev/site-casamento) |
| Padaria Líder | [padaria-esquina-landing](https://github.com/euKevytosDev/padaria-esquina-landing) |
| Padaria Braga | [padaria-braga-landing](https://github.com/euKevytosDev/padaria-braga-landing) |
| MAK Embreagens | [mak-embreagens](https://github.com/euKevytosDev/mak-embreagens) |
| Gestor de estoque (API) | [gestor-estoque-backend](https://github.com/euKevytosDev/gestor-estoque-backend) |
| Gestor de estoque (front) | [gestor-estoque-frontend](https://github.com/euKevytosDev/gestor-estoque-frontend) |

## Sobre mim

Raian Kevin — estudante de ADS (4º semestre), Full Stack em formação.

GitHub: [@euKevytosDev](https://github.com/euKevytosDev)
