let milissegundos = 0;
let segundos = 0;
let minutos = 0;
let intervalo;

const display = document.querySelector('.display span');

function atualizarDisplay() {
  const formatarTempo = (tempo, digitos) => String(tempo).padStart(digitos, '0');
  display.textContent = `${formatarTempo(minutos, 2)}:${formatarTempo(segundos, 2)}:${formatarTempo(milissegundos, 3)}`;
}

function iniciar() {
  if (!intervalo) {
    intervalo = setInterval(() => {
      milissegundos += 10; // Incrementa 10 milissegundos a cada 10ms
      if (milissegundos === 1000) {
        milissegundos = 0;
        segundos++;
        if (segundos === 60) {
          segundos = 0;
          minutos++;
        }
      }
      atualizarDisplay();
    }, 10); // Atualiza a cada 10 milissegundos
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  milissegundos = 0;
  segundos = 0;
  minutos = 0;
  atualizarDisplay();
}

atualizarDisplay(); // Inicializa o display com 00:00:00.000