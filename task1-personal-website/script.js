// Button
function showMessage() {
    alert("Let's work together 🚀");
}

function submitForm() {
    alert("Message sent successfully!");
}

// Typing Effect
const text = ["Kurumurthi", "a Web Developer", "a Problem Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerText = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == text.length) i = 0;
        }
    }
    setTimeout(type, 100);
}
type();

// Scroll Animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});