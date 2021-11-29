import React, {useState} from 'react';
import { IngredientList } from './IngredientList';
import NutrientsList from './NutrientsList';

const RecipeDetails = ({recipe}) => {
    const [loading, setloading] = useState(false); //loading
    const {label, image, ingredients, totalNutrients} = recipe.recipe;

    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <NutrientsList totalNutrients={totalNutrients}/>
            <button onClick={()=>setloading(!loading)}>Ingredients</button>
        {loading && <IngredientList ingredients={ingredients}/>}
        
        </div>
    )
}

 export default RecipeDetails;
//