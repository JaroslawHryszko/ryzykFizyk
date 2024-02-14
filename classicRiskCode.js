document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('riskMatrix');
    const ctx = canvas.getContext('2d');
    const draggableRisk = document.getElementById('draggableRisk');
    const riskDescription = document.getElementById('riskDescription');
    const submitRiskButton = document.getElementById('submitRisk');

    drawMatrix(ctx, canvas.width, canvas.height);
    generateRiskDescription();

    draggableRisk.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', null); // Potrzebne dla Firefoxa
    });

    canvas.addEventListener('dragover', function(event) {
        event.preventDefault(); // Pozwala na upuszczenie
    });

    canvas.addEventListener('drop', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        draggableRisk.style.position = 'absolute';
        draggableRisk.style.left = `${event.clientX}px`;
        draggableRisk.style.top = `${event.clientY}px`;
        event.preventDefault();
    });

    submitRiskButton.addEventListener('click', function() {
        const rect = canvas.getBoundingClientRect();
        const x = draggableRisk.offsetLeft - rect.left;
        const y = draggableRisk.offsetTop - rect.top;
        console.log(`Współrzędne punktu: (${x}, ${y}), ${riskDescription.textContent}`);
        generateRiskDescription(); // Generowanie nowego opisu ryzyka
        resetRiskPosition(); // Resetowanie pozycji ryzyka
    });

function drawMatrix(ctx) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    // Tło macierzy
    ctx.fillStyle = '#e7e6e1';
    ctx.fillRect(0, 0, width, height);

    // Linie siatki i podpisy
    ctx.strokeStyle = '#6d6875';
    ctx.font = "12px Arial";
    ctx.fillStyle = "#000"; // Kolor tekstu

    // Rysowanie linii siatki
    ctx.beginPath();
    for (let i = 1; i <= 2; i++) {
        ctx.moveTo((width / 3) * i, 0);
        ctx.lineTo((width / 3) * i, height);
        ctx.moveTo(0, (height / 3) * i);
        ctx.lineTo(width, (height / 3) * i);
    }
    ctx.stroke();

    // Dodawanie podpisów
    ctx.fillText("Prawd.: Niskie", width / 14, height - 5);
    ctx.fillText("Średnie", (4 * width) / 9, height - 5);
    ctx.fillText("Wysokie", (10 * width) / 13, height - 5);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Wysoki", -height / 5, 15);
    ctx.fillText("Średni", -(4 * height) / 7, 15);
    ctx.fillText("Wpływ: Niski", -(10 * height) / 11, 15);
    ctx.restore();
}

function generateRiskDescription() {
    // Przykładowe frazy dla każdej części zdania
    const subjects = [
        "Brak testów jednostkowych",
        "Niejasne wymagania",
        "Zmiana priorytetów",
        "Niedostateczna dokumentacja",
        "Opóźnienie w dostawach",
        "Przekroczenie budżetu"
    ];
    const verbs = [
        "może prowadzić do",
        "zwiększa ryzyko",
        "potencjalnie spowoduje",
        "grozi",
        "wywołuje"
    ];
    const consequences = [
        "błędów w produkcji",
        "opóźnień projektowych",
        "zwiększenia kosztów",
        "utraty danych",
        "niskiej jakości oprogramowania",
        "niezadowolenia klienta"
    ];
    const mitigations = [
        "implementacja testów jednostkowych",
        "dokładna weryfikacja wymagań",
        "regularne spotkania zespołu",
        "tworzenie szczegółowej dokumentacji",
        "zastosowanie metodyk zwinnych",
        "zwiększenie budżetu projektu"
    ];

    // Losowanie fraz z każdej kategorii
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const consequence = consequences[Math.floor(Math.random() * consequences.length)];
    const mitigation = mitigations[Math.floor(Math.random() * mitigations.length)];

    // Budowanie zdania
    const description = `${subject} ${verb} ${consequence}. Możliwym rozwiązaniem jest ${mitigation}.`;

    // Aktualizacja treści na stronie
    document.getElementById('riskDescription').textContent = description;
}


    function resetRiskPosition() {
        draggableRisk.style.position = 'static';
    }
});
