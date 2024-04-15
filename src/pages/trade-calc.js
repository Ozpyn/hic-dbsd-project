import React from "react";
// import Cookies from 'js-cookie'; 
import { MandMBox, YearForm, AddPhotosBox, VehicleDetailBox, 
    VehicleHistoryBox, VehicleConditionBox } from "../components/TradeInElements";
import MakeForm from "../components/TradeInElements";


// To save the trade-in value use the following:
// Cookies.set('trade-in-value', *value*, {expires: 10});

const TradeCalc = () => {
    return (
        <div>
            <h1>Trade In Calculator</h1>
            <MandMBox>
                <h3>Make and Model</h3>
                <YearForm></YearForm>
                <MakeForm></MakeForm>
            </MandMBox>
            <AddPhotosBox>

            </AddPhotosBox>
            <VehicleDetailBox>

            </VehicleDetailBox>
            <VehicleHistoryBox>

            </VehicleHistoryBox>
            <VehicleConditionBox>
                
            </VehicleConditionBox>
        </div>
    );
};
 
export default TradeCalc;