const traduçãoTipos = {
    fire: 'Fogo', water: 'Água', grass: 'Grama', bug: 'Inseto',
    normal: 'Normal', poison: 'Veneno', electric: 'Elétrico', ground: 'Terra',
    fairy: 'Fada', psychic: 'Psíquico', flying: 'Voador', fighting: 'Lutador',
    rock: 'Pedra', steel: 'Aço', ice: 'Gelo', ghost: 'Fantasma', dragon: 'Dragão'
};

const vantagens = {
    fire: 'grass', water: 'fire', grass: 'water', electric: 'water',
    bug: 'grass', poison: 'fairy', ground: 'fire', flying: 'bug',
    fighting: 'normal', psychic: 'poison'
};

let todosPokemons = {};

async function carregarPokemons() {
    const select = document.getElementById('escolhaUsuario');
    select.innerHTML = '<option value="" disabled selected>Carregando Pokémons...</option>';

    try {
        for (let i = 1; i <= 25; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            const nomeIngles = data.name;
            const nomeFormatado = nomeIngles.charAt(0).toUpperCase() + nomeIngles.slice(1);
            const tipoIngles = data.types[0].type.name;
            const tipoTraduzido = traduçãoTipos[tipoIngles] || tipoIngles;

            todosPokemons[nomeIngles] = { 
                nome: nomeFormatado, tipo: tipoIngles, img: data.sprites.other['official-artwork'].front_default 
            };

            const option = document.createElement('option');
            option.value = nomeIngles;
            option.text = `${nomeFormatado} (${tipoTraduzido})`;
            select.appendChild(option);
        }
        select.options[0].text = "Escolha seu Pokémon...";
    } catch (error) {
        console.error("Erro ao carregar API", error);
        select.options[0].text = "Erro ao carregar.";
    }
}

function atualizarPreview() {
    let escolhaUser = document.getElementById('escolhaUsuario').value;
    let imgU = document.getElementById('imgUsuario');
    if (escolhaUser && todosPokemons[escolhaUser]) {
        imgU.src = todosPokemons[escolhaUser].img;
        imgU.style.display = 'block';
        imgU.classList.add('preview-pokemon');
        imgU.classList.remove('vencedor');
    }
}

function verificarChute() {
    let escolhaUser = document.getElementById('escolhaUsuario').value;
    if (!escolhaUser) return;

    let chaves = Object.keys(todosPokemons);
    let escolhaCPU = chaves[Math.floor(Math.random() * chaves.length)];

    let imgU = document.getElementById('imgUsuario');
    let imgM = document.getElementById('imgMaquina');
    let vs = document.getElementById('vs');

    imgU.classList.remove('preview-pokemon', 'vencedor');
    imgM.classList.remove('vencedor');

    imgM.src = todosPokemons[escolhaCPU].img;
    imgM.style.display = 'block';
    vs.style.display = 'block';

    const p1 = todosPokemons[escolhaUser];
    const p2 = todosPokemons[escolhaCPU];

    if (p1.tipo === p2.tipo) {
        document.getElementById('tituloPrincipal').innerHTML = "Empate de Tipos!";
    } else if (vantagens[p1.tipo] === p2.tipo) {
        document.getElementById('tituloPrincipal').innerHTML = `Venceu!`;
        imgU.classList.add('vencedor');
    } else {
        document.getElementById('tituloPrincipal').innerHTML = `Perdeu!`;
        imgM.classList.add('vencedor');
    }
    document.getElementById('reiniciar').disabled = false;
}

function reiniciarJogo() { location.reload(); }
carregarPokemons();