import React from 'react';
import {v4 as uuidv4} from 'uuid';

//ingredient list with text and weight

export const IngredientList = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="ingredient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">Weight - {Math.round(ingredient.weight) + " g"}</li>
            </ul>
        )
    })
}
