import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {MdKitchen} from 'react-icons/md';
import {Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import RecipeDetails from "./RecipeDetails";
import AlertPopOver from "./AlertPopOver";
import Next from './Next';
import { ThemeContext } from '../Themes/theme-context';

const Recipe = () => {
    const {theme, toggle, dark} = useContext(ThemeContext);
    const [query, setQuery] = useState("lentils");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    const [search, setSearch] = useState("");
    const [data, setData] = useState("");
    let nextPage = "";
    
    const url =`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=053f66cd&app_key=977184b019927b0735bdc41312d1881a`;
    
    const getRecipe = async () =>{
        if(query !== "")
        {
        const res = await axios.get(url);
        if(res.data.more){
            return setAlert("No food with such name");
        }
        setRecipes(res.data.hits);
        setData(res.data);
        console.log(res.data);
        setAlert("");
        setSearch("");
        nextPage = res.data._links.next.href; 
        }
        else{
            setAlert("Please fill the form");
        }
    }
    
    useEffect(() => {
        if(!localStorage.getItem("recipe") || JSON.parse(localStorage.getItem("recipe")) === 0)
            localStorage.setItem("recipe", JSON.stringify(data));
    }, [recipes])
    
    useEffect(()=>{
        getRecipe();
    },[query]);

    const onSubmit = (e)=>{
        e.preventDefault();
        setQuery(search);
    }

    const updateSearch= (e)=>{
        setSearch(e.target.value);
    }
    return(
        <div className='recipe-app' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
            <Button onClick={toggle} style={{backgroundColor: theme.backgroundColor, color: theme.color, outline:"none"}} className="toggle-button">
                Toggle to {!dark ? "Dark" : "Light"} theme
            </Button>
            <Button className="kitchen-button" href="/kitchen">{<MdKitchen size="50px"/>}</Button>
            <h1>Recipe Finder</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <AlertPopOver variant="danger" alert={alert} show={true}/>}
                <input type="text" placeholder="Search Food" autoComplete="off" onChange={updateSearch} value={search}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <RecipeDetails key={uuidv4()} recipe={recipe}/>)}
            </div>
            <Next nextPage={nextPage}/>
        </div>
    );
}

export default Recipe;
