const FORM = document.querySelector("form");
const COPY_I = document.querySelector(".bx-copy");

// Password Generation :
FORM.addEventListener("submit", function (e) {
    e.preventDefault();

    const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_()[]{}&?!%$";
    let randomPassword_length = this.password_length.value;
    let randomPassword = "";
    for (let i = 0; i < randomPassword_length; i++) {
        randomPassword = randomPassword + CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    this.password.value = randomPassword;

    // Addition in the history :
    const LIST = document.querySelector(".history_password ul");
    LIST.innerHTML += `<li>${randomPassword}</li>`;
});

// Password Copy :
COPY_I.addEventListener("click", () => (FORM.password.select(), document.execCommand("copy")));

// Affichage de l'historique :
document.querySelector(".btnhistory").addEventListener("click", function () {
    document.querySelector(".historique").classList.toggle("active");
});
