document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    const translations = {
        en: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            contact: 'Contact',
            welcome: 'Welcome to KAY Auto',
            welcomeText: 'Complete auto services for all your needs.',
            ourServices: 'Our Services',
            service1Title: 'Auto Service',
            service1Desc: 'We offer high-quality auto repair and maintenance services.',
            service2Title: 'Car Wash',
            service2Desc: 'Professional car wash to keep your car clean and shiny.',
            service3Title: 'Computerized Diagnosis',
            service3Desc: 'Quick and accurate diagnosis for all vehicle types.',
            aboutUs: 'About Us',
            aboutText: 'KAY Auto has been providing comprehensive and reliable auto services for over 20 years.',
            contactUs: 'Contact Us',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            message: 'Message',
            submit: 'Submit',
        },
        ro: {
            home: 'Home',
            services: 'Servicii',
            about: 'Despre',
            contact: 'Contact',
            welcome: 'Bine ați venit la KAY Auto',
            welcomeText: 'Servicii auto complete pentru toate nevoile dumneavoastră.',
            ourServices: 'Serviciile Noastre',
            service1Title: 'Service Auto',
            service1Desc: 'Oferim servicii de reparații și întreținere auto de cea mai înaltă calitate.',
            service2Title: 'Spălătorie Auto',
            service2Desc: 'Spălătorie auto profesională pentru a vă menține mașina curată și strălucitoare.',
            service3Title: 'Diagnoză Computerizată',
            service3Desc: 'Diagnosticare rapidă și precisă pentru toate tipurile de vehicule.',
            aboutUs: 'Despre Noi',
            aboutText: 'KAY Auto oferă servicii complete și de încredere în domeniul auto de peste 20 de ani.',
            contactUs: 'Contact',
            firstName: 'Prenume',
            lastName: 'Nume',
            email: 'Email',
            message: 'Mesaj',
            submit: 'Trimite',
        }
    };

    function translatePage(lang) {
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update links based on language if they exist
        const service1Link = document.querySelector('.service a[data-key="service1Title"]');
        const service2Link = document.querySelector('.service a[data-key="service2Title"]');
        const service3Link = document.querySelector('.service a[data-key="service3Title"]');
        if (service1Link) service1Link.setAttribute('href', `service1-${lang}.html`);
        if (service2Link) service2Link.setAttribute('href', `service2-${lang}.html`);
        if (service3Link) service3Link.setAttribute('href', `service3-${lang}.html`);
    }

    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            translatePage(selectedLang);
        });

        // Initial translation based on default language
        translatePage(languageSwitcher.value);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Language switcher code
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', function () {
            const selectedLanguage = this.value;
            let currentPath = window.location.pathname;

            // Check if the current page is in a subdirectory like 'service1-ro.html'
            const match = currentPath.match(/service\d+-(en|ro)\.html/);
            if (match) {
                // Replace the language code in the URL
                currentPath = currentPath.replace(/-(en|ro)\.html/, `-${selectedLanguage}.html`);
            } else {
                // Replace the language code in the URL for index.html
                currentPath = currentPath.replace(/index-(en)\.html/, `index-${selectedLanguage}.html`);
            }

            window.location.pathname = currentPath;
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                // Check if the link is pointing to an anchor on the same page
                if (this.hash !== "" && this.pathname === window.location.pathname) {
                    e.preventDefault();
                    const hash = this.hash;
                    const target = document.querySelector(hash);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // Navigate to the link normally
                    window.location.href = this.href;
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY < lastScrollY) {
            // Scrolling up
            header.classList.add('show');
        } else {
            // Scrolling down
            header.classList.remove('show');
        }
        lastScrollY = window.scrollY;
    });
});

