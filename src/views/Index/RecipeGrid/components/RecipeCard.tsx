interface Props {
    image: string;
    name: string;
    desc: string;
    prep_time: string;
    dificultad: string;
    tipo: string;
    onclick: () => void;
}

export const RecipeCard = ({ image, name, desc, prep_time, dificultad, tipo, onclick}: Props) => {
    return(
        <div className='recipe-card'>
            <div className="recipe-card__media" onClick={onclick}>
                <img className="recipe-card__image" src={image} alt={name} />
            </div>
            <div className="recipe-card__content">
                <h2 className="recipe-card__name">{name}</h2>
                <h3 className="recipe-card__type">{tipo}</h3>
                <div className="recipe-card__divider"></div>
                <p className="recipe-card__desc">{desc}</p>
                <div className="recipe-card__desc-wrapper">
                    <p className="recipe-card__plus">{prep_time}</p>
                    <p className="recipe-card__plus">{dificultad}</p>
                </div>
            </div>
        </div>
    );
}