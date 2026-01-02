const submit = document.querySelector(".submit");
const form = document.getElementById("form1");
const now = DateTime.now();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const day = document.getElementById("dd");
    const month = document.getElementById("mm");
    const year = document.getElementById("yyyy");
});

submit.addEventListener("click", () => {
    if (submit) {
        saveTheDate();
    }
});
