
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
        document.documentElement.lang = lang;
    }

    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            translatePage(selectedLang);
        });

        // Set initial language based on the selected option or default
        const currentLang = languageSwitcher.value || 'ro';
        translatePage(currentLang);
    }
});
