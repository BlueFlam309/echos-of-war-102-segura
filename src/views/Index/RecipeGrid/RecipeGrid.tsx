import './recipe-grid.scss'
import { recipes } from '../../../data/recipes/recipes';
import { RecipeCard } from './components/RecipeCard';
import { useNavigate } from 'react-router-dom';

export const RecipeGrid = () => {
    const navigate = useNavigate();

    const handleRecipeClick = (recipeId: number) => {
        const recipe = recipes.find(item => item.id === recipeId);

        if (!recipe) return;

        navigate(`/receta/${recipe.id}`, {
            state: { recipe }
        });
    };
    return(
        <section className='recipe-grid'>
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} image={recipe.image} name={recipe.name} desc={recipe.description}
                    prep_time={recipe.preparationTime} dificultad={recipe.difficulty} tipo={recipe.foodType} 
                    onclick={() => handleRecipeClick(recipe.id)}/>
            ))}
        </section>
    );
}