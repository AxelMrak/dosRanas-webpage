import i18next from "i18next";
import { en } from "./en";
import { es } from "./es";


i18next.init({
    interpolation: {
        escapeValue: false,
    },
    debug: true,
    lng: 'es',
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es,
        },
    },
});

export default i18next;