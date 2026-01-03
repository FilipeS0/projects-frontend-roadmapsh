const cards = document.querySelectorAll(".flash-card");
const fContainer = document.querySelectorAll(".flash-container");
const prev = document.getElementById("prev");
const ans = document.getElementById("ans");
const next = document.getElementById("next");
let actualCard = 0;

function showCard(prevIndex, index) {
    const question = document.querySelectorAll(".question");

    fContainer[index].classList.toggle("desactive");
    question[index].classList.toggle("desactive");
    if (!question[prevIndex].classList.contains("desactive")) {
        fContainer[prevIndex].classList.toggle("desactive");
        question[prevIndex].classList.toggle("desactive");
    }
    hidAnswers(index, prevIndex);
}

function hidAnswers(index, prevIndex) {
    const answer = document.querySelectorAll(".answer");

    if (prevIndex) {
        fContainer[prevIndex].classList.toggle("desactive");
        answer[prevIndex].classList.toggle("desactive");
    }
    answer[index].classList.toggle("desactive");
}

prev.addEventListener("click", () => {
    if (actualCard === 0) {
        return;
    }
    let previousCard = actualCard;
    actualCard--;
    showCard(previousCard, actualCard);
});

ans.addEventListener("click", () => {
    const answer = document.querySelectorAll(".answer");
    const question = document.querySelectorAll(".question");

    answer[actualCard].classList.toggle("desactive");
    question[actualCard].classList.toggle("desactive");
});

next.addEventListener("click", () => {
    if (actualCard >= cards.length) {
        return;
    }
    let previousCard = actualCard;
    actualCard++;
    showCard(previousCard, actualCard);
});
