import './change-language.scss'
import { useLanguage } from '../../hooks/useLanguage';
import { useEffect, useRef, useState } from 'react';
import { chevron_down } from '../../data/img/img-data';

type Language = 'es' | 'en';

export const ChangeLanguage = () => {
    const { currentLang, flags, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const languages: { value: Language; label: string }[] = [
        { value: 'es', label: 'Es' },
        { value: 'en', label: 'En' },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (lang: Language) => {
        changeLanguage({
            target: { value: lang },
        } as React.ChangeEvent<HTMLSelectElement>);

        setOpen(false);
    };

    return(
        <div className='lang' ref={containerRef}>
            <button type="button" className='lang-trigger' onClick={() => setOpen(!open)}>
                <img className="lang__flag" src={flags[currentLang].url} alt={flags[currentLang].alt} />

                <span className='lang__change'>
                    {currentLang.toUpperCase()}
                    <img className={`arrow ${open ? 'arrow--open' : ''}`}
                        src={chevron_down.url} alt={chevron_down.alt}>
                    </img>
                </span>

            </button>

            {open && (
                <ul className="lang__dropdown">
                    {languages.map((lang) => (
                        <li key={lang.value} className='lang__list'>
                            <button type="button"
                                className={`lang__option ${ 
                                    currentLang === lang.value ? 'lang__option--active' : '' }`}
                                onClick={() => handleSelect(lang.value)}>
                                <img className="lang__flag" src={flags[lang.value].url} alt={flags[lang.value].alt}/>
                                {lang.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}