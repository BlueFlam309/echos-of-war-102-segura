import './recipe-info.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import type { Recipe } from '../../data/recipes/recipes';
import { arrow_left_icon, cook_icon, default_profile_pic, difficulty_icon, star_icon } from '../../data/img/img-data';

export const RecipeInfo = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const recipe = (state as { recipe?: Recipe } | null)?.recipe;

    if (!recipe) {
        return (
            <section>
                <p>No se encontró la receta seleccionada.</p>
                <button onClick={() => navigate('/recetas')}>
                    Volver a recetas
                </button>
            </section>
        );
    }

    return (
        <section className='recipe-info'>
            <div className='recipe-info__header'>
                <img className='recipe-info__image' src={recipe.image} alt={recipe.name} />
                <div className='recipe-info__summary'>
                    <h1 className='recipe-info__name'>{recipe.name}</h1>
                    <div className='recipe-info__extra'>
                        <div className='recipe-info__extra-left'>
                            <p className='recipe-info__extra-op'>
                                <span className='recipe-info__extra-media'>
                                    <img className='recipe-info__extra-icon' src={cook_icon.url} alt={cook_icon.alt} />
                                </span>
                                {recipe.preparationTime}
                            </p>
                            <p className='recipe-info__extra-op'>
                                <span className='recipe-info__extra-media'>
                                    <img className='recipe-info__extra-icon' src={difficulty_icon.url} alt={difficulty_icon.alt} />
                                </span>
                                {recipe.difficulty}
                            </p>
                        </div>
                        <p className='recipe-info__rating'>
                            {recipe.rating}
                            <span className='recipe-info__rating-media'>
                                <img className='recipe-info__rating-icon' src={star_icon.url} alt={star_icon.alt} />
                            </span>
                        </p>
                    </div>
                    <div className='recipe-info__divider'></div>
                    <div className='recipe-info__user'>
                        <div className='recipe-info__user-media'>
                            <img
                                className='recipe-info__profile-pic'
                                src={default_profile_pic.url}
                                alt="profile pic"
                            />
                        </div>
                        <p className='recipe-info__user-name'>{recipe.user}</p>
                    </div>
                </div>
            </div>
            <div className='recipe-info__content'>
                <p className='recipe-info__desc'>{recipe.description}</p>
                <div className='recipe-info__divider'></div>
                <div className='recipe-info__ingredientes'>
                    <h2 className='recipe-info__title'>Ingredientes</h2>
                    <ul className='recipe-info__ingredientes-list'>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className='recipe-info__ingredientes-item'>
                                <p className='recipe-info__ingrediente'> {item.name}: {item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='recipe-info__divider'></div>
                <div className='recipe-info__prep'>
                    <h2 className='recipe-info__title'>Preparacion</h2>
                    <ul className='recipe-info__prep-list'>
                        {recipe.steps.map((item, index) => (
                            <li key={index} className='recipe-info__prep-item'>
                                <p className='recipe-info__step'><strong>{index + 1}.- </strong>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className='recipe-info__back' onClick={() => navigate('/')}>
                <img className='recipe-info__back-icon' src={arrow_left_icon.url} alt={arrow_left_icon.alt} />
                Regresar
            </button>
        </section>
    );
}