import { useEffect, useRef, useState } from 'react'
import { chevron_down } from '../../data/img/img-data' 
import './select.scss'

interface SelectOption<T extends string> {
    value: T;
    label: string;
}

interface CustomSelectProps<T extends string> {
    options: SelectOption<T>[];
    value: T;
    onChange: (value: T) => void;
    placeholder?: string;
}

export const Select = <T extends string>({ options, value, onChange, placeholder }: CustomSelectProps<T>) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    const selectedOption = options.find(option => option.value === value);

    const handleSelect = (selectedValue: T) => {
        onChange(selectedValue);
        setOpen(false);
    };

    return(
        <div className='select' ref={containerRef}>
            <button type='button' className='select__trigger' onClick={() => setOpen(!open)}>
                <span className='select__value'>
                    {selectedOption?.label || placeholder}
                    <img className={`select__arrow ${ open ? 'select__arrow--open' : '' }`} src={chevron_down.url} alt={chevron_down.alt}/>
                </span>
            </button>

            {open && (
                <ul className='select__dropdown'>
                    {options.map(option => (
                        <li key={option.value} className='select__item'>
                            <button type='button' className={`select__option ${ value === option.value ? 'select__option--active' : ''}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}