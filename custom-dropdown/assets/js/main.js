// Ao selecionar uma opção tem que fazer as opções sumirem também

const item = document.querySelectorAll(".item");
const defaultState = document.getElementById("placeholder");

function toggleOptions() {
    const options = document.querySelector(".options");
    options.classList.toggle("hidden");
}

function selectedOption(button) {
    item.forEach((i) => {
        if (i !== button) {
            i.classList.remove("active");
        }
        button.classList.add("active");
    });
}

function updateSelected(newText) {
    defaultState.innerHTML = newText;
    toggleOptions();
}

item.forEach((button) => {
    button.addEventListener("click", () => {
        updateSelected(button.innerHTML);
        selectedOption(button);
        defaultState.classList.toggle("droped");
    });
});

defaultState.addEventListener("click", () => {
    defaultState.classList.toggle("droped");
    toggleOptions();
});

window.addEventListener("click", (e) => {
    const options = document.querySelector(".options");

    if (!defaultState.contains(e.target) && !options.contains(e.target)) {
        options.classList.add("hidden");
    }
    if (
        defaultState.classList.contains("droped") &&
        !defaultState.contains(e.target)
    ) {
        defaultState.classList.remove("droped");
    }
});
