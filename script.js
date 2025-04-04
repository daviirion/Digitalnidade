// Funções existentes
function mostrarDica(id) {
    const dica = document.getElementById(id);
    dica.classList.toggle("escondido");
}

function mostrarQuiz(id) {
    const quiz = document.getElementById(id);
    quiz.classList.toggle("escondido");
}

function respostaQuiz(resposta) {
    const resultado = document.getElementById("resposta-alunos1");
    if (resposta === "B") {
        resultado.textContent = "Resposta correta! Parabéns! ";
        resultado.style.color = "blue";
    } else {
        resultado.textContent = "Ops! Tente novamente.";
        resultado.style.color = "red";
    }
}

// Código para carregar o contador de acessos
document.addEventListener("DOMContentLoaded", function() {
    fetch('contador.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contador').textContent = data;
        })
        .catch(error => console.error('Erro ao carregar o contador:', error));
});