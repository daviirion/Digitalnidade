
// contador.js
document.addEventListener("DOMContentLoaded", function() {
    // Faz uma requisição ao backend para obter o número de acessos
    fetch('contador.php')
        .then(response => response.text())
        .then(data => {
            // Atualiza o contador na página
            document.getElementById('contador').textContent = data;
        })
        .catch(error => console.error('Erro ao carregar o contador:', error));
});