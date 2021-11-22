import React from 'react';
import {v4 as uuidv4} from "uuid";
import { render } from '@testing-library/react';

function ImageComponents({recipe})
{
    render()
    {
        return(
            recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
                <div className="recipeTile" onClick={()=>window.open(recipe["recipe"]["url"])}>
                    <img className="recipeTile_img" src={recipe["recipe"]["image"]}/>
                    <p className="recipeTile_name" key={uuidv4()}>
                        {recipe["recipe"]["label"]}
                    </p>
                </div>
            )
        )
    }
}

export default ImageComponents;