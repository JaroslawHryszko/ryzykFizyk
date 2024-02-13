let startTime;
let timerInterval;

function startTimer() {
  clearInterval(timerInterval); // Zapewnia, że poprzedni timer został zatrzymany
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer(); // Natychmiastowa aktualizacja timera
}

function updateTimer() {
  const now = new Date();
  const elapsedTime = now - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
  document.getElementById('timer').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function vote(direction) {
  const endTime = new Date();
  const timeTaken = endTime - startTime;
  console.log(`Głos: ${direction}, Czas: ${timeTaken/1000} s`);
  startTimer(); // Resetowanie i restart timera
  generateRandomDescriptions(); // Generowanie nowych opisów dla elementów
}

function generateRandomDescriptions() {
  // Zaktualizowane opisy ryzyk dla projektów wytwarzania oprogramowania
  const descriptionsA = [
    "Opóźnienie w harmonogramie spowodowane niedoszacowaniem złożoności integracji systemów",
    "Przekroczenie budżetu z powodu nieprzewidzianych wymagań klienta",
    "Utrata kluczowych członków zespołu, co może spowodować opóźnienia w dostawach"
  ];
  const descriptionsB = [
    "Ryzyko wprowadzenia poważnych błędów oprogramowania z powodu niewystarczających testów",
    "Trudności w utrzymaniu kodu spowodowane niekonsekwentnymi standardami kodowania",
    "Zmiana zakresu projektu przez klienta w trakcie cyklu życia projektu"
  ];

  // Losowanie opisu dla każdego elementu
  const descriptionA = descriptionsA[Math.floor(Math.random() * descriptionsA.length)];
  const descriptionB = descriptionsB[Math.floor(Math.random() * descriptionsB.length)];

  // Aktualizacja treści elementów na stronie
  document.querySelector('.item_a').innerText = `Ryzyko A: ${descriptionA}`;
  document.querySelector('.item_b').innerText = `Ryzyko B: ${descriptionB}`;
}


document.addEventListener('DOMContentLoaded', function() {
  startTimer(); // Rozpoczęcie timera przy załadowaniu strony
  generateRandomDescriptions(); // Pierwsze losowe generowanie opisów
});
