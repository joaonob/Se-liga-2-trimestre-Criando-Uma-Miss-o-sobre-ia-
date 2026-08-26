const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você começa um novo projeto de programação, qual é a sua abordagem inicial?",
        alternativas: [
            {
                texto: "Planejo todos os detalhes antes de começar a programar.",
                afirmacao: "<b>Organização</b> é uma das suas principais características. Você gosta de planejar antes de agir."
            },
            {
                texto: "Começo a programar e vou ajustando minhas ideias durante o projeto.",
                afirmacao: "<b>Flexibilidade</b> combina com você. Você prefere aprender e adaptar suas ideias durante o desenvolvimento."
            }
        ]
    },

    {
        enunciado: "Como você costuma resolver um problema ou bug no seu código?",
        alternativas: [
            {
                texto: "Pesquiso bastante e tento encontrar a solução por conta própria.",
                afirmacao: "<b>Autonomia</b> é um dos seus pontos fortes. Você gosta de investigar e encontrar suas próprias soluções."
            },
            {
                texto: "Procuro ajuda de colegas, professores ou comunidades de programação.",
                afirmacao: "<b>Colaboração</b> faz parte do seu perfil. Você valoriza a troca de experiências e conhecimentos."
            }
        ]
    },

    {
        enunciado: "Em um projeto, o que você considera mais importante?",
        alternativas: [
            {
                texto: "Que o sistema funcione corretamente e seja eficiente.",
                afirmacao: "<b>Praticidade</b> define seu perfil. Para você, um bom projeto precisa funcionar bem."
            },
            {
                texto: "Que o projeto tenha uma aparência bonita e uma boa experiência para o usuário.",
                afirmacao: "<b>Criatividade</b> é uma característica marcante sua. Você valoriza bastante o visual e a experiência do usuário."
            }
        ]
    },

    {
        enunciado: "Como você reage quando aparece uma tecnologia nova?",
        alternativas: [
            {
                texto: "Prefiro aperfeiçoar aquilo que já conheço antes de mudar.",
                afirmacao: "<b>Especialização</b> combina com você. Você prefere dominar bem suas ferramentas."
            },
            {
                texto: "Fico curioso e quero testar a novidade imediatamente.",
                afirmacao: "<b>Curiosidade</b> é uma característica muito forte sua. Você gosta de descobrir novas tecnologias."
            }
        ]
    },

    {
        enunciado: "Qual ambiente de trabalho combina mais com você?",
        alternativas: [
            {
                texto: "Trabalhar sozinho e ter controle sobre todas as decisões.",
                afirmacao: "<b>Independência</b> combina com você. Você gosta de liberdade para tomar suas próprias decisões."
            },
            {
                texto: "Trabalhar em equipe e dividir ideias e responsabilidades.",
                afirmacao: "<b>Trabalho em equipe</b> é importante para você. Você gosta de construir projetos junto com outras pessoas."
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

    caixaPerguntas.textContent = "✨ Seu perfil de programador:";

    textoResultado.innerHTML = resultadoFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.style.display = "block";
}

mostrarPergunta();
