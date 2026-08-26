const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você costuma acompanhar o jogo do seu time?",
        alternativas: [
            {
                texto: "Assisto ao jogo inteiro e fico atento a cada lance.",
                afirmacao: "<b>Torcedor fanático</b> é o seu estilo! Você acompanha cada detalhe e não perde uma partida."
            },
            {
                texto: "Assisto quando posso e acompanho os principais momentos.",
                afirmacao: "<b>Torcedor tranquilo</b> combina com você. Você gosta de futebol, mas sem deixar de lado outras coisas."
            }
        ]
    },

    {
        enunciado: "O que você faz quando seu time marca um gol?",
        alternativas: [
            {
                texto: "Comemoro muito, grito e faço a festa!",
                afirmacao: "<b>Torcedor apaixonado</b>! Para você, gol é motivo para muita comemoração."
            },
            {
                texto: "Comemoro, mas tento manter a calma.",
                afirmacao: "<b>Torcedor equilibrado</b>! Você comemora, mas consegue controlar a emoção."
            }
        ]
    },

    {
        enunciado: "Seu time está perdendo por 1 a 0. O que você faz?",
        alternativas: [
            {
                texto: "Continuo acreditando até o último minuto.",
                afirmacao: "<b>Torcedor fiel</b>! Você nunca abandona seu time, mesmo nos momentos difíceis."
            },
            {
                texto: "Fico nervoso e começo a reclamar do time.",
                afirmacao: "<b>Torcedor exigente</b>! Você quer ver seu time sempre jogando bem e lutando pela vitória."
            }
        ]
    },

    {
        enunciado: "Como você acompanha as notícias do seu time?",
        alternativas: [
            {
                texto: "Procuro notícias, escalações, contratações e resultados todos os dias.",
                afirmacao: "<b>Torcedor informado</b>! Você gosta de saber tudo o que acontece com seu time."
            },
            {
                texto: "Vejo as notícias principalmente nos dias de jogo.",
                afirmacao: "<b>Torcedor casual</b>! Você acompanha seu time, mas não precisa saber de todas as novidades."
            }
        ]
    },

    {
        enunciado: "Quando seu time perde uma partida importante, como você reage?",
        alternativas: [
            {
                texto: "Fico chateado, mas continuo apoiando o time.",
                afirmacao: "<b>Torcedor fiel</b>! Para você, apoiar o time é importante principalmente nos momentos difíceis."
            },
            {
                texto: "Fico muito bravo e passo o resto do dia reclamando.",
                afirmacao: "<b>Torcedor apaixonado</b>! Você vive intensamente cada resultado do seu time."
            }
        ]
    },

    {
        enunciado: "Se pudesse assistir a uma partida do seu time em qualquer lugar, qual escolheria?",
        alternativas: [
            {
                texto: "No estádio, junto com a torcida.",
                afirmacao: "<b>Torcedor de arquibancada</b>! Você gosta da energia, dos cantos e da emoção de estar no estádio."
            },
            {
                texto: "Em casa, com amigos e bastante comida.",
                afirmacao: "<b>Torcedor de sofá</b>! Para você, assistir ao jogo em casa com amigos é uma ótima experiência."
            }
        ]
    }
];

let indiceAtual = 0;
let perguntaAtual;
let resultadoFinal = "";

function mostrarPergunta() {

    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    perguntaAtual = perguntas[indiceAtual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    mostrarAlternativas();
}

function mostrarAlternativas() {

    perguntaAtual.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function selecionarResposta(alternativaEscolhida) {

    resultadoFinal += alternativaEscolhida.afirmacao + " ";

    indiceAtual++;

    mostrarPergunta();
}

function mostrarResultado() {

    caixaPerguntas.textContent = "⚽ Descobrimos que tipo de torcedor você é!";

    textoResultado.innerHTML = resultadoFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.style.display = "block";
}

mostrarPergunta();
