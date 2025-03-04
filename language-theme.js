
const langHu = document.getElementById('lang-hu');
const langEn = document.getElementById('lang-en');

const translations = {
    hu: {
        nav: {
            work: 'Munkáim',
            clients: 'Ügyfelek',
            about: 'Rólam',
            contact: 'Kapcsolat'
        },
        header: {
            tagline: 'Szenvedélyes fejlesztő Magyarországról.',
            techStack: 'Technológiák, amelyekkel dolgozom:',
            getInTouch: 'Kapcsolatfelvétel'
        },
        work: {
            title: 'Munkáim',
            project1: {
                title: 'Discord üdvözlő bot',
                desc: 'Egy egyszerű Discord bot, amely automatikusan üdvözli az új tagokat a szerveren.',
                visitSite: 'Oldal megtekintése'
            },
            project2: {
                title: 'Egyszerű Portfólió',
                desc: 'Egy letisztult és minimalista portfólió weboldal sablon reszponzív dizájnnal, több remek szekcióval és fix lábrésszel.',
                visitSite: 'Oldal megtekintése'
            },
            project3: {
                title: 'E-commerce',
                desc: 'Ez az e-commerce projekt, bár egy egyszerű "Hello World"-dal indul, robusztus háttérrendszerrel rendelkezik, amely magában foglalja a felhasználókezelést, termékkatalógust, kosárfunkciókat és rendelésfeldolgozást, mindezt TypeScript és Express.js segítségével.',
                visitSite: 'Oldal megtekintése'
            }
        },
        clients: {
            title: 'Ügyfelek'
        },
        about: {
            title: 'Rólam',
            content: 'Helló, matezper2 vagyok, egy 16 éves srác Magyarországról. Inkább introvertált vagyok, de 8 éves korom óta szenvedélyesen foglalkozom játékok modolásával. Az utam a Minecraft modokkal kezdődött, és idővel eljutottam a Grand Theft Auto 5 roleplay szerverek tervezéséig. 2023 végén fedeztem fel a Discord fejlesztés világát, és azóta egyre mélyebbre ások benne. Ja, és említettem már? Fejlesztő vagyok - nos, bizonyos értelemben. Discord botokat készítek JavaScript használatával, és weboldalakat építek bárkinek, akinek szüksége van rá, HTML, CSS, JavaScript és TypeScript segítségével.',
        },
        contact: {
            title: 'Kapcsolatfelvétel',
            content: 'Szükséged van egy gyors, felhasználóbarát weboldalra, hogy bemutasd termékedet vagy vállalkozásodat? Konzultációra van szükséged, kérdéseid vannak, tanácsot szeretnél adni, vagy egyszerűen csak köszönni akarsz? Bármi is legyen, nyugodtan írj! Igyekszem mihamarabb válaszolni. 😊 A leggyorsabb módja az elérésemnek az email vagy a Discord.',
        },
        footer: {
            rights: 'Minden jog fenntartva -'
        }
    },
    en: {
        nav: {
            work: 'Work',
            clients: 'Clients',
            about: 'About',
            contact: 'Contact'
        },
        header: {
            tagline: 'A passionate developer based in Hungary.',
            techStack: 'Technologies I work with:',
            getInTouch: 'Get in touch'
        },
        work: {
            title: 'My Work',
            project1: {
                title: 'Discord welcomer bot',
                desc: 'A simple Discord bot that automatically welcomes new members to the server.',
                visitSite: 'Visit Site'
            },
            project2: {
                title: 'Simple Portfolio',
                desc: 'A clean and minimal portfolio website template with a responsive design, featuring several awesome section and a fixed footer.',
                visitSite: 'Visit Site'
            },
            project3: {
                title: 'E-commerce',
                desc: 'This e-commerce project, while starting with a simple "Hello World," boasts a robust backend featuring user management, product catalog, cart functionality, and order processing, all built with TypeScript and Express.js.',
                visitSite: 'Visit Site'
            }
        },
        clients: {
            title: 'Clients'
        },
        about: {
            title: 'About Me',
            content: 'Hello, I\'m matezper2, a 16-year-old from Hungary. I\'m more of an introvert, but I\'ve been passionate about modding games since I was 8. My journey started with Minecraft mods, and over time, I expanded to designing roleplay servers for Grand Theft Auto 5. By late 2023, I discovered the world of Discord development and have been diving deeper into it ever since. Along the way, I\'ve met some incredible people on Discord. Oh, and did I mention? I\'m a developer—well, somewhat. I create Discord bots using JavaScript and build websites for anyone who needs them, working with HTML, CSS, JavaScript, and TypeScript.',

        },
        contact: {
            title: 'Get in Touch',
            content: 'Are you in need of a fast, user-friendly website to showcase your product or business? Looking for consultation, have questions, want to share advice, or simply want to say "Hi 👋"? Whatever it is, feel free to reach out! I\'ll do my best to get back to you. 😊 The fastest way to contact me is via email or Discord.',
        },
        footer: {
            rights: 'All rights served for'
        }
    }
};

const savedLanguage = localStorage.getItem('language') || 'en';
if (savedLanguage === 'hu') {
    changeLanguage('hu');
    langHu.classList.add('active');
    langEn.classList.remove('active');
} else {
    changeLanguage('en');
    langEn.classList.add('active');
    langHu.classList.remove('active');
}

langHu.addEventListener('click', () => {
    changeLanguage('hu');
    langHu.classList.add('active');
    langEn.classList.remove('active');
    localStorage.setItem('language', 'hu');
});

langEn.addEventListener('click', () => {
    changeLanguage('en');
    langEn.classList.add('active');
    langHu.classList.remove('active');
    localStorage.setItem('language', 'en');
});

function changeLanguage(lang) {
    const t = translations[lang];
    

    document.querySelectorAll('.nav__link').forEach((link, index) => {
        if (index === 0) link.textContent = t.nav.work;
        if (index === 1) link.textContent = t.nav.clients;
        if (index === 2) link.textContent = t.nav.about;
        if (index === 3) link.textContent = t.nav.contact;
    });
    

    document.querySelector('.header__text p').textContent = t.header.tagline;
    document.querySelector('.tech-stack p').textContent = t.header.techStack;
    document.querySelector('.header__text .btn').textContent = t.header.getInTouch;
    
    document.querySelector('.work h2').textContent = t.work.title;

    const workBoxes = document.querySelectorAll('.work__box');
    workBoxes[0].querySelector('h3').textContent = t.work.project1.title;
    workBoxes[0].querySelector('p').textContent = t.work.project1.desc;
    workBoxes[0].querySelector('.link__text').textContent = t.work.project1.visitSite + ' ';
    
    workBoxes[1].querySelector('h3').textContent = t.work.project2.title;
    workBoxes[1].querySelector('p').textContent = t.work.project2.desc;
    workBoxes[1].querySelector('.link__text').textContent = t.work.project2.visitSite + ' ';
    
    workBoxes[2].querySelector('h3').textContent = t.work.project3.title;
    workBoxes[2].querySelector('p').textContent = t.work.project3.desc;
    workBoxes[2].querySelector('.link__text').textContent = t.work.project3.visitSite + ' ';
    

    document.querySelector('.client h2').textContent = t.clients.title;
    

    document.querySelector('.about h2').textContent = t.about.title;
    document.querySelector('.about__text p').textContent = t.about.content;
    

    document.querySelector('.contact h2').textContent = t.contact.title;
    document.querySelector('.contact__info p').innerHTML = t.contact.content;
    

    document.querySelector('.footer p').innerHTML = `&copy; 2025 - ${t.footer.rights} <a href="https://discord.com/users/662200412446654465" class="link">matezper2</a>.`;
}
