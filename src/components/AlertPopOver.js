import React, {useState} from 'react';
import { Toast, ToastContainer} from 'react-bootstrap';

function AlertPopOver(props){
    const [show, setShow] = useState(props.show);
    
    return(
        <ToastContainer position="top-center" className="p-3">
            <Toast bg={props.variant.toLowerCase()} onClose={()=>setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Looks, like we have a problem!</strong>
                </Toast.Header>
                <Toast.Body>{props.alert}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
    
}

export default AlertPopOver;
