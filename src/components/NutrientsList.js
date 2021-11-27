import React from 'react';

const NutrientsList = ({recipe}) => {
    const {CA, CHOCDF, CHOLE, ENERC_KAL, FAT, FE, FIBTG, FOLAC, K, MG, NA, P, PROCNT, SUGAR, TOCPHA, VITA_RAE, VITB6A, VITB12, VITC, VITD, VITK1, WATER, ZN} = recipe.recipe.totalNutrients;
    return (
        <div className="nutrients_list">
            <h3>This Recipe has:</h3><br/>
            <div className="listTable">
                <table>
                    <thead>
                    <tr>
                        <th>Nutrients</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{CA.label}</td>
                        <td>{CHOCDF.label}</td>
                        <td>{CHOLE.label}</td>
                        <td>{ENERC_KAL.label}</td>
                        <td>{FAT.label}</td>
                        <td>{FE.label}</td>
                        <td>{FIBTG.label}</td>
                        <td>{FOLAC.label}</td>
                        <td>{K.label}</td>
                        <td>{MG.label}</td>
                        <td>{NA.label}</td>
                        <td>{P.label}</td>
                        <td>{PROCNT.label}</td>
                        <td>{SUGAR.label}</td>
                        <td>{TOCPHA.label}</td>
                        <td>{VITA_RAE.label}</td>
                        <td>{VITB6A.label}</td>
                        <td>{VITB12.label}</td>
                        <td>{VITC.label}</td>
                        <td>{VITD.label}</td>
                        <td>{VITK1.label}</td>
                        <td>{WATER.label}</td>
                        <td>{ZN.label}</td>
                    </tr>
                    <tr>
                        <td>{Math.ceil(CA.quantity) + " " + CA.unit}</td>
                        <td>{Math.ceil(CHOCDF.quantity) + " " + CHOCDF.unit}</td>
                        <td>{Math.ceil(CHOLE.quantity) + " " + CHOLE.unit}</td>
                        <td>{Math.ceil(ENERC_KAL.quantity) + " " + ENERC_KAL.unit}</td>
                        <td>{Math.ceil(FAT.quantity) + " " + FAT.unit}</td>
                        <td>{Math.ceil(FE.quantity) + " " + FE.unit}</td>
                        <td>{Math.ceil(FIBTG.quantity) + " " + FIBTG.unit}</td>
                        <td>{Math.ceil(FOLAC.quantity) + " " + FOLAC.unit}</td>
                        <td>{Math.ceil(K.quantity) + " " + K.unit}</td>
                        <td>{Math.ceil(MG.quantity) + " " + MG.unit}</td>
                        <td>{Math.ceil(NA.quantity) + " " + NA.unit}</td>
                        <td>{Math.ceil(P.quantity) + " " + P.unit}</td>
                        <td>{Math.ceil(PROCNT.quantity) + " " + PROCNT.unit}</td>
                        <td>{Math.ceil(SUGAR.quantity) + " " + SUGAR.unit}</td>
                        <td>{Math.ceil(TOCPHA.quantity) + " " + TOCPHA.unit}</td>
                        <td>{Math.ceil(VITA_RAE.quantity) + " " + VITA_RAE.unit}</td>
                        <td>{Math.ceil(VITB6A.quantity) + " " + VITB6A.unit}</td>
                        <td>{Math.ceil(VITB12.quantity) + " " + VITB12.unit}</td>
                        <td>{Math.ceil(VITC.quantity) + " " + VITC.unit}</td>
                        <td>{Math.ceil(VITD.quantity) + " " + VITD.unit}</td>
                        <td>{Math.ceil(VITK1.quantity) + " " + VITK1.unit}</td>
                        <td>{Math.ceil(WATER.quantity) + " " + WATER.unit}</td>
                        <td>{Math.ceil(ZN.quantity) + " " + ZN.unit}</td>                    
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default NutrientsList;
