# 🎮 Arena Pokémon - Batalha de Tipos

Um jogo interativo de batalha Pokémon desenvolvido para praticar manipulação de DOM, consumo de APIs externas (PokeAPI) e design responsivo. O projeto permite escolher um entre os 25 primeiros Pokémons da Pokédex e enfrentar a máquina em uma disputa baseada em vantagens de tipos.

## 🚀 Demonstração
O projeto está hospedado na Vercel: [https://projeto-pokemon-jet.vercel.app/]

## ✨ Funcionalidades
- **Consumo de API:** Busca dinâmica de dados (nomes, tipos e imagens) de 25 Pokémons via [PokeAPI](https://pokeapi.co/).
- **Aura Preview:** Animação fluida com aura branca pulsante ao selecionar um Pokémon na tela inicial.
- **Lógica de Batalha:** Sistema que calcula vitória, derrota ou empate baseado nos tipos (ex: Fogo vence Grama).
- **Efeito de Vitória:** O Pokémon vencedor ganha um destaque visual (escala aumentada e brilho dourado) com transições suaves.
- **Design Responsivo:** Interface totalmente adaptada para dispositivos móveis e desktop.
- **Tradução:** Tipos e nomes exibidos em Português para melhor experiência do usuário.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização avançada, animações com `keyframes`, `transitions` e Media Queries para responsividade.
- **JavaScript (ES6+):** Lógica do jogo, manipulação assíncrona com `fetch`, `async/await` e gerenciamento de estado da interface.

## 📦 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:SEU_USUARIO/pokemon-battle.git