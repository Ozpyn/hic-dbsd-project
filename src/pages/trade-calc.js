import React from "react";
//import Cookies from 'js-cookie'; 
import { GeneralBox, BoxRow, YearForm, EngineForm, AddPhotoButton, PhotoRow, EngineColumn, DriTrForm, WheelsForm, CustomModCheck, ModDesc,
    TransmColumn, MileageForm, VehicleDetailBox, VehicleHistoryBox, VehicleConditionBox, OrigOwner, ChkIssues, ChkRent, ExtCondCheck,
    IntCondCheck, TransmForm, ExterColumn, InterColumn, MechColumn, MechCondCheck,
    SubmitTradeButton,
    SendToPayCalc,
    TradeInCalcBox} from "../components/TradeInElements";
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
                        <YearForm/>
                        <MakeForm/>
                        <MileageForm/>
                    </GeneralBox>
                    <VehicleDetailBox>
                        <h3>Vehicle Details</h3>
                        <EngineColumn>
                            <EngineForm/>
                            <DriTrForm/>
                            <CustomModCheck/>
                        </EngineColumn>
                        <TransmColumn>
                            <TransmForm/>
                            <WheelsForm/>
                            <ModDesc/>
                        </TransmColumn>
                    </VehicleDetailBox>
                    <VehicleHistoryBox>
                        <h3>Vehicle History</h3>
                        <OrigOwner/>
                        <ChkIssues/>
                        <ChkRent/>
                    </VehicleHistoryBox>
                </BoxRow>
            </div>
            <div>
                <BoxRow>
                    <GeneralBox>
                        <h3>Add Photos</h3>
                        <PhotoRow>
                            <label for = 'front'>Front</label>
                            <AddPhotoButton id = 'front'/>
                        </PhotoRow>
                        <PhotoRow>
                            <label for = 'driver'>Driver Side</label>
                            <AddPhotoButton id = 'driver'/>
                        </PhotoRow>
                        <PhotoRow>
                            <label for = 'pass'>Passenger Side</label>
                            <AddPhotoButton id = 'pass'/>
                        </PhotoRow>
                        <PhotoRow>
                            <label for = 'back'>Back</label>
                            <AddPhotoButton id = 'back'/>
                        </PhotoRow>
                        <PhotoRow>
                            <label for = 'int'>Interior</label>
                            <AddPhotoButton id = 'int'/>
                        </PhotoRow>
                    </GeneralBox>
                    <VehicleConditionBox>
                        <h3>Vehicle Condition</h3>
                        <p>Check if There are any Problems or Issues</p>
                        <ExterColumn>
                            <ExtCondCheck/>
                        </ExterColumn>
                        <InterColumn>
                            <IntCondCheck/>
                        </InterColumn>
                        <MechColumn>
                            <MechCondCheck/>
                        </MechColumn>
                    </VehicleConditionBox>
                </BoxRow>
            </div>
            
            <div>
                <BoxRow>
                    <TradeInCalcBox>
                        <PhotoRow>
                            <SubmitTradeButton/>
                            <SendToPayCalc/>
                        </PhotoRow>
                    </TradeInCalcBox>
                </BoxRow>
            </div>
        </div>
    );
};
 
export default TradeCalc;