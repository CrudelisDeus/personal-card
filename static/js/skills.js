const skills = [
    {
        img: './static/img/achv-1.svg',
        title: 'Network operations',
        text: 'Restored, created, and expanded networks (fortigate, mikrotik, HP, cisco).'
    },
    {
        img: './static/img/achv-2.svg',
        title: 'Advanced Linux specialist',
        text: 'DevOps background with strong Linux expertise: custom environments, automated dotfile provisioning, and optimized system builds for development and production.'
    },
    {
        img: './static/img/achv-3.svg',
        title: 'JavaScript',
        text: 'Описание для JavaScript. Ut enim ad minim veniam...'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const logoImg   = document.querySelector('.main-skills-body-right-body-logo img');
    const titleEl   = document.querySelector('.main-skills-body-right-body-info h2');
    const textEl    = document.querySelector('.main-skills-body-right-body-info p');
    const counterEl = document.querySelector('.main-skills-body-right-footer-name p');

    const prevBtn   = document.querySelector('.footer-btn-footer-btn-1');
    const nextBtn   = document.querySelector('.footer-btn-footer-btn-2');

    let currentIndex = 0;

    function renderSkill() {
        const item = skills[currentIndex];

        logoImg.src = item.img;
        logoImg.alt = item.title;

        titleEl.textContent = item.title;
        textEl.textContent  = item.text;

        counterEl.textContent = `${currentIndex + 1} / ${skills.length}`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + skills.length) % skills.length;
        renderSkill();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % skills.length;
        renderSkill();
    });

    renderSkill();
});
