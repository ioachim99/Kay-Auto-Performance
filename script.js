document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    if (languageSwitcher) {
        // Setarea limbii curente în dropdown
        if (window.location.pathname.includes('index-en.html')) {
            languageSwitcher.value = 'en';
        } else {
            languageSwitcher.value = 'ro'; // Implicit română
        }

        // Adaugă un eveniment pentru schimbarea limbii
        languageSwitcher.addEventListener('change', (e) => {
            const selectedLang = e.target.value;

            // Redirecționare către pagina corespunzătoare
            if (selectedLang === 'en') {
                window.location.href = 'index-en.html';
            } else if (selectedLang === 'ro') {
                window.location.href = 'index.html';
            }
        });
    }

    // Smooth scrolling pentru link-urile de navigare
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
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
                    window.location.href = this.href;
                }
            });
        });
    }
});
