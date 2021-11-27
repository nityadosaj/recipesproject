import React, {useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import RecipeDetails from "./RecipeDetails";
import Alert  from "./Alert";

const Recipe = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    
    const url =`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=053f66cd&app_key=977184b019927b0735bdc41312d1881a`;
    
    const getRecipe = async () =>{
        if(query !== "")
        {
        const res = await axios.get(url);
        if(res.data.more){
            return setAlert("No food with such name");
        }
        setRecipes(res.data.hits);
        console.log(res);
        setAlert("");
        setQuery("");
        }
        else{
        setAlert("Please fill the form");
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        getRecipe();
    }

    const onChange = (e)=>{
        setQuery(e.target.value);
    }
    return(
        <div className='App'>
            <h1>Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert}/>}
                <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <RecipeDetails key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    );
}

export default Recipe;
