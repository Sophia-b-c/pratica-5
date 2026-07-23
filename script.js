// Número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
let maxTentativas = 10;

// Contador de tentativas restantes
let tentativasRestantes = maxTentativas;

// Elementos da página
const input = document.getElementById("palpite");
const botao = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

// Exibe as tentativas restantes
tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botao.addEventListener("click", function () {

    let palpite = parseInt(input.value);

    // Validação
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Você acertou!";
        tentativas.textContent = "";
        input.disabled = true;
        botao.disabled = true;
        return;
    }

    if (tentativasRestantes === 0) {
        mensagem.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
        tentativas.textContent = "";
        input.disabled = true;
        botao.disabled = true;
        return;
    }

    if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior.";
    } else {
        mensagem.textContent = "O número secreto é menor.";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    input.value = "";
    input.focus();
});
// Pressionar Enter equivale a clicar no botão
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botao.click();
    }
});