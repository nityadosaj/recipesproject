import React from 'react';
import {Modal, Button, Table} from 'react-bootstrap';

function NutrientsTable(props){
    return(
        <Modal
            {...props}
            className="nutrients_list"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Nutrients
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* {props.tn.CA.label} */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{props.tn.CA.label}</td>
                            <td>{Math.round(props.tn.CA.quantity) + " " + props.tn.CA.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.CHOCDF.label}</td>
                            <td>{Math.round(props.tn.CHOCDF.quantity) + " " + props.tn.CHOCDF.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.CHOLE.label}</td>
                            <td>{Math.round(props.tn.CHOLE.quantity) + " " + props.tn.CHOLE.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.ENERC_KCAL.label}</td>
                            <td>{Math.round(props.tn.ENERC_KCAL.quantity) + " " + props.tn.ENERC_KCAL.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.FAT.label}</td>
                            <td>{Math.round(props.tn.FAT.quantity) + " " + props.tn.FAT.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.FE.label}</td>
                            <td>{Math.round(props.tn.FE.quantity) + " " + props.tn.FE.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.FIBTG.label}</td>
                            <td>{Math.round(props.tn.FIBTG.quantity) + " " + props.tn.FIBTG.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.FOLAC.label}</td>
                            <td>{Math.round(props.tn.FOLAC.quantity) + " " + props.tn.FOLAC.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.K.label}</td>
                            <td>{Math.round(props.tn.K.quantity) + " " + props.tn.K.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.MG.label}</td>
                            <td>{Math.round(props.tn.MG.quantity) + " " + props.tn.MG.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.NA.label}</td>
                            <td>{Math.round(props.tn.NA.quantity) + " " + props.tn.NA.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.P.label}</td>
                            <td>{Math.round(props.tn.P.quantity) + " " + props.tn.P.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.PROCNT.label}</td>
                            <td>{Math.round(props.tn.PROCNT.quantity) + " " + props.tn.PROCNT.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.SUGAR.label}</td>
                            <td>{Math.round(props.tn.SUGAR.quantity) + " " + props.tn.SUGAR.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.TOCPHA.label}</td>
                            <td>{Math.round(props.tn.TOCPHA.quantity) + " " + props.tn.TOCPHA.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.VITA_RAE.label}</td>
                            <td>{Math.round(props.tn.VITA_RAE.quantity) + " " + props.tn.VITA_RAE.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.VITB6A.label}</td>
                            <td>{Math.round(props.tn.VITB6A.quantity) + " " + props.tn.VITB6A.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.VITB12.label}</td>
                            <td>{Math.round(props.tn.VITB12.quantity) + " " + props.tn.VITB12.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.VITC.label}</td>
                            <td>{Math.round(props.tn.VITC.quantity) + " " + props.tn.VITC.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.VITK1.label}</td>
                            <td>{Math.round(props.tn.VITK1.quantity) + " " + props.tn.VITK1.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.WATER.label}</td>
                            <td>{Math.round(props.tn.WATER.quantity) + " " + props.tn.WATER.unit}</td>
                        </tr>
                        <tr>
                            <td>{props.tn.ZN.label}</td>
                            <td>{Math.round(props.tn.ZN.quantity) + " " + props.tn.ZN.unit}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NutrientsTable;