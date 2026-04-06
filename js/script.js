/* ========================= */
/* RKPS CLEAN JS SYSTEM */
/* ========================= */

// SELECT ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// ================= MOBILE MENU =================

// TOGGLE MENU
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU WHEN CLICK LINK (MOBILE)
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================= ACTIVE LINK =================

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// ================= NAVBAR SHADOW ON SCROLL =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

// ================= SIMPLE LOAD ANIMATION =================

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});
