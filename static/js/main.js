const LINK_ABOUT_ME = "test0";
const LINK_SKILLS = "test1";
const LINK_RESUME = "test2";
const LINK_CONTACTS = "test3";
const LINK_CONTACT_ME = "https://t.me/CrudelisDeus";


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