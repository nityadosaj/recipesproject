import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import Recipe from './components/Recipe';
import ScrollButton from './components/ScrollButton';
import { Content} from './components/Styles';

function App() {
  return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Recipe/>}/>
            {/* <Route path="/nutrients" element={<NutrientsList recipe={JSON.parse(localStorage.getItem('recipe'))}/>}/> */}
          </Routes>
        </Router>
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment> 
      </div>
  )
}

export default App;
