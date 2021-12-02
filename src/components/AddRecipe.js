import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {MdAddShoppingCart} from 'react-icons/md';

//not implemented yet
//Would have stored the recipe links when clicked and sent it to Kitchen.js

const AddRecipe = ({links}) => {
    const {self} = links;
    const [state, setState] = useState("");
    const [data, setData] = useState([]);
    //console.log(self);

    useEffect(()=>{
        localStorage.setItem("recipeLink", JSON.stringify(state));
    }, [state])
    
    const onClick = ()=>{
        console.log(self.href);
        setState(self.href);
        setData(JSON.parse(localStorage.getItem("recipeLink")));
        console.log(data);
        data.push(state);
    }

    return (
        <div>
          <Button onClick={onClick}>
          {<MdAddShoppingCart size="25px" color="yellow"/>}
              </Button>  
        </div>
    )
}

export default AddRecipe
