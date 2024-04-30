// localization.js

// Define translations
const translations = {
    en: {
      welcome: 'Welcome',
      login: 'Login',
      // Add more translations for English here
    },
    hi: {
      welcome: 'स्वागत है',
      login: 'लॉगिन',
      // Add more translations for Hindi here
    },
    // Add translations for other languages here
  };
  
  // Default language
  let currentLanguage = 'en';
  
  // Function to set the current language
  export const setLanguage = (language) => {
    currentLanguage = language;
  };
  
  // Function to get translated text
  export const t = (key) => {
    return translations[currentLanguage][key] || key; // Return the translated text or the key itself if translation not found
  };
  