const cards = document.querySelectorAll(".flash-card");
const prev = document.getElementById("prev");
const ans = document.getElementById("ans");
const next = document.getElementById("next");
let actualCard = 0;

function showCard(prevIndex, index) {
    const question = document.querySelectorAll(".question");

    question[index].classList.toggle("desactive");
    if (!question[prevIndex].classList.contains("desactive")) {
        question[prevIndex].classList.toggle("desactive");
    }
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
