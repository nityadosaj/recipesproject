import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import Recipe from './components/Recipe';
import ScrollButton from './components/ScrollButton';
import { Content} from './components/Styles';
import Kitchen from './components/Kitchen/Kitchen';

//Creates Routes and a Scroll Button which takes you to top of the page

function App() {

  return(
      <div className="App">
        
        {/**Routes */}
        <Router>
          <Routes>
            <Route path="/" element={<Recipe/>}/>
            <Route path="/kitchen" element={<Kitchen/>}/>
            <Route path="/next"/>
          </Routes>
        </Router>

        {/**Scroll button*/}
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment> 
      </div>
  )
}

export default App;
