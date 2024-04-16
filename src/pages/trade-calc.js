import React from "react";
// import Cookies from 'js-cookie'; 
import { GeneralBox, BoxRow, YearForm, EngineForm, AddPhotoButton, PhotoColumn, EngineColumn, DriTrForm, WheelsForm, CustomModCheck, ModDesc,
    TransmColumn, MileageForm, VehicleDetailBox, VehicleHistoryBox, VehicleConditionBox, OrigOwner, ChkIssues, ChkRent, ExtCondCheck,
    IntCondCheck, TransmForm, ExterColumn, InterColumn, MechColumn, MechCondCheck,
    SubmitTradeButton,
    SendToPayCalc} from "../components/TradeInElements";
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
                    <VehicleConditionBox>
                        <h3>Vehicle Condition</h3>
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
                    <SubmitTradeButton/>
                    <SendToPayCalc/>
                </BoxRow>
            </div>
        </div>
    );
};
 
export default TradeCalc;