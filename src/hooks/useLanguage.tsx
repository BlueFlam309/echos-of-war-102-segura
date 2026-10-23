import { useTranslation } from 'react-i18next';
import { en, es } from '../data/img/img-data';

export type Language = 'es' | 'en';

export const useLanguage = () => {
    const { t, i18n } = useTranslation();

    const flags: Record<Language, { url: string; alt: string }> = {
        es: es,
        en: en
    };

    const currentLang = i18n.language.split('-')[0] as Language;

    const changeLanguage = (
        e: React.ChangeEvent<HTMLSelectElement> | Language
    ) => {
        const lang = typeof e === 'string' ? e : e.target.value;
        i18n.changeLanguage(lang);
    };

    return {
        t,
        i18n,
        currentLang,
        flags,
        changeLanguage
    };
};
