import { useState } from 'react';
import { Select } from '../../../components/Select/Select';
import './top-filter.scss'
import { magnifying_glass_icon } from '../../../data/img/img-data';

export const TopFilter = () => {
    const [genderSelected, setGenderSelected] = useState();
    // const [search, setSearch] = useState('');
    const genderType = [
        { label: 'Destacados', value: '' },
        { label: 'Novedades', value: 'novedades' },
        { label: 'Major calificados', value: 'mejor' },
    ];

    const handleGenderChange = (option: any) => {
        setGenderSelected(option);
    };

    return (
        <section className='top-filter'>
            <Select
                options={genderType}
                value={genderSelected}
                onChange={handleGenderChange}
                placeholder='Ordenar por:' />
            <div className='top-filter__search-bar'>
                <input type="text" name='search' className='top-filter__input-search' placeholder='Buscar receta' />
                <img className='top-filter__search-icon' src={magnifying_glass_icon.url} alt={magnifying_glass_icon.alt} />
            </div>
        </section>
    );
}