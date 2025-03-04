
const savedLanguage = localStorage.getItem('language');

function applyLanguageSettings(languageToUse) {
    localStorage.setItem('language', languageToUse);
    
    changeLanguage(languageToUse);
    
    const langHu = document.getElementById('lang-hu');
    const langEn = document.getElementById('lang-en');
    
    if (langHu && langEn) {
        if (languageToUse === 'hu') {
            langHu.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langEn.classList.add('active');
            langHu.classList.remove('active');
        }
    }
}

if (!savedLanguage) {
    const browserLang = navigator.language || navigator.userLanguage;
    const isHungarianBrowser = browserLang.startsWith('hu');
    
    if (isHungarianBrowser) {

        applyLanguageSettings('hu');
    } else {

        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {

                const isHungary = data.country_code === 'HU';
                
                const languageToUse = isHungary ? 'hu' : 'en';
                applyLanguageSettings(languageToUse);
            })
            .catch(error => {

                console.error('Error detecting location:', error);
                applyLanguageSettings('en');
            });
    }
} else {

    applyLanguageSettings(savedLanguage);
}


