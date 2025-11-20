/* ================================
   TAB SYSTEM
================================= */
const tabs = document.querySelectorAll(".auth-tab");
const forms = document.querySelectorAll(".auth-form");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        forms.forEach(f => f.classList.remove("active"));
        document.querySelector(`#${tab.dataset.tab}Form`).classList.add("active");
    });
});


/* ================================
   ELEMENT SELECTORS
================================= */
const regPass = document.getElementById("regPass");
const regPass2 = document.getElementById("regPass2");
const regEmail = document.getElementById("regEmail");
const regPin = document.getElementById("regPin");

const emailMsg = document.getElementById("emailMsg");
const confirmMsg = document.getElementById("confirmMsg");
const pinMsg = document.getElementById("pinMsg");

const checkUpper = document.getElementById("check-upper");
const checkLower = document.getElementById("check-lower");
const checkNumber = document.getElementById("check-number");
const checkSymbol = document.getElementById("check-symbol");
const checkLength = document.getElementById("check-length");


/* ================================
   PASSWORD CHECKLIST (REALTIME)
================================= */
regPass.addEventListener("input", () => {
    const v = regPass.value;

    updateCheck(checkUpper, /[A-Z]/.test(v));
    updateCheck(checkLower, /[a-z]/.test(v));
    updateCheck(checkNumber, /[0-9]/.test(v));
    updateCheck(checkSymbol, /[^A-Za-z0-9]/.test(v));
    updateCheck(checkLength, v.length >= 8);
});

function updateCheck(element, condition) {
    const icon = element.querySelector(".icon");
    if (condition) {
        element.classList.add("valid");
        icon.textContent = "✔";
    } else {
        element.classList.remove("valid");
        icon.textContent = "✘";
    }
}


/* ================================
   CONFIRM PASSWORD
================================= */
regPass2.addEventListener("input", () => {
    if (regPass2.value === regPass.value) {
        confirmMsg.textContent = "Password cocok ✓";
        confirmMsg.classList.add("success");
        confirmMsg.classList.remove("error");
    } else {
        confirmMsg.textContent = "Password tidak sama!";
        confirmMsg.classList.add("error");
        confirmMsg.classList.remove("success");
    }
});


/* ================================
   EMAIL VALIDATION
================================= */
regEmail.addEventListener("input", () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail.value);

    if (valid) {
        emailMsg.textContent = "Email valid ✓";
        emailMsg.classList.add("success");
        emailMsg.classList.remove("error");
    } else {
        emailMsg.textContent = "Format email tidak valid!";
        emailMsg.classList.add("error");
        emailMsg.classList.remove("success");
    }
});


/* ================================
   PIN VALIDATION (6 DIGIT)
================================= */
regPin.addEventListener("input", () => {
    const valid = /^[0-9]{6}$/.test(regPin.value);

    if (valid) {
        pinMsg.textContent = "PIN valid ✓";
        pinMsg.classList.add("success");
        pinMsg.classList.remove("error");
    } else {
        pinMsg.textContent = "PIN harus 6 digit angka!";
        pinMsg.classList.add("error");
        pinMsg.classList.remove("success");
    }
});


/* ================================
   SHOW/HIDE PASSWORD
================================= */
document.querySelectorAll(".togglePass").forEach(icon => {
    icon.addEventListener("click", () => {
        const target = document.getElementById(icon.dataset.target);
        const revealing = target.type === "password";

        target.type = revealing ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
});


/* ================================
   REGISTER SUBMIT
================================= */
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const pass = regPass.value;
    const pass2 = regPass2.value;

    const passOK =
        /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /[0-9]/.test(pass) &&
        /[^A-Za-z0-9]/.test(pass) &&
        pass.length >= 8;

    const emailValid = emailMsg.classList.contains("success");
    const confirmValid = pass === pass2;
    const pinValid = /^[0-9]{6}$/.test(regPin.value);

    if (!passOK || !emailValid || !confirmValid || !pinValid) {
        alert("Masih ada data yang belum valid.");
        return;
    }

    regMsg.style.display = "block";

    setTimeout(() => {
        document.querySelector(".auth-tab[data-tab='login']").click();
    }, 1200);
});


/* ================================
   LOGIN SUBMIT (DEMO)
================================= */
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    loginMsg.style.display = "block";
});
