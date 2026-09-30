let quizData = [];

function addQuestion() {
    const qText = document.getElementById('question').value;
    const o1 = document.getElementById('opt1').value;
    const o2 = document.getElementById('opt2').value;
    const o3 = document.getElementById('opt3').value;
    const correctIdx = document.getElementById('correct').value;

    if (!qText || !o1 || !o2 || !o3) {
        alert("Барлық өрісті толтырыңыз!");
        return;
    }

    quizData.push({
        question: qText,
        options: [o1, o2, o3],
        correct: parseInt(correctIdx)
    });

    renderQuiz();
    
    // Форманы тазалау
    document.getElementById('question').value = '';
    document.getElementById('opt1').value = '';
    document.getElementById('opt2').value = '';
    document.getElementById('opt3').value = '';
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    quizData.forEach((q, index) => {
        let qHTML = `<div class="quiz-item"><p><strong>${index + 1}. ${q.question}</strong></p>`;
        q.options.forEach((opt, optIdx) => {
            qHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${optIdx}"> ${opt}
                </label><br>
            `;
        });
        qHTML += `</div>`;
        container.innerHTML += qHTML;
    });
}

function submitQuiz() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    document.getElementById('result').innerText = `Сіздің нәтижеңіз: ${score} / ${quizData.length}`;
}