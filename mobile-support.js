
function isMobileDevice() {
  return (window.innerWidth <= 768) || 
         (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

document.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.querySelector('.custom-cursor');
  const isMobile = isMobileDevice();
  

  if (isMobile) {
      if (customCursor) {
          customCursor.style.display = 'none';
      }
      

      document.body.classList.add('mobile-device');
      

      const interactiveElements = document.querySelectorAll('a, button, .btn, .nav__link');
      interactiveElements.forEach(element => {
          element.addEventListener('touchstart', function() {
              this.classList.add('touch-active');
          });
          
          element.addEventListener('touchend', function() {
              this.classList.remove('touch-active');
          });
      });
  }
});


function detectUserLanguage() {

  const browserLang = navigator.language || navigator.userLanguage;
  const isHungarianBrowser = browserLang.startsWith('hu');
  

  if (!isHungarianBrowser) {

      return checkLocationByIP();
  } else {
      return Promise.resolve('hu');
  }
}

function checkLocationByIP() {
  return fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
          const isHungary = data.country_code === 'HU';
          return isHungary ? 'hu' : 'en';
      })
      .catch(error => {
          console.error('Error detecting location:', error);
          return 'en'; error
      });
}

document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language');
  

  if (!savedLanguage) {
      detectUserLanguage().then(language => {
          localStorage.setItem('language', language);
          changeLanguage(language);
          

          const langHu = document.getElementById('lang-hu');
          const langEn = document.getElementById('lang-en');
          
          if (language === 'hu') {
              langHu.classList.add('active');
              langEn.classList.remove('active');
          } else {
              langEn.classList.add('active');
              langHu.classList.remove('active');
          }
      });
  }
});
