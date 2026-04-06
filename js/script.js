/* =============================== */
/* RKPS PREMIUM ALIVE JS SYSTEM */
/* =============================== */

// SELECT ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // ICON TOGGLE
    if (menuToggle.innerHTML === "☰") {
        menuToggle.innerHTML = "✖";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// CLOSE MENU ON CLICK
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});

// ================= ACTIVE LINK SCROLL =================

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ================= SMOOTH SCROLL =================

links.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        }
    });
});

// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ================= HIDE/SHOW NAVBAR =================

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.top = "-80px"; // hide
    } else {
        navbar.style.top = "0"; // show
    }

    lastScroll = currentScroll;

});

// ================= SCROLL PROGRESS BAR =================

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "3px";
progressBar.style.background = "linear-gradient(to right, #3b82f6, #fbbf24)";
progressBar.style.zIndex = "9999";
progressBar.style.width = "0%";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";
});

// ================= RIPPLE EFFECT =================

links.forEach(link => {
    link.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "80px";
        ripple.style.height = "80px";
        ripple.style.background = "rgba(255,255,255,0.3)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s linear";

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// RIPPLE KEYFRAME
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
    to {
        transform: scale(3);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// ================= FADE-IN ON SCROLL =================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".section, .card").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

// ================= PAGE LOAD ANIMATION =================

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});
/* ================= OUTSIDE CLICK CLOSE ================= */

document.addEventListener("click", function (e) {

    const isMenuOpen = navLinks.classList.contains("active");

    if (isMenuOpen) {

        // Check click inside menu or toggle
        const isClickInsideMenu = navLinks.contains(e.target);
        const isClickToggle = menuToggle.contains(e.target);

        if (!isClickInsideMenu && !isClickToggle) {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = "☰";
        }
    }

});

