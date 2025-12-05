
const LINK_ABOUT_ME = "./index.html";
const LINK_SKILLS = "test1";
const LINK_RESUME = "./cv.html";
const LINK_CONTACTS = "test3";
const LINK_CONTACT_ME = "https://t.me/CrudelisDeus";

const YEARS_EXPERIENCE = 5;
const COMPLETED_PROJECTS = 8;
const MAX_ANIMATION_DURATION = 2000;

// CV
const LAST_UPDATE = "12/2025";
const LINK_DOWNLOAD = "./index.html";
const LINK_WEB_VIEW = "./index.html";


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
    setHrefForAll('.main-header-menu-first', LINK_ABOUT_ME);
    setHrefForAll('.btn-skills', LINK_SKILLS);
    setHrefForAll('.btn-resume', LINK_RESUME);
    setHrefForAll('.main-header-menu-end', LINK_CONTACTS);
    setHrefForAll('.btn-contact-me', LINK_CONTACT_ME);
    setHrefForAll('.btn-cv-download', LINK_DOWNLOAD);
    setHrefForAll('.btn-cv-web-view', LINK_WEB_VIEW);
});

document.addEventListener("DOMContentLoaded", () => {
    animateCounter(document.querySelector('.main-body-left-yc-1 h1'), YEARS_EXPERIENCE);
    animateCounter(document.querySelector('.main-body-left-yc-2 h1'), COMPLETED_PROJECTS);
});

document.addEventListener("DOMContentLoaded", () => {
    animateCounter(document.querySelector('.btn-cv-download'), LINK_DOWNLOAD);
    animateCounter(document.querySelector('.btn-cv-web-view'), LINK_WEB_VIEW);
});

document.addEventListener("DOMContentLoaded", () => {
    const updateElement = document.querySelector('.cv-update');
    if (updateElement) {
        updateElement.textContent = `Last update: ${LAST_UPDATE}`;
    }
});