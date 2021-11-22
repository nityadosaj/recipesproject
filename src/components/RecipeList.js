import React, { useState } from 'react';
import axios from 'axios';
import url from '../URL';
import { render } from "@testing-library/react";
import ImageComponents from './ImageComponents';

function RecipeList()
{
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    
    render()
    {
        async function getRecipes(recipeInfo)
        {
            const result = await axios.get(url);
            const data = result.data;
            setRecipes(data.hits);
            console.log(result.data);
        }

        const onSubmit = (e) => {
            e.preventDefault();
            getRecipes();
        };

        const mappingRecipes = () => {
            recipes !== [] && recipes.map((recipe)=>{
                return <ImageComponents recipe={recipe}/>;
            })
        }
        
        return(
            <div className="recipeList">
                <form onSubmit={onSubmit}>
                    <input
                        className='recipe_input'
                        type='text'
                        placeholder='enter ingridient'
                        autoComplete='off'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <input className="recipe_submit" type="submit" value = "Search"/>
                </form>

                <div className="recipes">
                    {mappingRecipes}
                </div>
            </div>
        )
    }
}

export default RecipeList;