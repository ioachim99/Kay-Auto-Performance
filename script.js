
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');

    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            const currentPage = window.location.pathname;

            // Redirect to respective language pages
            if (currentPage.includes('index.html') && selectedLang === 'en') {
                window.location.href = 'index-en.html';
            } else if (currentPage.includes('index-en.html') && selectedLang === 'ro') {
                window.location.href = 'index.html';
            } else if (currentPage.includes('-ro.html') && selectedLang === 'en') {
                window.location.href = currentPage.replace('-ro.html', '-en.html');
            } else if (currentPage.includes('-en.html') && selectedLang === 'ro') {
                window.location.href = currentPage.replace('-en.html', '-ro.html');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (this.hash !== "" && this.pathname === window.location.pathname) {
                    e.preventDefault();
                    const target = document.querySelector(this.hash);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
});
