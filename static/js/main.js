const LINK_ABOUT_ME = "./index.html";
const LINK_SKILLS = "test1";
const LINK_RESUME = "./cv.html";
const LINK_CONTACTS = "test3";
const LINK_CONTACT_ME = "https://t.me/CrudelisDeus";

const YEARS_EXPERIENCE = 5;
const COMPLETED_PROJECTS = 8;
const MAX_ANIMATION_DURATION = 2000;

document.addEventListener("DOMContentLoaded", () => {
    const mobile = document.querySelector('.mobile2');
    const openBtn = document.querySelector('.main-header-btn-2');
    const closeBtn = document.querySelector('.main-header-btn-3');
    if (openBtn && mobile) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobile.classList.add('active');
        });
    }
    if (closeBtn && mobile) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobile.classList.remove('active');
        });
    }
    const setHrefForAll = (selector, href) => {
        document.querySelectorAll(selector).forEach(el => {
            el.href = href;
        });
    };
    setHrefForAll('.btn-about-me', LINK_ABOUT_ME);
    setHrefForAll('.btn-skills', LINK_SKILLS);
    setHrefForAll('.btn-resume', LINK_RESUME);
    setHrefForAll('.btn-contacts', LINK_CONTACTS);
    setHrefForAll('.btn-contact-me', LINK_CONTACT_ME);
});

// function animateCounter(element, target, durationMs = MAX_ANIMATION_DURATION, suffix = "+") {
//     if (!element) return;

//     element.innerHTML = `<span class="counter">0${suffix}</span>`;
//     const counter = element.querySelector(".counter");

//     const steps = target;
//     let value = 0;

//     let weights = [];
//     let totalWeight = 0;

//     for (let i = 0; i < steps; i++) {
//         let w = Math.random();
//         weights.push(w);
//         totalWeight += w;
//     }

//     let accumulated = 0;
//     for (let i = 0; i < steps; i++) {
//         let delay = durationMs * (weights[i] / totalWeight);
//         accumulated += delay;

//         setTimeout(() => {
//             value++;

//             counter.classList.add("counter-changing");

//             setTimeout(() => {
//                 counter.textContent = value + suffix;

//                 counter.classList.remove("counter-changing");

//             }, 120);
//         }, accumulated);
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    animateCounter(document.querySelector('.main-body-left-yc-1 h1'), YEARS_EXPERIENCE);
    animateCounter(document.querySelector('.main-body-left-yc-2 h1'), COMPLETED_PROJECTS);
});