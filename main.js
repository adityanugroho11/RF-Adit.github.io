/* ============================
      MOBILE NAVBAR
============================= */
(function () {
    const menu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('#navMenu');

    if (menu && navMenu) {
        menu.addEventListener("click", () => {
            menu.classList.toggle("is-active");
            navMenu.classList.toggle("active");
        });
    }
})();

/* ============================
      SCROLL REVEAL
============================= */
(function () {
    if (typeof ScrollReveal === "undefined") {
        const s = document.createElement("script");
        s.src = "https://unpkg.com/scrollreveal";
        s.onload = initSR;
        document.head.appendChild(s);
    } else initSR();

    function initSR() {
        ScrollReveal().reveal(".reveal-left", { origin: "left", distance: "60px", duration: 900 });
        ScrollReveal().reveal(".reveal-right", { origin: "right", distance: "60px", duration: 900 });
        ScrollReveal().reveal(".reveal-bottom", { origin: "bottom", distance: "60px", duration: 900 });
    }
})();

/* ============================
   ABOUT IMAGE SLIDER
============================= */
(function () {
    const slides = document.querySelectorAll(".about-slider .slide");
    const dots = document.querySelectorAll(".slider-dots .dot");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (!slides.length) return;

    let index = 0;

    function show(i) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        slides[i].classList.add("active");
        dots[i].classList.add("active");
    }

    next?.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        show(index);
    });

    prev?.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        show(index);
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            index = Number(dot.dataset.slide);
            show(index);
        });
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        show(index);
    }, 5000);

    show(index);
})();

/* ============================
      EVENT SCREENSHOT PREVIEW
============================= */
const fileInput = document.getElementById("evScreenshot");
const fileName = document.getElementById("fileName");
if (fileInput) {
    fileInput.addEventListener("change", () => {
        fileName.textContent = fileInput.files.length
            ? fileInput.files[0].name
            : "Belum ada file dipilih";
    });
}

/* ============================
      CHIPWAR BAR
============================= */
function updateChipBar(barID, valID, percent) {
    document.getElementById(barID).style.width = percent + "%";
    document.getElementById(valID).textContent = percent + "%";
}

// HP CHIP (DEMO)
let bellaHP = 91;
let coraHP = 0;
let accHP = 42;

window.addEventListener("load", () => {
    updateChipBar("bellaBar", "bellaVal", bellaHP);
    updateChipBar("coraBar", "coraVal", coraHP);
    updateChipBar("accBar", "accVal", accHP);
});

/* ============================
      ACCORDION DONATION
============================= */
document.querySelectorAll(".don-acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const panel = btn.nextElementSibling;
        const open = panel.style.display === "block";

        document.querySelectorAll(".don-acc-panel").forEach(p => p.style.display = "none");

        panel.style.display = open ? "none" : "block";
    });
});

/* ============================
      WHATSAPP ORDER
============================= */
const adminPhone = "6285879426147"; 

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const item = btn.dataset.item;
        const msg = encodeURIComponent(`Halo Admin, saya ingin membeli: ${item}`);
        window.open(`https://wa.me/${adminPhone}?text=${msg}`, "_blank");
    });
});

/* ============================
      EVENT FORM
============================= */
(function () {
    const form = document.getElementById("eventForm");
    if (!form) return;

    const msg = document.getElementById("eventMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("evName").value.trim();
        const race = document.getElementById("evRace").value;
        const server = document.getElementById("evServer").value;
        const ss = document.getElementById("evScreenshot").files[0];

        if (!name || !race || !server || !ss) {
            alert("Harap isi semua data event.");
            return;
        }

        msg.style.display = "flex";
        form.reset();
        setTimeout(() => msg.style.display = "none", 3000);
    });
})();
