import { useState } from 'react';
import './side-filter.scss';

interface Options {
    id: number;
    content: string;
    value: string;
}

export const SideFilter = () => {
    const [dificultades, setDificultades] = useState<string[]>([]);
    const [categorias, setCategorias] = useState<string[]>([]);
    const [preparacion, setPreparacion] = useState<string[]>([]);

    const dificultadOptions: Options[] = [
        { id: 1, content: 'Fácil', value: 'facil' },
        { id: 2, content: 'Intermedia', value: 'intermedia' },
        { id: 3, content: 'Difícil', value: 'dificil' },
    ];

    const categoriaOptions: Options[] = [
        { id: 1, content: 'Desayuno', value: 'desayuno' },
        { id: 2, content: 'Comida', value: 'comida' },
        { id: 3, content: 'Cena', value: 'cena' },
        { id: 4, content: 'Postres', value: 'postres' },
        { id: 5, content: 'Snacks', value: 'snacks' },
        { id: 6, content: 'Bebidas', value: 'bebidas' },
    ];

    const preparacionOptions: Options[] = [
        { id: 1, content: 'Menos de 15 minutos', value: '15' },
        { id: 2, content: '15-30 minutos', value: '30' },
        { id: 3, content: '30-60 minutos', value: '60' },
        { id: 4, content: 'Más de 60 minutos', value: '1' },
    ];

    const handleDificultadChange = (value: string) => {
        setDificultades(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleCategoriasChange = (value: string) => {
        setCategorias(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handlePreparacionChange = (value: string) => {
        setPreparacion(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    return (
        <section className="side-filter">
            <h2 className="side-filter__title">Dificultad</h2>

            <div className="side-filter__options">
                {dificultadOptions.map(option => (
                    <div key={option.id} className='side-filter__checkbox-wrapper'>
                        <input
                            className="side-filter__checkbox"
                            type="checkbox"
                            id={`dificultad-${option.id}`}
                            value={option.value}
                            checked={dificultades.includes(option.value)}
                            onChange={() =>
                                handleDificultadChange(option.value)
                            }
                        />
                        <label htmlFor={`dificultad-${option.id}`}>
                            {option.content}
                        </label>
                    </div>
                ))}
            </div>

            <div className="side-filter__divider"></div>

            <h2 className="side-filter__title">Categoria de comida</h2>

            <div className="side-filter__options">
                {categoriaOptions.map(option => (
                    <div key={option.id} className='side-filter__checkbox-wrapper'>
                        <input
                            className="side-filter__checkbox"
                            type="checkbox"
                            id={`dificultad-${option.id}`}
                            value={option.value}
                            checked={categorias.includes(option.value)}
                            onChange={() =>
                                handleCategoriasChange(option.value)
                            }
                        />
                        <label htmlFor={`dificultad-${option.id}`}>
                            {option.content}
                        </label>
                    </div>
                ))}
            </div>

            <div className="side-filter__divider"></div>

            <h2 className="side-filter__title">Tiempo de preparación</h2>

            <div className="side-filter__options">
                {preparacionOptions.map(option => (
                    <div key={option.id} className='side-filter__checkbox-wrapper'>
                        <input
                            className="side-filter__checkbox"
                            type="checkbox"
                            id={`dificultad-${option.id}`}
                            value={option.value}
                            checked={preparacion.includes(option.value)}
                            onChange={() =>
                                handlePreparacionChange(option.value)
                            }
                        />
                        <label htmlFor={`dificultad-${option.id}`}>
                            {option.content}
                        </label>
                    </div>
                ))}
            </div>

            <div className="side-filter__divider"></div>
        </section>
    );
};