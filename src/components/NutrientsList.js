import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import NutrientsTable from './NutrientsTable';

//Button for nutrients list and calls nutrients table

function NutrientsList({totalNutrients})
{
    const [modalShow, setModalShow] = useState(false);
    const tn = totalNutrients;
        return(
            <>
                <Button variant = "primary" onClick={()=> setModalShow(true)} className="nutrients">
                    Nutrients List
                </Button> 
                <NutrientsTable
                    show={modalShow}
                    onHide={()=>setModalShow(false)}
                    tn = {tn}
                />
            </>
        )
}

export default NutrientsList;