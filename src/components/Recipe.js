import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MdKitchen} from 'react-icons/md';
import {Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import RecipeDetails from "./RecipeDetails";
import AlertPopOver from "./AlertPopOver";

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
        console.log(res.data.hits);
        setAlert("");
        setQuery("");
        }
        else{
        setAlert("Please fill the form");
        }
    }
    useEffect(() => {
        localStorage.setItem("recipe", JSON.stringify(recipes));
    }, [recipes])
    
    const onSubmit = (e)=>{
        e.preventDefault();
        getRecipe();
    }

    const onChange = (e)=>{
        setQuery(e.target.value);
    }
    return(
        <div className='App'>
            <Button className="kitchen-button" href="/kitchen">{<MdKitchen size="50px"/>}</Button>
            <h1>Recipe Finder</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <AlertPopOver variant="danger" alert={alert} show={true}/>}
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
