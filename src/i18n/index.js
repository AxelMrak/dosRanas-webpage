import i18next from "i18next";
import { eng } from "./en";
import { esp } from "./es";


i18next.init({
    interpolation: {
        escapeValue: false,
    },
    lng: 'en', // *TODO: Cambiar esto con un estado global con redux toolkit para cambiar los idiomas. Debe ser una condicional que cambie de 'EN' a 'ESP
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