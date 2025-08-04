const texto = [
  "Conectando ao servidor...",
  "Autenticando como VTR.s...",
  "Acesso concedido.",
  "Listando arquivos do sistema...",
  "⠀",
  "root@hacker:~# ls",
  "📁 Projetos",
  "📁 Documentos",
  "📁 Segredos",
  "⠀",
  "root@hacker:~# echo 'Hacked by VTR.s'",
  "Hacked by VTR.s",
];

let linha = 0;
let char = 0;
let output = document.getElementById("output");

function digitarLinha() {
  if (linha < texto.length) {
    if (char < texto[linha].length) {
      output.textContent += texto[linha][char];
      char++;
      setTimeout(digitarLinha, 30);
    } else {
      output.textContent += "\n";
      linha++;
      char = 0;
      setTimeout(digitarLinha, 300);
    }
  }
}

digitarLinha();
