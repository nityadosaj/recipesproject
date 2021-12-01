import React, {useState} from 'react';
import { Toast, ToastContainer} from 'react-bootstrap';

function AlertPopOver(props){
    const [show, setShow] = useState(props.show);
    
    return(
        <ToastContainer position="top-end" className="p-3">
            <Toast bg={props.variant.toLowerCase()} onClose={()=>setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{props.alert}</strong>
                    <small className="text-muted">2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
            </Toast>
        </ToastContainer>
    )
    
}

export default AlertPopOver;
