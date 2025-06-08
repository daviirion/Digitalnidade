
// Funções para o quiz
function mostrarQuiz(id) {
    const quiz = document.getElementById(id);
    quiz.classList.toggle('escondido');

    // Rolar suavemente para o quiz
    if (!quiz.classList.contains('escondido')) {
        quiz.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function verificarResposta(botao, estaCorreta) {
    const feedback = botao.closest('.quiz-pergunta').querySelector('.feedback');

    if (estaCorreta) {
        feedback.textContent = "Resposta correta! 🎉";
        feedback.style.color = "#38a169";
        botao.classList.add('resposta-certa');
    } else {
        feedback.textContent = "Ops, não é essa! Tente novamente.";
        feedback.style.color = "#e53e3e";
        botao.classList.add('resposta-errada');
    }

    // Desativar todos os botões após responder
    const botoes = botao.parentElement.querySelectorAll('.btn-opcao');
    botoes.forEach(btn => {
        btn.disabled = true;
    });
}

// Funções para o Modal de Agradecimento
function mostrarModal() {
    document.getElementById('thankyouModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('thankyouModal').style.display = 'none';
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('DigitalNidade carregado!');

    // Efeito de digitação no título (opcional)
    const tituloHero = document.querySelector('.hero-section h1');
    if (tituloHero) {
        const textoOriginal = tituloHero.textContent;
        tituloHero.textContent = '';

        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < textoOriginal.length) {
                tituloHero.textContent += textoOriginal.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Mostra automaticamente o modal quando carregar a página
    mostrarModal();
});
