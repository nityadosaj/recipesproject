import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return(
      <div className="App">
        {/* <Routes>
          <Route exact path='/' component={Recipe}>Recipe</Route>
          <Route exact path='/details' component={RecipeDetails}>RecipeDetails</Route>
        </Routes> */}

        <Recipe/>
      </div>
  )
}

export default App;
