import { DateTime } from "https://cdn.skypack.dev/luxon";

const form = document.getElementById("form1");
const p = document.querySelector(".result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dd = parseInt(document.getElementById("dd").value, 10);
    const mm = parseInt(document.getElementById("mm").value, 10);
    const yyyy = parseInt(document.getElementById("yyyy").value, 10);

    if (!dd || !mm || !yyyy) {
        p.textContent = "Please enter day, month and year.";
        return;
    }

    const birthday = DateTime.fromObject({ day: dd, month: mm, year: yyyy });
    if (!birthday.isValid) {
        p.textContent = "Invalid date.";
        return;
    }

    const now = DateTime.now();
    const diff = now.diff(birthday, ["years", "months", "days"]).toObject();

    const years = Math.trunc(diff.years || 0);
    const months = Math.trunc(diff.months || 0);
    const days = Math.trunc(diff.days || 0);

    p.textContent = `You are ${years} years ${months} months ${days} days old`;
});
