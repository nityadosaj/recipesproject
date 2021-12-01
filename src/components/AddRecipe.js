import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {MdAddShoppingCart} from 'react-icons/md';

const AddRecipe = ({links}) => {
    const {self} = links;
    const [state, setState] = useState([]);

    const onClick = ()=>{
        setState(self.href);
    }
    useEffect(()=>{
        localStorage.setItem("recipeLink", JSON.stringify(state));
    }, [state])

    return (
        <div>
          <Button onClick={onClick}>
          {<MdAddShoppingCart size="30px" color="yellow"/>}
              </Button>  
        </div>
    )
}

export default AddRecipe
