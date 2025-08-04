const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para tela cheia
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letras = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const tamanhoFonte = 14;
const colunas = canvas.width / tamanhoFonte;
const drops = Array.from({ length: colunas }).fill(1);

function draw() {
  // Fundo levemente transparente para efeito de "arrasto"
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // verde
  ctx.font = `${tamanhoFonte}px monospace`;

  drops.forEach((y, i) => {
    const texto = letras[Math.floor(Math.random() * letras.length)];
    const x = i * tamanhoFonte;
    ctx.fillText(texto, x, y * tamanhoFonte);

    // Reinicia o "pingo" com probabilidade
    drops[i] = y * tamanhoFonte > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}

setInterval(draw, 33);const ctx = canvas.getContext("2d");

// Ajusta o tamanho do canvas para tela cheia
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letras = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const tamanhoFonte = 14;
const colunas = canvas.width / tamanhoFonte;
const drops = Array.from({ length: colunas }).fill(1);

function draw() {
  // Fundo levemente transparente para efeito de "arrasto"
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // verde
  ctx.font = `${tamanhoFonte}px monospace`;

  drops.forEach((y, i) => {
    const texto = letras[Math.floor(Math.random() * letras.length)];
    const x = i * tamanhoFonte;
    ctx.fillText(texto, x, y * tamanhoFonte);

    // Reinicia o "pingo" com probabilidade
    drops[i] = y * tamanhoFonte > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}

setInterval(draw, 33);
