import React, {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';

function AlertPopOver({alert}){
    const [show, setShow] = useState(false);
    if(show)
    {
        return (
            <Alert variant="danger" onClose={()=>setShow(false)} dismissible>
                <Alert.Heading>Seems like we have a problem, Scotty!</Alert.Heading>
                {alert}
            </Alert>
        )
    }
    return <Button onClick={()=>setShow(true)}>Show Alert</Button>;
}

export default AlertPopOver;
