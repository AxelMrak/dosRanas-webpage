const { default: i18next } = require("i18next");

i18next({
    interpolation: {
        escapeValue: false,
    },
    debug: true,
    lng: 'es',
    resources: {
        en: {
            translation: eng,
        },
        es: {
            translation: esp,
        },
    },
});

export default i18next;