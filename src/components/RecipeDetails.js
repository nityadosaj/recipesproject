import React, {useState} from 'react';
import { IngredientList } from './IngredientList';
import NutrientsList from './NutrientsList';
import AddRecipe from './AddRecipe';

const RecipeDetails = ({recipe}) => {
    const [loading, setloading] = useState(false); //loading
    const {_links} = recipe;
    const {label, image, ingredients, totalNutrients} = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <NutrientsList totalNutrients={totalNutrients}/>
            <button onClick={()=>setloading(!loading)}>Ingredients</button>
        {loading && <IngredientList ingredients={ingredients}/>}
        <AddRecipe links={_links}/>
        </div>
    )
}

 export default RecipeDetails;
//