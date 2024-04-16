import React from "react";
// import Cookies from 'js-cookie'; 
import { GeneralBox, BoxRow, YearForm, AddPhotoButton, PhotoColumn, MileageForm, VehicleDetailBox, 
    VehicleHistoryBox, VehicleConditionBox } from "../components/TradeInElements";
import MakeForm from "../components/TradeInElements";


// To save the trade-in value use the following:
// Cookies.set('trade-in-value', *value*, {expires: 10});

const TradeCalc = () => {
    return (
        <div>
            <h1>Trade In Calculator</h1>
            <div>
                <BoxRow>
                    <GeneralBox>
                        <h3>Make and Model</h3>
                        <p>Year: </p>
                        <YearForm/>
                        <MakeForm/>
                        <MileageForm/>
                    </GeneralBox>
                    
                </BoxRow>
            </div>
                <BoxRow>
                <GeneralBox>
                        <h3>Add Photos</h3>
                        <p>Front</p>
                        <p>Driver Side</p>
                        <p>Passenger Side</p>
                        <p>Back</p>
                        <p>Interior</p>
                        <PhotoColumn>
                            <AddPhotoButton/>
                            <AddPhotoButton/>
                            <AddPhotoButton/>
                            <AddPhotoButton/>
                            <AddPhotoButton/>
                        </PhotoColumn>
                    </GeneralBox>
                </BoxRow>
            <div>
                <VehicleDetailBox>

                </VehicleDetailBox>
            </div>
            <div>
                <VehicleHistoryBox>

                </VehicleHistoryBox>
            </div>
            <div>
                <VehicleConditionBox>
                    
                </VehicleConditionBox>
            </div>
        </div>
    );
};
 
export default TradeCalc;