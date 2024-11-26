document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-key]');

    const translations = {
        en: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            contact: 'Contact',
            welcome: 'Complete Car Warranty at 80 Euros per Month!',
            welcomeText: 'Protect your fleet with full coverage and predictable costs. Just 80 euros per vehicle, monthly. Choose Kay Auto for safety and trust.',
            ourServices: 'Our Services',
            service1Title: '“Bumper to Bumper” Warranty',
            service1Desc: 'Our "Bumper to Bumper" warranty covers all essential vehicle components.',
            service2Title: 'After-Hours Repairs',
            service2Desc: 'We understand how important it is for your vehicles to be available during working hours.',
            service3Title: 'Cost Predictability',
            service3Desc: 'With our fixed-price services, you benefit from total cost predictability.',
            aboutUs: 'About Us',
            aboutText: 'At Kay Auto, we provide complete maintenance solutions for car fleets.',
            contactUs: 'Contact Us',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            message: 'Message',
            submit: 'Submit',
        },
        ro: {
            home: 'Acasă',
            services: 'Servicii',
            about: 'Despre noi',
            contact: 'Contact',
            welcome: 'Garanție Auto Completă la 80 Euro pe Lună!',
            welcomeText: 'Protejează-ți flota cu acoperire totală și costuri predictibile. Doar 80 euro pe vehicul, lunar. Alege Kay Auto pentru siguranță și încredere.',
            ourServices: 'Serviciile Noastre',
            service1Title: 'Garanție „Bumper to Bumper”',
            service1Desc: 'Garanția noastră „Bumper to Bumper” acoperă toate componentele esențiale ale vehiculelor.',
            service2Title: 'Reparații în Afara Orelor de Program',
            service2Desc: 'Înțelegem cât de important este ca vehiculele tale să fie disponibile în timpul orelor de lucru.',
            service3Title: 'Predictibilitatea Costurilor',
            service3Desc: 'Cu serviciile noastre la preț fix, beneficiezi de predictibilitate totală a costurilor.',
            aboutUs: 'Despre Noi',
            aboutText: 'La Kay Auto oferim soluții de întreținere complete pentru flotele auto.',
            contactUs: 'Contact',
            firstName: 'Nume',
            lastName: 'Prenume',
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

            // Dacă suntem pe pagina principală, schimbăm limba fără redirecționare
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                translatePage(selectedLang);
                document.documentElement.lang = selectedLang; // Actualizăm atributul `lang` al paginii
            } else {
                // Gestionăm alte pagini
                let currentPath = window.location.pathname;
                const match = currentPath.match(/-(en|ro)\.html/);
                if (match) {
                    currentPath = currentPath.replace(/-(en|ro)\.html/, `-${selectedLang}.html`);
                }
                window.location.pathname = currentPath;
            }
        });

        // Traducerea implicită pe baza limbii curente
        const currentLang = document.documentElement.lang || (window.location.pathname.includes('index-en.html') ? 'en' : 'ro');
        translatePage(currentLang);
    }

    // Smooth scrolling pentru link-urile de navigare
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                // Dacă link-ul este pe aceeași pagină
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
                    // Navigare normală
                    window.location.href = this.href;
                }
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    // Vizibil implicit
    header.classList.add('show');

    window.addEventListener('scroll', () => {
        if (window.scrollY < lastScrollY) {
            // Derulăm în sus - afișăm bara
            header.classList.add('show');
        } else {
            // Derulăm în jos - ascundem bara
            header.classList.remove('show');
        }
        lastScrollY = window.scrollY;
    });
});
