// Nos parentêses abaixo, tem que colocar a data prevista para a contagem regressiva terminar
const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Função para atualizar o countdown a cada segundo
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

// Se ainda houver tempo, atualiza o contador
  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Atualiza os elementos HTML com os valores calculados
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {

// Quando o tempo acabar, será exibida a mensagem abaixo
    document.getElementById("countdown").textContent = "Promoção Encerrada!";
  }
}

// O código abaixo faz a contagem regressiva atualizar a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chama a função imediatamente para exibir o cronômetro assim que a página for carregada
