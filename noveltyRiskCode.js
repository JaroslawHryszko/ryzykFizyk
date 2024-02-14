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
    // Przykładowe frazy dla każdej części zdania
    const subjects = [
        "Nieprecyzyjne wymagania", "Zmiany w zakresie projektu", "Niedostateczne testowanie",
        "Zależności technologiczne", "Opóźnienia w dostawach", "Problemy z zasobami"
    ];
    const verbs = [
        "mogą spowodować", "zwiększają ryzyko", "prowadzą do",
        "mogą wywołać", "grożą"
    ];
    const consequences = [
        "przekroczenia terminów", "przekroczenia budżetu", "niskiej jakości produktu",
        "utraty zaufania klienta", "problemów z integracją", "konieczności przeprojektowania"
    ];
    const mitigations = [
        "dokładna analiza wymagań", "wprowadzenie testów regresyjnych", "zastosowanie kontroli wersji",
        "regularne aktualizacje statusu", "lepsze planowanie zasobów", "zastosowanie metodologii zwinnych"
    ];

    // Losowanie fraz dla Ryzyka A
    let subjectA = subjects[Math.floor(Math.random() * subjects.length)];
    let verbA = verbs[Math.floor(Math.random() * verbs.length)];
    let consequenceA = consequences[Math.floor(Math.random() * consequences.length)];
    let mitigationA = mitigations[Math.floor(Math.random() * mitigations.length)];
    let descriptionA = `${subjectA} ${verbA} ${consequenceA}. Możliwym rozwiązaniem jest ${mitigationA}.`;

    // Losowanie fraz dla Ryzyka B
    let subjectB = subjects[Math.floor(Math.random() * subjects.length)];
    let verbB = verbs[Math.floor(Math.random() * verbs.length)];
    let consequenceB = consequences[Math.floor(Math.random() * consequences.length)];
    let mitigationB = mitigations[Math.floor(Math.random() * mitigations.length)];
    let descriptionB = `${subjectB} ${verbB} ${consequenceB}. Możliwym rozwiązaniem jest ${mitigationB}.`;

    // Aktualizacja treści elementów na stronie
    document.querySelector('.item_a').innerText = `Ryzyko A: ${descriptionA}`;
    document.querySelector('.item_b').innerText = `Ryzyko B: ${descriptionB}`;
}



document.addEventListener('DOMContentLoaded', function() {
  startTimer(); // Rozpoczęcie timera przy załadowaniu strony
  generateRandomDescriptions(); // Pierwsze losowe generowanie opisów
});
